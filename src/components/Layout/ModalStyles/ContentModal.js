import styled from 'styled-components';

export const ContentModal = styled.div `
  display: flex;
  width: 40vw ;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: orange;
  margin: 40px auto;
  padding: 60px;
  border-radius: 20px;
  box-shadow: -1px 9px 90px 0px rgba(209,123,23,0.69);
  -webkit-box-shadow: -1px 9px 90px 0px rgba(209,123,23,0.69);
  -moz-box-shadow: -1px 9px 90px 0px rgba(209,123,23,0.69);

  @media (min-width: 300px) and (max-width: 575px){
    margin: 5px 5px;
    padding: 10px;
    width: 90vw;
  }

`;