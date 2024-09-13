import Image from "next/image";
import styled from "styled-components";

export default function Navbar() {
  return (
    <StyledNavbar>
      <Image src="/svg/KTLogo.svg" alt="Logo" width={50} height={50} priority />
      <StyledList>
        <li><StyledListItem href="#welcome">Home</StyledListItem></li>
        <li><StyledListItem href="#aboutUs">Über uns</StyledListItem></li>
        <li><StyledListItem href="#price">Angebot</StyledListItem></li>
        <li><StyledListItem href="#contact">Kontakt</StyledListItem></li>
      </StyledList>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  align-items: center;
  padding: 0 20px;
  backdrop-filter: blur(20px);
  color: var(--color-primary-2);
  z-index: 111;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.a`
text-decoration: none;
font-weight: 700;
color: var(--color-primary-2);
`;
