import { css } from "@emotion/react";

export const flex_css = {
    flex_row: css({
        display: 'flex',
        flexDirection: 'row',
    }),
    flex_column: css({
        display: 'flex',
        flexDirection: 'column',
    }),
    flex_wrap: css({
        flexWrap: 'wrap'
    }),
    flex_center: css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }),
}

export const width100 = css({ width: '100%' })