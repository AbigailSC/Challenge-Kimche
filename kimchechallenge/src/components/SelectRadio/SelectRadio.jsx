import React from 'react'
import { useState } from "react";
import { Container, Flex, Heading, HStack, Label, RadioButton } from '../../styles/globalStyles'

export const SelectRadio = (props) => {
  const { handleSelection } = props
  const [select, setSelect] = useState("continent")
  const handleSelectRadio = (e) => {
    setSelect(e.target.value)
    handleSelection(e.target.value)
  }
  return (
    <Flex>
      <HStack justifyContent="space-between">
        <Heading fontsize="26px">Group by:</Heading>
        <Container>
          <RadioButton
            type="radio"
            id="continent"
            value="continent"
            name="continent"
            checked={select === "continent"}
            onChange={(e) => handleSelectRadio(e)}
          />
          <Label htmlFor="continent">
            Continent
          </Label>
          <RadioButton
            type="radio"
            id="language"
            value="language"
            name="lenguage"
            checked={select === "language"}
            onChange={(e) => handleSelectRadio(e)}
          />
          <Label htmlFor="language">
            Language
          </Label>
        </Container>
      </HStack>
    </Flex>
  )
}
