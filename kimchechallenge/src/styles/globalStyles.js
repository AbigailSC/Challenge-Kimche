import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { getColor } from "../utils/generateRandomColors"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #FAFBF7;
    color: #0A1F28;
    /* border: 3px solid red; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDir || "column"};
  margin: ${(props) => props.margin || "20px 15%"};
  padding: ${(props) => props.padding || "10px 25px"};
`;

export const Heading = styled.h1`
  font-size: ${(props) => props.fontsize || "44px"};
`;
export const Text = styled.p`
  font-size: ${(props) => props.fontsize || "22px"};
  color: ${(props) => props.color || null};
  font-weight: ${(props) => props.fontWeight || null};
  margin: ${(props) => props.m || "20px 0"};
`;
export const Input = styled.input`
  font-size: 22px;
  padding: 10px 15px;
  width: 100%;
  height: 36px;
  border: none;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  :focus {
    outline: none;
  }
  background-color: #EDF2F7;
`;
export const Icon = styled.img`
  padding: 10px;
  height: 36px;
  border: none;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #0A1F28;
  cursor: pointer;
`;

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  width: 100%;
`;

export const Container = styled.section`
  display: flex;
  width: 240px;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  background-color: #0A1F28;
  border-radius: 25px;
`

export const Label = styled.label`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  width: 100px;
  height: 40px;
  text-align: center;
  overflow: hidden;
  transition: linear 0.3s;
  color: #6e6e6edd;
  border-radius: 25px;
  font-weight: bolder;
  padding: 5px;
`

export const RadioButton = styled.input`
  appearance: none;
  display: none;
  &:checked + ${Label} {
    background-color: #A0AEC0;
    color: #f1f3f5;
    transition: 0.3s;
    border-radius: 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${getColor};
  margin: 30px 40px;
  padding: 30px 40px;
  width: 300px;
  height: 300px;
  border-radius: 5%;
  align-items: flex-start;
  justify-content: center;
  box-shadow: 0px 30px 45px 0px rgba(22,22,22,0.10);
`

export const Badge = styled.div`
  padding: 15px;
  border-radius: 15px;
  background-color: ${getColor};
  font-weight: ${(props) => props.fontWeight || null};
  filter: brightness(80%);
`

export const Hr = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid #fff;
`

export const Section = styled.section`
  overflow-x: auto;
  display: flex;
`