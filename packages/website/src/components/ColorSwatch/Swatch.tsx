import React from 'react'
import { css } from '@emotion/core'

export const Swatch: React.FC<{
  hex: string
}> = ({ hex }) => (
  <div
    css={css({
      float: 'left',
      height: 40,
      width: 40,
      marginRight: 20,
      borderRadius: 4,
      border: '1px solid transparent',
    })}
    style={{
      backgroundColor: hex,
    }}
  />
)
