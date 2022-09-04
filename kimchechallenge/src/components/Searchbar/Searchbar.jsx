import React, { useState } from "react";
import { Heading, Flex, Text, Input, Icon, HStack } from "../styles/styles";
import iconSearch from "../../assets/iconSearch.svg";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

export const Searchbar = (props) => {
  const { handleSubmit } = props
  const [name, setName] = useState("")
  const [country, setCountry] = useState(null)
  // Decidi no utilizar el filter de la query countries porque tendria que crear otra consulta para pasar el codigo al filtro y seria redundante dado que desde el filtrado en el componente ya puedo sacar los datos que necesito
  const GET_COUNTRIES = gql`
    query GET_COUNTRIES{
      countries {
        code
        name
        continent {
          code
          name
        }
        capital
        languages {
          code
          name
        }
        emojiU
        states {
          code
          name
        }
        
      }
    }
  `
  const { loading, data } = useQuery(GET_COUNTRIES)
  const filterQueryCountry = (name) => {
    if (!loading) {
      const findCountry = data.countries.find((country) => country.name.toLowerCase().includes(name.toLowerCase()))
      return findCountry
    }
  }
  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
    setCountry(filterQueryCountry(e.target.value));
  }
  return (
  <Flex>
    <Heading>Country search 🗺️</Heading>
    <Text>Access all countries from one place</Text>
    <HStack>
      <Input
        type="text"
        placeholder="E.g. Argentina"
        value={name}
        onChange={(e) => handleInput(e)}
      />
      <Icon src={iconSearch} onClick={() => handleSubmit(country) }/>
    </HStack>
    
  </Flex>
  )
}
