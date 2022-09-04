import React, { useState } from "react";
import { Heading, Flex, Text, Input, Icon, HStack } from "../styles/styles";
import iconSearch from "../../assets/iconSearch.svg";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

export const Searchbar = (props) => {
  const { handleSubmit } = props
  const [name, setName] = useState("")
  const [country, setCountry] = useState(null)
  const GET_COUNTRIES = gql`
    query GET_COUNTRIES{
      countries {
        name
        code
      }
    }
  `
  const { loading, data } = useQuery(GET_COUNTRIES)
  const filterQueryCountry = (name) => {
    if (!loading) {
      const findCountry = data.countries.find((country) => country.name.toLowerCase() === name.toLowerCase())
      return findCountry
    }
  }
  // const [country, setCountry] = useState(null)
  // const countryFound = gql`
  //   query findCountry($nameToSearch: String!){
  //     country (cade: $nameToSearch) {
  //       name
  //       code
  //       capital
  //     }
  //   }
  // `
  // const [getCountry, result] = useLazyQuery(countryFound)
  // useEffect(() => {
  //   if (result.data) {
  //     setCountry(result.data.findCountry)
  //   }
  // },[result])
  
  

  const handleInput = (e) => {
    e.preventDefault()
    setName(e.target.value);
    setCountry(filterQueryCountry(e.target.value))
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
