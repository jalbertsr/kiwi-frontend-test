import axios from 'axios'
const baseUrl = 'https://api.skypicker.com'

export default {
  getFlights: function (_from, to, dateFrom, dateTo) {
    const url = `${baseUrl}/flights?v=2&locale=en&flyFrom=${_from}&to=${to}&dateFrom=${dateFrom}&dateTo=${dateTo}`
    console.log(url)
    return axios.get(url)
      .then(response => response.data)
  },
  getPlaces: function (query) {
    const url = `${baseUrl}/places?term=${query}&v=2&locale=en`
    console.log(url)
    return axios.get(url)
      .then(response => response.data)
  }
}
