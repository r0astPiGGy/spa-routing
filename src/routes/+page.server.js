import { getAllUsers } from "$lib/data/users.js";

export async function load() {
    const users = await getAllUsers()

    return {
      users: users.map(u => ({
          id: u.id,
          name: u.name,
          username: u.username,
          email: u.email,
          phone: u.phone
      }))
    }
}