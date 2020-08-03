import { css } from '@emotion/core'
import tokens from '@ruids/tokens'

const commonStyles = css({
    fontFamily: tokens.fontSans,
    fontSize: tokens.textSm,
    paddingLeft: tokens.spacing5,
    paddingRight: tokens.spacing5,
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.colorNeutral20,
    fontWeight: tokens.fontNormal,
})

export const getCellStyles = (context: string) => {
    const isHead = !!(context === 'head')

    return css`
        ${commonStyles};
        padding-bottom: ${isHead ? tokens.spacing3 : tokens.spacing5};
        padding-top: ${isHead ? tokens.spacing3 : tokens.spacing5};
        color: ${isHead ? tokens.colorTextLight : tokens.colorTextMid};
    `
}
