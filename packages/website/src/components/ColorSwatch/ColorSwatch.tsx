import React, { useMemo } from 'react'
import { styles } from './styles'
import { rgb2cmyk } from '../../helpers/rgb2cmyk'

type Props = {
  name: string
  hex: string
}

const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

export const ColorSwatch: React.FC<Props> = ({ hex, name }) => {
  const { rgb, cmyk } = useMemo(() => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)
    const rgb = `${r}, ${g}, ${b}`

    const cmyk = rgb2cmyk(r, g, b)
    const cmykString = `${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k}`
    return {
      rgb,
      cmyk: cmykString,
    }
  }, [hex])

  return (
    <div className="w-full" css={styles.colorSwatch}>
      <div
        css={styles.header}
        style={{
          backgroundColor: hex,
        }}
      ></div>
      <div css={styles.body}>
        <div css={styles.wrap}>
          <div css={styles.item}>
            <div css={styles.label}>Text Class</div>
            <div css={styles.value}>text-{name}</div>
          </div>
          <div css={styles.item}>
            <div css={styles.label}>RGB</div>
            <div css={styles.value}>{rgb}</div>
          </div>
          <div css={styles.item}>
            <div css={styles.label}>CMYK</div>
            <div css={styles.value}>{cmyk}</div>
          </div>
        </div>
        <div css={styles.wrap}>
          <div css={styles.item}>
            <div css={styles.label}>Bg Class</div>
            <div css={styles.value}>bg-{name}</div>
          </div>
          <div css={styles.item}>
            <div css={styles.label}>Hex</div>
            <div css={styles.value}>{hex}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
