import Image from "next/image";
import styled from "styled-components";

export default function Navbar() {
  return (
    <StyledNavbar>
      <Image src="/svg/KTLogo.svg" alt="Logo" width={50} height={50} priority />
      <StyledList>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
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
  gap: 2rem;
  list-style: none;
`;
