import React, { useState, useContext } from "react";
import { Flex, Section, Text } from "../../styles/globalStyles";
import { CardCountry } from "../CardCountry/CardCountry";
import { Searchbar } from "../Searchbar/Searchbar";
import { SelectRadio } from "../SelectRadio/SelectRadio";
import CountryContext from "../../context/Country/CountryContext";
import _ from "lodash";

export const Home = () => {
  const countriesState = useContext(CountryContext);
  const [ selection, setSelection ] = useState("continent");
  let countryIndex = [];
  // Declare el estado inicial en continent para que por defecto los agrupe por continente
  const handleSelection = (e) => {
    setSelection(e)
  };
  const groupDataBy = _.groupBy(countriesState.country, selection === "continent" ? "continent.name" : "languages[0].name");
  for (const property in groupDataBy) {
    countryIndex.push(property)
  };
  return (
  <>
    <Searchbar/>
    <SelectRadio handleSelection={handleSelection}/>
    {
      countriesState.country?.length
      ? countryIndex?.map((ele, index) => 
      <Flex key={index}>
        <Text fontWeight="bolder" fontsize="28px">{ele}</Text>
        <Section>
          {groupDataBy[ele].map((element) => 
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
          )}
        </Section>
      </Flex>
      )
      : null
    }
  </>
  )
}