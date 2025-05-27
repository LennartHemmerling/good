<script setup lang="ts">
import { TitlePageComponent } from 'good-components'
import type { Controller, Meta } from 'good-types'
import { toRefs } from 'vue'

const props = defineProps<{ meta: Meta; controller: Controller }>()
const { controller } = toRefs(props)

function action() {
    controller.value.toggleFullscreen()

    setTimeout(() => controller.value.nextPage(), 700)
}
</script>

<template lang="pug">
    TitlePageComponent(design='focus')
        h1 {{ meta.title }}!

        button(@click='action()')
            h2 - see for yourself -
</template>

<style scoped></style>
