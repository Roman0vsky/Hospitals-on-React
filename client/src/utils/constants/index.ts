export const APP_ROUTES = {
  REGISTER: "/register",
  LOGIN: "/login",
  CATALOG: "/catalog",
};

export const API_BASE_ENDPOINT = "http://localhost:3001";

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_ENDPOINT}/signin`,
  REGISTER: `${API_BASE_ENDPOINT}/signup`,
  USERS: `${API_BASE_ENDPOINT}/users`,
  CATALOG: `${API_BASE_ENDPOINT}/hospitalsCatalog`,
  COMPANIES: `${API_BASE_ENDPOINT}/doctors`,
  REVIEWS: `${API_BASE_ENDPOINT}/reviews`,
};
