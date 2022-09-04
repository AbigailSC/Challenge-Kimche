import React from "react";
import { Flex, Text } from "../../styles/globalStyles";

export const CardCountry = ( { name, code, continent, capital, languages, emojiU, states } ) => {
  return (
    <Flex>
      {(<>
      <Text>Info</Text>
      {!name && !code && !continent
      ? <Text>Ingrese un pais para ver los detalles</Text>
      : (
        <div>
          <Text>{name}, {code}</Text>
        </div>
      )}
    </>)}
    </Flex>
  )
}
