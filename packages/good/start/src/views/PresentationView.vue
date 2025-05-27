<script setup lang="ts">
import { WrapperComponent } from 'good-components'
import { presentations } from 'good-presentations'
import type { Presentation } from 'good-types'
import { computed, onMounted, shallowRef } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const key = computed(() => route.params['key'] as string)

const presentation = shallowRef<Presentation | null>()

onMounted(async () => {
    const pres = presentations.find(({ name }) => name === key.value)
    if (!pres) {
        presentation.value = null

        return
    }

    try {
        presentation.value = (await pres.resolve).presentation

        return
    } catch (e) {
        console.error(e)

        presentation.value = null

        return
    }
})
</script>

<template lang="pug">
    main(v-if='presentation')
        WrapperComponent(:presentation='presentation')
</template>

<style scoped>
main {
    width: 100vw;
    height: 100vh;
}
</style>
