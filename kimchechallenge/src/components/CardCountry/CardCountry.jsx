import React from "react";
import { Box, Flex, HStack, Text, Hr } from "../../styles/globalStyles";

export const CardCountry = ( { name, code, continent, capital, languages, emoji, emojiU } ) => {
  return (
    <Flex>
      {!name && !code && !continent
      ? <Text color="#718096">Ingrese un pais para ver los detalles</Text>
      : (<Box>
          <HStack justifyContent="space-between">
            <Text color="#fff" fontWeight="bolder" fontsize="28px">{emoji} {name}</Text>
            {/* <Badge fontWeight="bolder">
              {code}
            </Badge> */}
          </HStack>
          <Hr/>
          <Text color="#fff" fontWeight="500">City: {capital}</Text>
          <Text color="#fff" fontWeight="500">Languages: {languages[0].name}</Text>
          <Text color="#fff" fontWeight="500">Continent: {continent.name}</Text>
        </Box>)
        }
    </Flex>
  )
}
