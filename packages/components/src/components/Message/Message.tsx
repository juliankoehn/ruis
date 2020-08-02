import React from 'react'
import { MessageProps, MessageState } from './types'
import { Icon } from '../Icon'

export class Message extends React.Component<MessageProps, MessageState> {
    constructor(props: MessageProps) {
        super(props)
        this.state = {
            display: 'show'
        }
    }

    handleClose = () => {}

    renderCloseButton() {
        return (
            <button type="button" onClick={this.handleClose}>
                <Icon icon="x" />
            </button>
        )
    }

    render() {
        return (
            <div>
                Message
            </div>
        )
    }
}