import {getUserById} from "$lib/data/users.js";
import {error} from "@sveltejs/kit";
import {getAlbumById, getAlbumsByUserId, getPhotosByAlbumId} from "$lib/data/albums.js";

export async function load({ params }) {
    const album = await getAlbumById(params.slug)

    if (!album) throw error(404)

    return { album: album }
}