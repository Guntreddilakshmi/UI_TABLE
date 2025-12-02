import axios from "axios";

const BASE_URL = "https://685013d7e7c42cfd17974a33.mockapi.io";

export const getTaxes = () => axios.get(`${BASE_URL}/taxes`);
export const getCountries = () => axios.get(`${BASE_URL}/countries`);
export const updateTax = (id, payload) => axios.put(`${BASE_URL}/taxes/${id}`, payload);
