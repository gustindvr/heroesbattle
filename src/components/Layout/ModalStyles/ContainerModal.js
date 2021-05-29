import styled from 'styled-components';

export const ContainerModal = styled.div ` 
  top:0;
  height: 100vh;
  width: 100%;
  position: fixed;
  text-align: center;
  margin: 0;
  padding: 50px;
  background-color: rgb(0,0,0,0.8);
  z-index: 10;

  @media (min-width: 300px) and (max-width: 575px){
    position: block;
    padding: 10px;
  }
`;