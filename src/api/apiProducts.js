import axios from 'axios'

export async function fetchData(url) {
  try {
    const response = await axios.get(url)

    if (response.data) {
      return response.data
    }
  } catch (error) {
    console.error(error)

    throw error
  }
}
