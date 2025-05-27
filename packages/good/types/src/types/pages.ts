export type Page = {
    component: any
}

export type Meta = {
    title: string
    author: string
    organization: string
    dateString: string
    data?: any
}

export type Presentation = {
    meta: Meta
    pages: Page[]
}

export type Controller = {
    goToPage: (page: number) => void
    nextPage: () => void
    previousPage: () => void
    toggleFullscreen: () => void
}
