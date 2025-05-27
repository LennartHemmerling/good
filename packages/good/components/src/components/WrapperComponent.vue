<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'
import { ref, toRefs } from 'vue'

import type { Controller, Presentation } from '../types/pages'

const props = defineProps<{
    presentation: Presentation
}>()
const { presentation } = toRefs(props)

const currentPage = ref(0)

const controller = ref<Controller>({
    goToPage(page: number) {
        currentPage.value = Math.max(
            0,
            Math.min(page, presentation.value.pages.length)
        )
    },
    nextPage() {
        currentPage.value = Math.min(
            currentPage.value + 1,
            presentation.value.pages.length - 1
        )
    },
    previousPage() {
        currentPage.value = Math.max(currentPage.value - 1, 0)
    },
    toggleFullscreen() {
        if (!document.fullscreenElement)
            document.documentElement?.requestFullscreen()
        else document.exitFullscreen()
    }
})

onKeyStroke('ArrowDown', (e) => {
    e.preventDefault()

    controller.value.nextPage()
})

onKeyStroke('ArrowRight', (e) => {
    e.preventDefault()

    controller.value.nextPage()
})

onKeyStroke('ArrowUp', (e) => {
    e.preventDefault()

    controller.value.previousPage()
})

onKeyStroke('ArrowLeft', (e) => {
    e.preventDefault()

    controller.value.previousPage()
})

onKeyStroke('m', (e) => {
    e.preventDefault()

    controller.value.toggleFullscreen()
})
</script>

<template lang="pug">
    .wrapper-component
        nav.wrapper-component_nav
            template(v-for='(_, index) in presentation.pages')
                button.wrapper-component_nav-button(
                    :disabled='currentPage === index',
                    @click='currentPage = index'
                ) {{ index + 1 }}

        section.wrapper-component_content
            Transition(name='page', mode='out-in')
                component(
                    :is='presentation.pages[currentPage].component',
                    :controller='controller',
                    :meta='presentation.meta'
                )

        footer.wrapper-component_footer
            i {{ presentation.meta.dateString }}

            .wrapper-component_footer-source
                strong {{ presentation.meta.title }}
                i {{ presentation.meta.organization }}
                span -
                i {{ presentation.meta.author }}
</template>

<style scoped>
.wrapper-component {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas: 'nav content' 'nav footer';
}

.wrapper-component_nav {
    grid-area: nav;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;

    padding: 5px;
}

.wrapper-component_nav-button {
    width: 60px;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: solid 4px var(--white-2);
    border-radius: 10px;
    background-color: var(--white-1);

    color: var(--black-1);
    font-size: 17px;
    font-weight: 800;

    transition:
        border-color 500ms ease-in-out,
        background-color 500ms ease-in-out;
}

.wrapper-component_nav-button:disabled {
    border-color: var(--green-1);
    background-color: var(--green-1);

    color: var(--black-1);
}

.wrapper-component_content {
    width: 100%;
    height: 100%;

    display: flex;

    grid-area: content;
}

.wrapper-component_content > * {
    flex: 1;
}

.page-enter-active,
.page-leave-active {
    transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}

.wrapper-component_footer {
    grid-area: footer;

    z-index: 1;

    display: flex;
    justify-content: space-between;

    font-size: large;

    padding: 10px;
}

.wrapper-component_footer-source {
    display: flex;

    gap: 20px;
}
</style>
