export const checkActive = (item, currentPath) => {
    if (item.link === currentPath) {
        return true;
    }

    return (
        item.menuLinks &&
        item.menuLinks.some(item => checkActive(item, currentPath))
    );
};

export const checkCategory = name =>
    name === 'Foundation' || name === 'Guidelines' || name === 'Components';