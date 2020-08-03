import React, { useState } from 'react'
import { css } from '@emotion/core'
import tokens from '@ruids/tokens'
import { Icon } from '@ruids/components'
import { heightOfHeader, heightOfDocSearch } from './constants'
import { Link } from 'gatsby'

const styles = {
    sidemenu: css`
        flex-basis: 380px;
        padding-top: ${tokens.spacing4};
        border-right: 1px solid ${tokens.colorNeutral30};
    `,
    navList: css`
        display: flex;
        flex-direction: column;
        border-top: 1px solid ${tokens.colorNeutral30};
        padding: ${tokens.spacing4} 0;
        height: calc(100vh - ${heightOfHeader + heightOfDocSearch}px);
        overflow-y: auto;
        color: ${tokens.colorTextMid};
    `,
    list: css`
        flex: 1 1 0;
        list-style: none;
        padding: 0;
        margin: 0;
    `,
    link: css`
        font-family: ${tokens.fontSans};
        font-size: ${tokens.textSm};
        font-weight: ${tokens.fontSemibold};
        display: flex;
        justify-content: space-between;
        padding: ${tokens.spacing2} ${tokens.spacing4};
        color: ${tokens.colorTextMid};
        text-decoration: none;
        transition: background-color ${tokens.transitionDurationDefault}
        ${tokens.transitionEasingDefault};

        &:hover {
            background-color: ${tokens.colorNeutral30};
        }
    `,
    linkActive: css`
        background-color: ${tokens.colorBlue400};
        color: ${tokens.colorWhite};

        &:hover {
            background-color: ${tokens.colorBlue500};
        }
    `,
    linkGroup: css`
        cursor: pointer;
    `,
    category: css`
        margin-top: ${tokens.spacing6};

        &:first-of-type {
            margin-top: 0;
        }
    `,
    heading: css`
        font-family: ${tokens.fontSans};
        font-size: ${tokens.textXs};
        letter-spacing: ${tokens.trackingWidest};
        text-transform: uppercase;
        text-rendering: optimizeLegibility;
        margin: 0;
        padding: 0;
    `
}

interface MenuLink {
    name: string
    link: string
    menuLinks: MenuLink[]
}

interface Props {
    items: MenuLink[]
    currentPath: string
}

const checkActive = (item: MenuLink, currentPath: string) => {
    if (item.link === currentPath) {
        return true;
    }

    return (
        item.menuLinks &&
        item.menuLinks.some(item => checkActive(item, currentPath))
    );
};

const checkCategory = name =>
    name === 'Foundation' || name === 'Guidelines' || name === 'Components';


const MenuListItem: React.FC<{
    item: MenuLink,
    currentPath: string
    isActive: boolean
    hierarchyLevel: number
}> = ({
    item,
    isActive,
    currentPath,
    hierarchyLevel
}) => {
    const isCategory = checkCategory(item.name)
    const [isExpanded, setIsExpanded] = useState(isActive || isCategory);
    
    const itemOffset = { paddingLeft: `${1 + hierarchyLevel}rem` }
    const handleToggle = event => {
        event.preventDefault();
        setIsExpanded(!isExpanded);
    };

    return (
        <li css={[isCategory && styles.category]}>
            {item.menuLinks ? (
                <>
                    <div
                        css={[styles.link, styles.linkGroup, itemOffset]}
                        onClick={handleToggle}
                    >
                        {isCategory ? (
                            <h2 css={styles.heading}>{item.name}</h2>
                        ) : (
                                <span>{item.name}</span>
                            )}

                        <Icon
                            icon={isExpanded ? 'chevron_down' : 'x'}
                        />
                    </div>
                    {isExpanded && (
                        <MenuList
                            items={item.menuLinks}
                            currentPath={currentPath}
                            hierarchyLevel={hierarchyLevel + 1}
                        />
                    )}
                </>
            ) : (
                    <Link
                        css={[styles.link, isActive && styles.linkActive, itemOffset]}
                        to={item.link}
                    >
                        {item.name}
                    </Link>
            )}
            
        </li>
    )
}

const MenuList: React.FC<{
    items: MenuLink[]
    currentPath: string
    hierarchyLevel: number
}> = ({
    items,
    currentPath,
    hierarchyLevel
}) => (
        <ul css={styles.list}>
            {items.map((item, index) => (
                <MenuListItem
                    item={item}
                    key={index}
                    currentPath={currentPath}
                    isActive={checkActive(item, currentPath)}
                    hierarchyLevel={hierarchyLevel}
                />
            ))}
        </ul>
)

export const Navigation: React.FC<Props> = ({
    items, currentPath
}) => {
    return (
        <div css={styles.sidemenu}>
            <nav css={styles.navList} aria-label="Main Navigation">
                <MenuList
                    items={items}
                    currentPath={currentPath}
                    hierarchyLevel={0}
                />
            </nav>
        </div>
    )
}