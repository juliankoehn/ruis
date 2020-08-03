import React from 'react'
import { Table, Tag } from '@ruids/components'
import { Swatch } from './ColorSwatch/Swatch'
import tokens from '@ruids/tokens'

type Props = {
  name: string
  colors: string[]
}

const getInitialLetter = (name: string) => {
  const letter = name.charAt(0)

  return letter.toUpperCase()
}

const toClassName = (name: string, color: string) => {
  return `-${name.toLowerCase()}-${color}`
}

export const ColorTable: React.FC<Props> = ({ name, colors }) => {
  return (
    <Table>
      <Table.Body>
        {colors.map((c, i) => (
          <Table.Row key={`${name}-${c}-${i}`}>
            <Table.Cell>
              <Swatch hex={tokens[`color${name}${c}`]} />
            </Table.Cell>
            <Table.Cell>
              {getInitialLetter(name)}
              {c}
            </Table.Cell>
            <Table.Cell>
              <Tag>{tokens[`color${name}${c}`]}</Tag>
            </Table.Cell>

            <Table.Cell>
              <Tag>text{toClassName(name, c)}</Tag>
            </Table.Cell>
            <Table.Cell>
              <Tag>bg{toClassName(name, c)}</Tag>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
