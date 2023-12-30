import axios from 'axios';

export async function fetchExchangeRate(message: string): Promise<string> {
  try {
    const apiResponse = await axios.get(`https://economia.awesomeapi.com.br/json/last/${message}`);

    if (apiResponse.data && apiResponse.data[`${message}`] && apiResponse.data[`${message}`].bid) {
      const exchangeRate = parseFloat(apiResponse.data[`${message}`].bid);
      const result = 1 / exchangeRate;

      return result.toFixed(2);
    } else {
      throw new Error('Comunicação falhou com a API');
    }
  } catch (err) {
    console.error(err);
    return 'Erro';
  }
}