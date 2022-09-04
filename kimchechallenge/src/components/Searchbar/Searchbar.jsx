import React from "react";
import { Heading, Flex, Text, Input, Icon, HStack } from "../styles/styles"
import iconSearch from "../../assets/iconSearch.svg"

export const Searchbar = () => {

  return (
  <Flex>
    <Heading>Country search 🗺️</Heading>
    <Text>Access all countries from one place</Text>
    <HStack>
      <Input type="text" placeholder="E.g. Argentina" />
      <Icon src={iconSearch}/>
    </HStack>
  </Flex>
  )
}
