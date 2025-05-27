<script setup lang="ts">
defineProps<{ design: 'focus' }>()
</script>

<template lang="pug">
    .title-page-component(:class='design')
        .title-page-component_content
            slot
</template>

<style scoped>
.title-page-component {
    display: flex;

    padding: 50px;
}

.title-page-component.focus {
    justify-content: center;
    align-items: center;
}

.title-page-component.focus .title-page-component_content {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 50px;

    text-align: center;
}
</style>
