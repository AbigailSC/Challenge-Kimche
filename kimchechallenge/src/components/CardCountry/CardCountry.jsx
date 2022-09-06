import React from "react";
import { Box, Flex, HStack, Text, Hr } from "../../styles/globalStyles";

export const CardCountry = ( { name, continent, capital, languages, emoji } ) => {
  return (
    <Flex margin="20px 0" padding="0">
      <Box>
        <HStack justifyContent="space-between">
          <Text color="#718096" fontWeight="bolder" fontsize="28px">{emoji} {name}</Text>
        </HStack>
        <Hr/>
        <Text color="#718096" fontWeight="400">City: {capital}</Text>
        <Text color="#718096" fontWeight="400">Languages: {languages[0].name}</Text>
        <Text color="#718096" fontWeight="400">Continent: {continent.name}</Text>
      </Box>
    </Flex>
  )
}
