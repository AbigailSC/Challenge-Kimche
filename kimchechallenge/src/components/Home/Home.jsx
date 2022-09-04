import React from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { SelectRadio } from '../SelectRadio/SelectRadio';

export const Home = () => {
  const handleSubmit = (e) => {
    console.log(e)
  }
  return (
  <>
    <Searchbar handleSubmit={handleSubmit} />
    <SelectRadio />
  </>
  )
}
