import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import MenuList from './MenuList';

export const heightOfHeader = 56;

const MenuListProps = {
    currentPath: PropTypes.string.isRequired,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({ link: PropTypes.string, name: PropTypes.string }),
    ),
};

const Navigation = ({ menuItems, currentPath }) => {
    return (
        <div css={styles.sidemenu}>
            <nav css={styles.navList} aria-label="Main Navigation">
                <MenuList
                    menuItems={menuItems}
                    currentPath={currentPath}
                    hierarchyLevel={0}
                />
            </nav>
        </div>
    )
}

Navigation.propTypes = MenuListProps;

Navigation.defaultProps = {
    menuItems: [],
};

export default Navigation