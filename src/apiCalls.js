import { regionCodeToCountry } from './functions';
import { nameFormatting } from './functions';

const logAgifyData = async (name, country) => {
  const countryStr = await logCountriesData(country);
  const agifyResponse = await fetch(
    `https://api.agify.io?name=${name}&country_id=${countryStr}`
  );
  const agifyJson = await agifyResponse.json();
  return (await agifyJson.age) === null
    ? 'Not Enough Data'
    : agifyJson.age;
};

const logGenderizaData = async (name, country) => {
  const countryStr = await logCountriesData(country);
  const genderizeResponse = await fetch(
    `https://api.genderize.io?name=${name}&country_id=${countryStr}`
  );
  const genderizeJson = await genderizeResponse.json();
  return (await genderizeJson.gender) === null
    ? 'Not Enough Data'
    : nameFormatting(genderizeJson.gender) +
        ' ' +
        genderizeJson.probability * 100 +
        '%';
};

const logNationalizeData = async (name) => {
  const nationalizeResponse = await fetch(
    `https://api.nationalize.io?name=${name}`
  );
  const nationalizeJson = await nationalizeResponse.json();
  return regionCodeToCountry(
    await nationalizeJson.country[0].country_id
  );
};

const logCountriesData = async (country) => {
  const countriesResponse = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  const countriesJson = await countriesResponse.json();
  return await countriesJson[0].cca2;
};

export const apiCalls = {
  logCountriesData,
  logNationalizeData,
  logAgifyData,
  logGenderizaData,
};
