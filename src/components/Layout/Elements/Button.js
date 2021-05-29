import styled from 'styled-components';

export const Button = styled.button `
display: flex;
margin: 0 auto;
align-self: center;
font-size: 24px;
background-color: rgb(238, 48, 14, 0.7);
color: white;
padding: 10px;
border-radius: 10px;
border-style: none;
box-shadow: -1px 17px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: -1px 17px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 17px 5px 0px rgba(0,0,0,0.75);

&:hover{
  cursor: pointer;
  background-color: rgb(238, 48, 14);
}
`;