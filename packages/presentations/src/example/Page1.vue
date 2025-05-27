<script setup lang="ts">
import { PageComponent } from 'good-components'
</script>

<template lang="pug">
    PageComponent(design='plain')
        h2 Keybindings:

        .text
            .marked fullscreen toggle
            i (m)

        .text
            .marked previous page
            i (arrow-left | arrow-up)

        .text
            .marked next page
            i (arrow-right | arrow-down)
</template>

<style scoped></style>
