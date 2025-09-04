import api from "../api";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
}