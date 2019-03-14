import axios from 'axios'

const BASE = 'http://localhost:3000/markit'

export function GET(url) {
  return axios.get(url)
}

export function getMarkList(name) {
  const url = name ? `${BASE}/${name}` : BASE

  return axios.get(url)
}

export function updateBoard(name) {
  const url = `${BASE}/${name}`

  return axios.post(url)
}