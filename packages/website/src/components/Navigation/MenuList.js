import React from 'react'
import PropTypes from 'prop-types';
import { styles } from './styles'
import { checkActive } from './utils'
import MenuListItem from './MenuListItem';

export const MenuList = ({ menuItems, currentPath, hierarchyLevel }) => {
    return (
        <ul css={styles.list}>
            {menuItems.map((item, index) => (
                <MenuListItem
                    key={index}
                    item={item}
                    currentPath={currentPath}
                    isActive={checkActive(item, currentPath)}
                    hierarchyLevel={hierarchyLevel}
                />
            ))}
        </ul>
    )
}

const MenuListProps = {
    currentPath: PropTypes.string.isRequired,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({ link: PropTypes.string, name: PropTypes.string }),
    ),
};

MenuList.propTypes = { ...MenuListProps, hierarchyLevel: PropTypes.number };

MenuList.defaultProps = {
    menuItems: [],
    hierarchyLevel: 0,
};

export default MenuList