import styled from "styled-components";



export default function Footer(){
    return (
       
              <StyledFooter>
                    <a href="./Impressum">Impressum</a>
                    <a href="./DSGVO">Datenschutz</a>
                    <p>© 2024 KlangundTipi</p>
              </StyledFooter>
       
        )
}

const StyledFooter = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
height: 100px;
width: 100%;
background-color: var(--color-primary-1);
`;