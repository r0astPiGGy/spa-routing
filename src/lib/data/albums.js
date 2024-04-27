import {BASE_URL} from "$lib/const.js";

export async function getAlbumsByUserId(userId) {
    const albums = await fetch(`${BASE_URL}/users/${userId}/albums/`).then(r => r.json())

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

async function getPreview(albumId) {
    return await getPhotosByAlbumId(albumId).then(photos => photos[0])
}

export async function getPhotosByAlbumId(albumId, page = 0, perPage = 10) {
    const params = new URLSearchParams(
        {
            "_perPage": perPage,
            "_page": page
        }
    ).toString()

    return await fetch(`${BASE_URL}/albums/${albumId}/photos?${params}`).then(r => r.json())
}