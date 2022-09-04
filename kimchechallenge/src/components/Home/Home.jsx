import React from 'react'
import { Searchbar } from '../Searchbar/Searchbar'
import { SelectRadio } from '../SelectRadio/SelectRadio'
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { Text } from '../styles/styles';

const allCountries = gql`
  query {
    countries {
      name
      code
    }
  }
`

export const Home = () => {
  const { data, loading } = useQuery(allCountries)
  console.log(data)
  return (
   <>
   {loading 
    ? <Text>Loading</Text> 
    : (<>
      <Text>Info</Text>
      {data?.countries?.map((country) => country.name).join(', ')}
    </>)
   }
      <Searchbar />
      <SelectRadio />
   </>
  )
}
