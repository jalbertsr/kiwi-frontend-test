import axios from 'axios'
const baseUrl = 'https://api.skypicker.com'

export default {
  getFlights: function (_from, to, dateFrom, dateTo) {
    const url = `${baseUrl}/flights?v=2&locale=en&flyFrom=${_from}&to=${to}&dateFrom=${dateFrom}&dateTo=${dateTo}`
    return axios.get(url)
      .then(response => response.data)
      .catch(err => new Error(err))
  },
  getPlaces: function (query) {
    const url = `${baseUrl}/places?term=${query}&v=2&locale=en`
    return axios.get(url)
      .then(response => response.data)
      .catch(err => new Error(err))
  }
}
