import axios from 'axios'

const api = axios.create({ baseURL: 'https://parallelum.com.br/fipe/api/v1' })

export { api }
