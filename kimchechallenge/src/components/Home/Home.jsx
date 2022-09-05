import React, { useState } from "react";
import { Text } from "../../styles/globalStyles";
import { CardCountry } from "../CardCountry/CardCountry";
import { Searchbar } from "../Searchbar/Searchbar";
import { SelectRadio } from "../SelectRadio/SelectRadio";
import _ from "lodash";

export const Home = () => {
  const [ findCountry, setFindCountry ] = useState(null)
  const [ selection, setSelection ] = useState("continent")
  // Declare el estado inicial en continent para que por defecto los agrupe por continente
  const handleSubmit = (e) => {
    setFindCountry(e)
  }
  const handleSelection = (e) => {
    setSelection(e)
  }
  const groupDataBy = _.groupBy(findCountry, selection === "continent" ? "continent.name" : "languages[0].name")
  console.log(groupDataBy)
  return (
  <>
    <Searchbar handleSubmit={handleSubmit} />
    <SelectRadio handleSelection={handleSelection}/>
    {
      findCountry?.length
      ? findCountry.map((element) => 
        <CardCountry
          key = {element?.code}
          code = {element?.code}
          name = {element?.name}
          continent = {element?.continent}
          capital = {element?.capital}
          emoji = {element?.emoji}
          emojiU = {element?.emojiU}
          languages = {element?.languages}
        />
        )
      : null
    }
  </>
  )
}
