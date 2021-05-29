import styled from 'styled-components';

export const Navbar = styled.div ` 
  width: 100%;
  margin: 50px 0;
  padding: 0;
  background-color: rgba(173, 237, 210 , 0.4) ;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  @media (min-width: 300px) and (max-width: 576px){
    margin: 20px 10px;
    text-align: center;
  }
`;