import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Message } from './Message'
import { action } from '@storybook/addon-actions';

export default {
    title: 'Message',
    decorators: [withKnobs]
}

export const Appearance = () => (
    <div>
        <Message appearance="info" description="Informational" />
        <Message appearance="positive" description="Success" />
        <Message appearance="warning" description="Warning" />
        <Message appearance="negative" description="Error" />
    </div>
)

export const Description = () => (
    <div>
        <Message
            appearance="info"
            closable={boolean('closeable', true)}
            title="Informational"
            description={
                <p>
                    Additional description and informations about copywriting.
                </p>
            }
        />
        <Message
            appearance="positive"
            closable={boolean('closeable', true)}
            title="Informational"
            description={
                <p>
                    Additional description and informations about copywriting.
                </p>
            }
        />
        <Message
            appearance="warning"
            closable={boolean('closeable', true)}
            title="Informational"
            description={
                <p>
                    Additional description and informations about copywriting.
                </p>
            }
        />
        <Message
            appearance="negative"
            closable={boolean('closeable', true)}
            title="Informational"
            description={
                <p style={{margin: 0, padding: 0}}>
                    Additional description and informations about copywriting.
                </p>
            }
        />
    </div>
)

export const Icons = () => (
    <div>
        <Message showIcon appearance="info" description="Informational" />
        <Message showIcon appearance="positive" description="Success" />
        <Message showIcon appearance="warning" description="Warning" />
        <Message showIcon appearance="negative" description="Error" />
        <Message showIcon appearance="info" title="Informational" description="Informational" />
        <Message showIcon appearance="positive" title="Success" description="Success" />
        <Message showIcon appearance="warning" title="Warning" description="Warning" />
        <Message showIcon appearance="negative" title="Error" description="Error" />
    </div>
)

export const Closeable = () => (
    <div>
        <Message closable appearance="info" description="Informational" onClose={action('onClose')} />
        <Message closable appearance="info" description="Informational" onClose={action('onClose')} />
        <Message closable appearance="info" description="Informational" onClose={action('onClose')} />
        <Message closable appearance="info" description="Informational" onClose={action('onClose')} />
    </div>
)

export const Full = () => (
    <div
        style={{
            background: '#000',
            padding: 20,
            position: 'relative'
        }}
    >
        <Message full appearance="info" description="Informational" />
        {[...Array(50)].map((c, i) => (
            <div key={i}
                style={{
                    height: 10,
                    backgroundColor: '#f2f2f5',
                    marginTop: 8,
                    marginBottom: 8
                }}
            />
        ))}
    </div>
)