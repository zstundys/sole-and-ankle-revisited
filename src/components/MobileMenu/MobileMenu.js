/* eslint-disable no-unused-vars */
import { DialogContent, DialogOverlay } from "@reach/dialog";
import styled from "styled-components/macro";
import { CrumbLink } from "../Breadcrumbs/Breadcrumbs";
import { NavLink } from "../Header/Header";

import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay>
      <DialogContent>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
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
        <FooterNav>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </FooterNav>
      </DialogContent>
    </DialogOverlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  margin-inline-start: auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FooterNav = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterLink = styled(CrumbLink)``;

export default MobileMenu;
