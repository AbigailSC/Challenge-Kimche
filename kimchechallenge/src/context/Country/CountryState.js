import React, { useReducer } from "react";
import CountryContext from "./CountryContext";
import CountryReducer from "./CountryReducer";
import { GET_COUNTRY } from "../countries";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
// Decidi no utilizar el filter de la query countries porque tendria que crear otra consulta para pasar el codigo al filtro y seria redundante dado que desde el filtrado en el componente ya puedo sacar los datos que necesito
const CountryState = (props) => {
  const initialState = {
    country: null
  };

  const [state, dispatch] = useReducer(CountryReducer, initialState);
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

  const filterQueryCountry = (input) => {
    if (!loading) {
      const findCountry = data?.countries.filter((country) => country.name.toLowerCase().includes(input.toLowerCase()))
      return findCountry
    }
  };

  const getCountry = (country) => {
    try {
      if (country === "") {
        alert("The name of country is required")
      } else if (country.length < 3) {
        alert("The name is too short")
      } else {
        const data = filterQueryCountry(country)
        if (data.length === 0) {
          alert("No country have been found")
        } else {
          dispatch({
            type: GET_COUNTRY,
            payload: data
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CountryContext.Provider
      value={{
        country: state.country,
        getCountry
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
}

export default CountryState;