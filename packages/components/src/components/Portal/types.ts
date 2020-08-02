export const defaultProps = {
    zIndex: 0
}

export type PortalProps = {
    /** Rendered callback function */
    onRendered?: () => void

    /** Primary content */
    children?: React.ReactNode
} & typeof defaultProps

export interface PortalState {
    container?: HTMLElement
    portalIsMounted: boolean
}

export type PortalEventDetail = {
    layer: number | null;
    zIndex: number;
}

export type PortalEvent = CustomEvent<PortalEventDetail>