<script>
    import "../app.css";
</script>

<header class="relative px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
    <div class="py-4 border-b border-b-gray-200">
        <a class="text-lg" href="/">spa-routing</a>
    </div>
</header>


<section class="section pt-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <slot />
    </div>
</section>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
