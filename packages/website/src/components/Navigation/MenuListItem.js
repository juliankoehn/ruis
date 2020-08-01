import React from 'react'
import PropTypes from 'prop-types'
import { checkCategory } from './utils'
import { styles } from './styles'
import { SectionHeading } from '../Typography/SectionHeading/SectionHeading'
import MenuList from './MenuList'
import { Link } from 'gatsby';

export const MenuListItem = ({ item, currentPath, isActive, hierarchyLevel }) => {
    const isCategory = checkCategory(item.name)
    const [isExpanded, setIsExpanded] = React.useState(isActive || isCategory)

    const handleToggle = event => {
        event.preventDefault()
        setIsExpanded(!isExpanded)
    }

    const itemOffset = { paddingLeft: `${1 + hierarchyLevel}rem` }

    return (
        <li css={[isCategory && styles.category]}>
            {item.menuLinks ? (
            <React.Fragment>
                <div
                    css={[styles.link, styles.linkGroup, itemOffset]}
                    onClick={handleToggle}
                    role="button"
                    tabIndex={0}
                >
                    {isCategory ? (
                        <SectionHeading>
                            {item.name}
                        </SectionHeading>
                    ): (
                        <span>{item.name}</span>
                    )}
                </div>
                {isExpanded && (
                    <MenuList
                        menuItems={item.menuLinks}
                        currentPath={currentPath}
                        hierarchyLevel={hierarchyLevel + 1}
                    />
                )}
            </React.Fragment>
            ) : (
                    <Link
                        css={[styles.link, isActive && styles.linkActive, itemOffset]}
                        to={item.link}
                        href={item.link}
                    >
                        {item.name}
                    </Link>
            )}
        </li>
    )
}

MenuListItem.propTypes = {
    item: PropTypes.shape({ link: PropTypes.string, name: PropTypes.string })
        .isRequired,
    currentPath: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    hierarchyLevel: PropTypes.number,
};

MenuListItem.defaultProps = {
    isActive: false,
    hierarchyLevel: 0,
};

export default MenuListItem