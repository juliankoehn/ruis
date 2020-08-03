import { css } from '@emotion/core'
import tokens from '@ruids/tokens'

export const styles = {
  header: css`
    min-width: 100%;
    margin: 0 auto;
    padding-bottom: ${tokens.spacing8};
    margin-bottom: ${tokens.spacing8};
    border-bottom: 1px solid ${tokens.colorNeutral30};
  `,
}
