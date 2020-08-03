import React from 'react'
import renderer from 'react-test-renderer'
import { Heading } from './Heading'
import { render } from '@testing-library/react'
import { axe } from '../../utils'

test('renders the component', () => {
    const output = renderer
        .create(<Heading>Heading</Heading>)
        .toJSON()

    expect(output).toMatchSnapshot();
})

it('renders the component with an additional class name', () => {
    const output = renderer
        .create(<Heading className="my-extra-class">Heading</Heading>)
        .toJSON()

    expect(output).toMatchSnapshot();
});

it('renders the component h3', () => {
    const output = renderer
        .create(<Heading is="h3">Heading</Heading>)
        .toJSON()

    expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
    const { container } = render(<Heading>Heading</Heading>)

    expect(await axe(container)).toHaveNoViolations()
});