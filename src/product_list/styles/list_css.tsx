import { css } from '@emotion/react'

export const category_css: {
    container: ReturnType<typeof css>,
} = {
    container: css({
        width: 260,
    }),
}

export const list_css: {
    container: ReturnType<typeof css>,
    item: ReturnType<typeof css>,
} = {
    container: css({
        maxWidth: 1600,
        width: '100%',
        marginRight: '3%',
        marginLeft: 30
    }),
    item: css({
        width: 200,
        marginRight: 30
    }),
}