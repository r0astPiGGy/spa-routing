<script>
    import UserCard from "$lib/components/UserCard.svelte";

    export let data;
</script>

<svelte:head>
    <title>All Users | spa-routing</title>
</svelte:head>

<h1 class="text-4xl font-bold mb-12">All users</h1>
<div class="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
    {#each data.users as user }
        <UserCard user={user} />
    {/each}
</div>