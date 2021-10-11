import axios from 'axios';

const baseUrl = process.env.url || 'http://localhost:4000'

export const fetchStores = async () => {
  try {
    const resp = await axios.get(`${baseUrl}/stores`);
    const { data } = resp.data;
    return data
  } catch (error) {
    throw error
  }
}

export const nearByStores = async (payload) => {
  try {
    const resp = await axios.post(`${baseUrl}/closest/stores`, payload)
    const { data } = resp.data;
    return data;
  } catch (error) {
    throw error
  }
}