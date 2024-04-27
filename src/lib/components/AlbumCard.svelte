<script>
    export let album;
</script>

<a href="{album.userId}/{album.id}" class="relative max-w-full aspect-square bg-white max-h-fit transition-opacity hover:opacity-90">
    <img class="relative w-full h-full object-cover object-center"
         src={album.preview.thumbnailUrl}
         alt="Album preview"
    >
    <div class="flex items-end justify-start bg-gradient-to-t from-black from-5% to-transparent to-95% p-4 w-full h-full absolute top-0 start-0">
        <p class="text-xl text-white truncate">{album.title}</p>
    </div>
</a>