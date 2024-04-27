<script>
    export let photo;
</script>

<a target="_blank" href="{photo.url}" class="relative max-w-full aspect-square bg-white max-h-fit transition-opacity hover:opacity-90">
    <img class="relative w-full h-full object-cover object-center"
         src={photo.thumbnailUrl}
         alt="{photo.title}"
    >
    <div class="flex items-end justify-start bg-gradient-to-t from-black from-5% to-transparent to-95% p-4 w-full h-full absolute top-0 start-0">
        <p class="text-xl text-white truncate">{photo.title}</p>
    </div>
</a>