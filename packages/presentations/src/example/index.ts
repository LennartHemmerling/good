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
        data: {}
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
