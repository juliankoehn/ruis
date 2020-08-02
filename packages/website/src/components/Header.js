import React from 'react'
import { Link } from 'gatsby';
import tokens from '@ruids/tokens';
import { css } from '@emotion/core';

const styles = {
    header: css`
        display: flex;
        background-color: ${tokens.colorBlueDark};
        color: #fff;
        padding: 0 ${tokens.spacingXl};
        height: 70px;
        align-items: center;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    `,
    logoLink: css`
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #fff;
    `,
    searchNavContainer: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
  `,
    navList: css`
    list-style: none;
    padding: 0;
    display: flex;
  `,
    navListItem: css`
    margin-left: ${tokens.spacingM};
    font-size: ${tokens.fontSizeL};
  `,
    navListLink: css`
    color: #fff;
    text-decoration: none;

    &:hover {
      color: ${tokens.colorElementLight};
    }
  `,

}

const Logo = () => (
    <svg
        x="0px"
        y="0px"
        width="32px"
        height="32px"
        viewBox="0 0 90 90"
        enableBackground="new 0 0 90 90"
    >
        <circle fill="#ffffff" cx="45" cy="10" r="10" />
        <circle fill="#ffffff" cx="10" cy="10" r="10" />
        <circle fill="#ffffff" cx="80" cy="10" r="10" />
        <circle fill="#ffffff" cx="10" cy="45" r="10" />
        <circle fill="#ffffff" cx="45" cy="45" r="10" />
        <circle fill="#ffffff" cx="10" cy="80" r="10" />
    </svg>
);

const Header = () => (
    <header css={styles.header}>
        <Link to="/" css={styles.logoLink}>
            <Logo />
            <div css={styles.logoText}>Ruis</div>
        </Link>
        <div css={styles.searchNavContainer}>
            <nav css={styles.nav}>
                <li css={styles.navListItem}>
                    <a
                        css={styles.navListLink}
                        href="https://github.com/juliankoehn/ruis"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </li>
            </nav>
        </div>
        header
    </header>
)

export default Header