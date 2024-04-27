import {BASE_URL} from "$lib/const.js";

export async function getAllUsers() {
    return await fetch(`${BASE_URL}/users`).then(r => r.json())
}

export async function getUserById(id) {
    return await fetch(`${BASE_URL}/users/${id}`).then(r => r.json())
}