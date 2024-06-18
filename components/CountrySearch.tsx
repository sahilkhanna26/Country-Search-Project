import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useMemo } from "react";
import Card from "./Card";
import { useStore } from "../store";
import { useEffect, useState } from "react";

const CountrySearch = () => {
  const [region, setRegion] = useState("");
  const [data, setData] = useState([
    { name: { common: "" }, flags: { png: "" }, capital: [], population: 0, region: "" },
  ]);
  const [filteredCountries, setFilteredCountries] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const isDarkMode = useStore((state) => state.isDarkMode);

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value);
  };

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchValue(e.target.value);
  };

  const filterCountries = () => {
    let countries = data;
    if (region) {
      countries = countries.filter((country) => country.region === region);
    }
    if (searchValue) {
      countries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    setFilteredCountries(countries);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredCountries(data);
      });
  }, []);

  useEffect(() => {
    filterCountries();
  }, [data, region, searchValue]);

  return (
    <Box sx={{ padding: "2rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
        <TextField
          id="outlined-basic"
          label="Search for a country..."
          variant="outlined"
          sx={{ width: "40vw", backgroundColor: isDarkMode ? "#2b3743" : "white" }}
          onChange={handleTyping}
        />

        <FormControl sx={{ width: "20vw", backgroundColor: isDarkMode ? "#2b3743" : "white" }}>
          <InputLabel id="demo-simple-select-label">Filter by region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="region"
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Americas">Americas</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {filteredCountries.map((country) => {
          return (
            <Card
              name={country.name.common}
              flag={country.flags.png}
              population={country.population}
              capital={country.capital[0]}
              region={country.region}
              key={country.name.common}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default CountrySearch;
