import axios from 'axios'

// const BASE = 'https://marktool.now.sh/api'
const BASE = '/api'
const PRE_FIX = `${BASE}/markit`

export function GET(url) {
  return axios.get(url)
}

export function getMarkList(name) {
  const url = name ? `${PRE_FIX}/${name}` : PRE_FIX

  return axios.get(url)
}

export function updateBoard(name) {
  const url = `${PRE_FIX}/${name}`

  return axios.post(url)
}

export function deleteBoard(name) {
  const url = `${PRE_FIX}/${name}`

  return axios.delete(url)
}

export function connectDB(pwd) {
  const url = `${BASE}/db/connect/${pwd}`

  return axios.post(url)
}