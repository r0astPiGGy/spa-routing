<script>
    import AlbumCard from "$lib/components/AlbumCard.svelte";

    export let data;
</script>


<svelte:head>
    <title>{data.user.name} - Albums | spa-routing</title>
</svelte:head>


<p>{data.user.name}</p>
<h1 class="text-4xl font-bold mt-2 mb-12">Albums</h1>
<div class="grid grid-cols-1 divide-y divide-x lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
    {#each data.albums as album}
        <AlbumCard album={album}/>
    {/each}
</div>