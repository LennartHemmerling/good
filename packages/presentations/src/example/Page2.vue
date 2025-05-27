<script setup lang="ts">
import { PageComponent } from 'good-components'
</script>

<template lang="pug">
    PageComponent(design='plain', :pattern='{ src: "/pattern.png" }')
        h2 Designs

        .text
            | With
            .marked
                | the
                i design
                | property
            | you can define the structuring of components like the PageComponent and the TitlePageComponent.
            | This is a
            .marked plain
            | design.

        .text
            | Use
            .marked
                | the
                i pattern
                | property
            | to add a background image for PageComponents.
</template>

<style scoped></style>
