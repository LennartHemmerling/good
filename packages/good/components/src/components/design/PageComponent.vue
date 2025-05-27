<script setup lang="ts">
defineProps<{
    design: 'plain' | 'split'
    pattern?: { src?: string }
}>()
</script>

<template lang="pug">
    .page-page-component(:class='design')
        .page-page-component_content
            slot

            img.page-page-component_img(
                v-if='pattern?.src',
                :src='pattern.src'
            )
</template>

<style scoped>
.page-page-component {
    display: flex;

    padding: 50px;
    padding-left: 150px;
}

.page-page-component.plain,
.page-page-component.split {
    position: relative;

    justify-content: flex-start;
    align-items: stretch;
}

.page-page-component.plain .page-page-component_content {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    gap: 50px;
}

.page-page-component.split .page-page-component_content {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-flow: column;

    gap: 50px;
}

.page-page-component.split .page-page-component_content > * {
    display: flex;
    flex-direction: column;

    gap: 50px;
}

.page-page-component.plain .page-page-component_img,
.page-page-component.split .page-page-component_img {
    width: 200px;
    height: 100%;
    z-index: -1;

    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;

    object-fit: cover;
    object-position: top left;
    opacity: 0.7;
}
</style>
