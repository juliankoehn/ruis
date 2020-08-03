import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { Table } from './Table'

export default {
    title: 'Table',
    decorators: [withKnobs]
}

const fakeData = [
    {
        name: 'Dummy User',
        email: 'user-1@test.test',
        role: 'CEO',
        activity: 'August 29, 2018'
    },
    {
        name: 'Unknown User',
        email: 'user-2@test.test',
        role: 'CEO',
        activity: 'July 27, 2019'
    },
    {
        name: 'Tilted User',
        email: 'user-3@test.test',
        role: 'CEO',
        activity: 'June 13, 2019'
    }
]

export const Default = () => (
    <div
        style={{
            padding: 20
        }}
    >
        <Table>
            <Table.Head>
                <Table.Row>
                    <Table.Cell>
                        Name
                </Table.Cell>
                    <Table.Cell>
                        Email
                </Table.Cell>
                    <Table.Cell>
                        Organization role
                </Table.Cell>
                    <Table.Cell>
                        Last activity
                </Table.Cell>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                {fakeData.map((item, index) => (
                    <Table.Row
                        key={index}
                    >
                        <Table.Cell>
                            {item.name}
                        </Table.Cell>
                        <Table.Cell>
                            {item.email}
                        </Table.Cell>
                        <Table.Cell>
                            {item.role}
                        </Table.Cell>
                        <Table.Cell>
                            {item.activity}
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    </div>)