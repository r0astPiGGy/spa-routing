import {getUserById} from "$lib/data/users.js";
import {error} from "@sveltejs/kit";
import {getAlbumsByUserId, getAlbumsByUserIdWithPreviews} from "$lib/data/albums.js";

export async function load({ params }) {
    const user = await getUserById(params.slug)

    if (!user?.id) throw error(404)

    const albums = await getAlbumsByUserIdWithPreviews(user.id)

    return {
        user: user,
        albums: albums
    }
}