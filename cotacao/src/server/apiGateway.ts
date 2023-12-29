const BASE_URL = {
  countryFlags:
    "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL",
  cotacao: "",
};

const soap = require("soap");
type Endpoint = keyof typeof BASE_URL;

const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

async function getCountryFlag(countryCode: string): Promise<string> {
  try {
    const client = await soap.createClientAsync(BASE_URL.countryFlags);
    const result = await client.GetCountryInfo({
      sCountryISOCode: countryCode,
    });
    const flagURL = result.CountryInfoResult.sCountryFlag;
    return flagURL;
  } catch (error) {
    console.error(`Erro ao obter bandeira para ${countryCode}:`, error);
    return "";
  }
}

export const fetchFlags = async () => {
  const countryCodes = ["BRA", "USA", "RUS", "ITA", "ING", "ARG"];

  try {
    const countryFlags: string[] = await Promise.all(
      countryCodes.map(async (code: string) => await getCountryFlag(code))
    );

    return countryFlags;
  } catch (err) {
    console.error(err);
    return [];
  }
};
