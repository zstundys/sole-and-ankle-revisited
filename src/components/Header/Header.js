import React from "react";
import styled from "styled-components/macro";

import { BREAKPOINTS } from "../../constants";
import Icon from "../Icon";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import SuperHeader from "../SuperHeader";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale" active>
            Sale
          </NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <NavLink as="button" type="button">
            <Icon id="shopping-bag" />
          </NavLink>
          <NavLink as="button" type="button">
            <Icon id="search" />
          </NavLink>
          <NavLink
            as="button"
            type="button"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Icon id="menu" />
          </NavLink>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-y: hidden;
  overflow-x: auto;

  @media ${BREAKPOINTS.tablet} {
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    border-top: 4px solid var(--color-gray-900);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(0.5rem, 5vw - 1rem, 3rem);
  margin: 0px 48px;
  white-space: nowrap;

  @media ${BREAKPOINTS.tablet} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  gap: 48px;
  display: none;

  @media ${BREAKPOINTS.tablet} {
    display: flex;
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${BREAKPOINTS.tablet} {
    &:not(:first-of-type) {
      flex: 0;
    }
  }
`;

export const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--text-medium);
  appearance: none;
  border: none;
  background: none;
  color: ${(props) =>
    props.active ? "var(--color-secondary)" : "var(--color-gray-900)"};
`;

export default Header;
