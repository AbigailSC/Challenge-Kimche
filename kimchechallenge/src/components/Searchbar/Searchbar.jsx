import React, { useState } from "react";
import { Heading, Flex, Text, Input, Icon, HStack } from "../../styles/globalStyles";
import iconSearch from "../../assets/iconSearch.svg";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

export const Searchbar = (props) => {
  const { handleSubmit } = props
  const [input, setInput] = useState({
    name: ""
  })
  const [country, setCountry] = useState("")
  const [errors, setErrors] = useState({})
  // Decidi no utilizar el filter de la query countries porque tendria que crear otra consulta para pasar el codigo al filtro y seria redundante dado que desde el filtrado en el componente ya puedo sacar los datos que necesito
  const GET_COUNTRIES = gql`
    query GET_COUNTRIES{
      countries {
        code
        name
        continent {
          name
        }
        capital
        languages {
          name
        }
        emoji
        emojiU
      }
    }
  `
  const { loading, data } = useQuery(GET_COUNTRIES)
  const regexValidateName = /^[a-zA-Z\s]+$/
  const validateName = (input) => {
    const errors = {}
    if (input.name.length < 3) {
      errors.name = "debe ser mayor de 2 caracteres"
    } else if (!regexValidateName.test(input.name)) {
      errors.name = "invalido, caracteres rancios"
    }
    return errors
  }
  // Creo una funcion validadora para tener más control sobre el input
  const filterQueryCountry = (input) => {
    if (!loading) {
      const findCountry = data?.countries.filter((country) => country.name.toLowerCase().includes(input.name.toLowerCase()))
      return findCountry
    }
  }
  const handleInput = (e) => {
    e.preventDefault();
    setInput({
      [e.target.name]: e.target.value
    });
    setErrors(
      validateName({
        [e.target.name]: e.target.value
      })
    )
    
  }
  const handleSearch = (e) => {
    e.preventDefault()
    if (!Object.keys(errors).length) {
      setCountry(filterQueryCountry(input));
      handleSubmit(country)
    }
  }
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
      <Icon src={iconSearch} onClick={(e) => handleSearch(e) }/>
    </HStack>
    {errors.name && (
      <Text>{errors.name}</Text>
    )}
  </Flex>
  )
}
