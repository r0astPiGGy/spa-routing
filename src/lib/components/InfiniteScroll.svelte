<script>
    import { onDestroy, createEventDispatcher } from "svelte";

    export let hasMore = true;

    const dispatch = createEventDispatcher();
    let isLoadMore = false;
    let component;

    $: {
        if (component) {
            window.addEventListener("scroll", onScroll);
        }
    }

    const hasReachedBottom = element => {
        const contentHeight = element.offsetHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        return scrollTop + windowHeight >= contentHeight
    };

    const onScroll = () => {
        if (component.parentNode && hasReachedBottom(component.parentNode)) {
            if (!isLoadMore && hasMore) {
                dispatch("loadMore");
            }
            isLoadMore = true;
        } else {
            isLoadMore = false;
        }
    };

    onDestroy(() => {
        window.removeEventListener("scroll", null);
    });
</script>

<div bind:this={component} style="width:0px" />