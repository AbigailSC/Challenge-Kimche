import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15%;
  padding: 10px 25px;
`;

export const Heading = styled.h1`
  // font-size: 44px;
  font-size: ${(props) => props.fontsize || "44px"};
  // background-color: red;
`;
export const Text = styled.p`
  font-size: 22px;
  color: #718096;
  // background-color: red;
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
  background-color: red;
  color: white;
`;
export const Icon = styled.img`
  padding: 10px;
  height: 36px;
  border: none;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: green;
`;

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;

export const Container = styled.section`
  display: flex;
  width: 240px;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  background-color: blue;
  border-radius: 15px;
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
  border-radius: 15px;
  overflow: hidden;
  transition: linear 0.3s;
  color: #6e6e6edd;
`

export const RadioButton = styled.input`
  appearance: none;
  display: none;
  &:checked + ${Label} {
  background-color: #1e90ff;
  color: #f1f3f5;
  transition: 0.3s;
  border-radius: 10px;
}
`;
