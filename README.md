# good-start

A vue setup to create presentations which are just good.

## how to start

### Try the example:

1. `bun i && bun start`
2. http://localhost:3450/present/Example

## presentations

Create presentations with [vue](https://vuejs.org/). A presentation is defined with the _Presentation_ type and setup with a typescript file. Each page is created with a vue file.

### file structure

Add presentations with this (or a similar) schema.

```
packages/presentations/src/example
- index.ts
- Page0.vue
- Page1.vue
- PageX.vue
```

### index.ts

Entrypoint of a presentation.

```
import type { Presentation } from 'good-types'

import Page0 from './Page0.vue'
import Page1 from './Page1.vue'
import Page2 from './Page2.vue'

export const presentation: Presentation = {
    meta: {
        title: 'An example presentation',
        author: 'Lennart Hemmerling',
        organization: 'from script',
        dateString: '27.05.2025',
        data: {
            // add any extra data here
        }
    },
    pages: [
        {
            component: Page0
        },
        {
            component: Page1
        },
        {
            component: Page2
        }
    ]
}
```

### Page0.ts

A page.

```
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
```
