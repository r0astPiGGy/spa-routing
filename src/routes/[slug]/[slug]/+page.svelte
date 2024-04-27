<script>
    import PhotoCard from "$lib/components/PhotoCard.svelte";
    import InfiniteScroll from "$lib/components/InfiniteScroll.svelte";
    import {onMount} from "svelte";
    import {getPhotosByAlbumId} from "$lib/data/albums.js";

    export let data;

    let page = 1;

    let allPhotos = [];
    let newPhotos = [];

    async function fetchData() {
        newPhotos = await getPhotosByAlbumId(data.album.id, page)
    }

    onMount(() => {
        fetchData()
    })

    $: allPhotos = [
        ...allPhotos,
        ...newPhotos
    ]
</script>

<svelte:head>
    <title>{data.album.title} - Photos | spa-routing</title>
</svelte:head>

<p>{data.album.title}</p>
<h1 class="text-4xl font-bold mt-2 mb-12">Photos</h1>
<div class="grid grid-cols-1 divide-y divide-x lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
    {#each allPhotos as photo}
        <PhotoCard photo={photo}/>
    {/each}
    <InfiniteScroll
            hasMore={newPhotos.length}
            on:loadMore={() => {page++; fetchData()}}
    />
</div>