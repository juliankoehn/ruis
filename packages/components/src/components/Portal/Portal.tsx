import React from 'react'
import { PortalProps, PortalState, defaultProps, PortalEventDetail, PortalEvent } from './types'
import { canUseDOM } from '../utils'
import { PORTAL_UNMOUNT_EVENT, PORTAL_MOUNT_EVENT } from './constants'
import ReactDOM from 'react-dom'

const createContainer = (zIndex: number | string): HTMLElement => {
    const container = document.createElement('div')
    container.setAttribute('class', 'ruids-portal')
    container.setAttribute('style', `display: flex; z-index: ${zIndex};`)
    return container
}

const getBody = (): HTMLElement => {
    return document.body
}

const getPortalParent = () => {
    const parentElement = document.querySelector(
        'body > .ruids-portal-container',
    )
    if (!parentElement) {
        const parent = document.createElement('div')
        parent.setAttribute('class', 'ruids-portal-container')
        parent.setAttribute('style', 'display: flex;')
        getBody().appendChild(parent)
        return parent
    }
    return parentElement
}

const getEvent = (
    eventName: string,
    zIndex: number,
): CustomEvent<PortalEventDetail> => {
    const detail: PortalEventDetail = {
        layer: zIndex,
        zIndex,
    };

    // In ie11 the CustomEvent object exists, but it cannot be used as a constructor
    if (typeof CustomEvent === 'function') {
        return new CustomEvent(eventName, {
            detail,
        });
    }
    // CustomEvent constructor API not supported (ie11)
    // Using `new Event` or `new CustomEvent` does not work in ie11
    const event: CustomEvent = document.createEvent('CustomEvent');
    const params = {
        bubbles: true,
        cancellable: true,
        detail,
    };
    event.initCustomEvent(
        eventName,
        params.bubbles,
        params.cancellable,
        params.detail,
    );
    return event;
}

const firePortalEvent = (eventName: string, zIndex: number): void => {
    const event: PortalEvent = getEvent(eventName, zIndex);
    window.dispatchEvent(event);
};

// This is a generic component and does two things:
// 1. Portals it's children using React.createPortal
// 2. Creates the DOM node container for the portal based on props
// 3. Ensures DOM the container creates it's own stacking context
export class Portal extends React.Component<PortalProps, PortalState> {
    static defaultProps = defaultProps

    state = {
        container: canUseDOM ? createContainer(this.props.zIndex) : undefined,
        portalIsMounted: false
    }

    componentDidUpdate(prevProps: PortalProps, prevState: PortalState) {
        const { container } = this.state
        const { zIndex } = this.props
        if (container && prevProps.zIndex !== zIndex) {
            const newContainer = createContainer(zIndex)

            getPortalParent().replaceChild(container, newContainer)
            this.setState({
                container: newContainer
            })
        } else if (!prevState.container && container) {
            // SSR Path
            getPortalParent().appendChild(container)
        }
    }

    componentDidMount() {
        const { container } = this.state;
        const { zIndex } = this.props;
        if (container) {
            getPortalParent().appendChild(container);
        } else {
            // SSR path
            const newContainer = createContainer(zIndex);
            this.setState({ container: newContainer });
        }
        this.setState({
            portalIsMounted: true,
        })

        firePortalEvent(PORTAL_MOUNT_EVENT, Number(zIndex))
    }

    componentWillUnmount() {
        const { container } = this.state;
        const { zIndex } = this.props;
        if (container) {
            getPortalParent().removeChild(container);
            // clean up parent element if there are no more portals
            const portals = !!document.querySelector(
                'body > .atlaskit-portal-container > .atlaskit-portal',
            );
            if (!portals) {
                getBody().removeChild(getPortalParent());
            }
        }

        firePortalEvent(PORTAL_UNMOUNT_EVENT, Number(zIndex));
    }

    render() {
        const { container, portalIsMounted } = this.state
        return container && portalIsMounted
            ? ReactDOM.createPortal(this.props.children, container)
            : null
    }
}