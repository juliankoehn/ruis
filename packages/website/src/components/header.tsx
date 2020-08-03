import { Link } from 'gatsby'
import { css } from '@emotion/core'
import React from 'react'
import tokens from '@ruids/tokens'

const styles = {
    header: css`
        display: flex;
        background-color: ${tokens.colorBlue400};
        color: ${tokens.colorNeutral0};
        padding: 0 ${tokens.spacing8};
        height: 56px;
        align-items: center;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        font-family: ${tokens.fontSans};
    `,
    logoLink: css`
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${tokens.colorNeutral0};
    `,
    logoText: css`
        font-weight: ${tokens.fontSemibold};
        font-size: ${tokens.textXl};
        margin-left: ${tokens.spacing3};
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
        margin: 0;
        display: flex;
    `,
    navListItem: css`
        margin: 0 0 0 ${tokens.spacing4};
        font-size: ${tokens.textBase};
    `,
    navListLink: css`
        color: #fff;
        text-decoration: none;
        font-weight: ${tokens.fontBold};
        &:hover {
            color: ${tokens.colorNeutral0};
        }
    `,
}

const Logo = () => (
    <svg
        x="0px"
        y="0px"
        width="32px"
        height="32px"
        viewBox="0 0 125 125"
        enableBackground="new 0 0 90 90"
    >
        <circle fill="#ffffff" cx="45" cy="10" r="10" />
        <circle fill="#ffffff" cx="10" cy="10" r="10" />
        <circle fill="#ffffff" cx="80" cy="10" r="10" />
        <circle fill="#ffffff" cx="10" cy="45" r="10" />
        <circle fill="#ffffff" cx="80" cy="45" r="10" />
        <circle fill="#ffffff" cx="10" cy="80" r="10" />
        <circle fill="#ffffff" cx="45" cy="80" r="10" />
        <circle fill="#ffffff" cx="80" cy="80" r="10" />
        <circle fill="#ffffff" cx="10" cy="115" r="10" />
        <circle fill="#ffffff" cx="80" cy="115" r="10" />
    </svg>
);

const Header: React.FC = () => (
  <header
    css={styles.header}
    className="flex-shrink-0"
  >
        <Link to="/" css={styles.logoLink}>
            <Logo />
            <div css={styles.logoText}>Design System</div>
        </Link>
        <div css={styles.searchNavContainer}>
            <nav>
                <ul css={styles.navList}>
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
                </ul>
            </nav>
        </div>
  </header>
)

export default Header
