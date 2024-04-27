
<script>

    const album = {
        "id": 1,
        "userId": 1,
        "name": "Lorem ipsum dolor sit amet, consectetur",
        "link": "https://www.campervansweden.com/assets/img/blog/516/sweden-best-mountains.jpg"
    };

</script>

<a href="{album.userId}/{album.id}" class="relative max-w-full aspect-square bg-white max-h-fit transition-opacity hover:opacity-90">
    <img class="relative w-full h-full object-cover object-center"
         src={album.link}
         alt="mountains"
    >
    <div class="flex items-end justify-start bg-gradient-to-t from-black from-5% to-transparent to-95% p-4 w-full h-full absolute top-0 start-0">
        <p class="text-2xl text-white truncate">{album.name}</p>
    </div>
</a>