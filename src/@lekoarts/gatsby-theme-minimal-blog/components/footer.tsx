/** @jsx jsx */
import { jsx, Link } from 'theme-ui';
import React from 'react';

const Footer = () => {
  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by Paul B. Kim. All rights reserved.
      </div>
      <div>
        <Link
          aria-label='Link to the GitHub repository'
          href='https://github.com/paulbkim01/paulbkim-blog'
        >
          Repo
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
