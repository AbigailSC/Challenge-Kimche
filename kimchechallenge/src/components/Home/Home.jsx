import React from 'react';
import { useState } from 'react';
import { CardCountry } from '../CardCountry/CardCountry';
import { Searchbar } from '../Searchbar/Searchbar';
import { SelectRadio } from '../SelectRadio/SelectRadio';

export const Home = () => {
  const [ findCountry, setFindCountry ] = useState(null)
  const handleSubmit = (e) => {
    setFindCountry(e)
  }
  console.log("sera? ", findCountry)
  return (
  <>
    <Searchbar handleSubmit={handleSubmit} />
    <SelectRadio />
    <CardCountry
      code = {findCountry?.code}
      name = {findCountry?.name}
      continent = {findCountry?.continent}
      capital = {findCountry?.capital}
      emojiU = {findCountry?.emojiU}
      languages = {findCountry?.languages}
      states = {findCountry?.states}
    />
  </>
  )
}
