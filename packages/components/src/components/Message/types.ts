export const defaultProps = {
    appearance: 'info',
    closeLabel: 'Close'
}

export type MessageProps = {
    appearance?: 'positive' | 'negative' | 'warning' | 'info'
    /** Whether it is possible to close the message box */
    closable?: boolean
    /** Closes the prompt text on the button */
    closeLabel?: string
    /** showIcon displays the icon */
    showIcon?: boolean
    /** The title of the message  */
    title?: React.ReactNode
    /** The description information for the message */
    description?: React.ReactNode
    /** sticks on top of next relative container with full-width */
    full?: boolean
    testId?: string
    onClose?: () => void
} & typeof defaultProps

export type MessageState = {
    display: 'show' | 'hide' | 'hiding'
}