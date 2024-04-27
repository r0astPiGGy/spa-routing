import {BASE_URL, PHOTOS_PER_PAGE} from "$lib/const.js";

export async function getAlbumsByUserId(userId) {
    return await fetch(`${BASE_URL}/users/${userId}/albums/`).then(r => r.json())
}

export async function getAlbumsByUserIdWithPreviews(userId) {
    const albums = await getAlbumsByUserId(userId)

    return await Promise
        .all(albums.map(it => getPreview(it.id)))
        .then(previews =>
            albums.map(album => ({
                id: album.id,
                userId: album.userId,
                title: album.title,
                preview: previews.find(p => p.albumId === album.id)
            })))
}

export async function getAlbumById(albumId) {
    return await fetch(`${BASE_URL}/albums/${albumId}/`).then(r => r.json())
}

export async function getPreview(albumId) {
    return await getPhotosByAlbumId(albumId, 1, 1).then(photos => photos[0])
}

export async function getPhotosByAlbumId(albumId, page = 1, perPage = PHOTOS_PER_PAGE) {
    const params = new URLSearchParams(
        {
            "_per_page": perPage,
            "_page": page,
            "_limit": perPage
        }
    ).toString()

    return await fetch(`${BASE_URL}/albums/${albumId}/photos?${params}`).then(r => r.json())
}