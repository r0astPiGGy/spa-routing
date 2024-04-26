<script>
    import UserCard from "$lib/components/UserCard.svelte";
</script>

<svelte:head>
    <title>All Users | spa-routing</title>
</svelte:head>

<section class="section pt-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl font-bold mb-12">
            All users
        </h1>
        <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-6">
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
        </div>
    </div>
</section>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>