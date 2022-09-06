import React, { useState, useContext } from "react";
import { Heading, Flex, Text, Input, Icon, HStack } from "../../styles/globalStyles";
import iconSearch from "../../assets/iconSearch.svg";
import CountryContext from "../../context/Country/CountryContext";

export const Searchbar = () => {
  const { getCountry }  = useContext(CountryContext);
  const [input, setInput] = useState("");
  // Creo una funcion validadora para tener más control sobre el input
  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  // Decidi no utilizar Context para pasar la información del objeto de countries mediante props al componente padre porque solo lo hago en dos ocasiones y no me parecio necesario
  // Cambie de opinion, tuve un problema con el searchbar por como estaba pasando las props
  return (
  <Flex>
    <Heading>Country search 🗺️</Heading>
    <Text color="#718096">Access all countries from one place</Text>
    <HStack>
      <Input
        type="text"
        placeholder="Search for a country..."
        name="name"
        value={input.input}
        onChange={(e) => handleInput(e)}
      />
      <Icon src={iconSearch} onClick={() => getCountry(input) }/>
    </HStack>
  </Flex>
  )
}
