import styled from '@emotion/styled'
import tokens from '@ruids/tokens'

export const StyledTable = styled.table({
    minWidth: '100%',
    lineHeight: tokens.leadingNormal
})

export const TableContainer = styled.div({
    display: 'inline-block',
    minWidth: '100%',
    boxShadow: tokens.shadow,
    borderRadius: `calc(1rem * (3 / ${tokens.fontBaseDefault}))`
})
