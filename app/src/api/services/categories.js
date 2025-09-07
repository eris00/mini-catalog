import api from "../api";

export const getAllCategories = async () => {
  try {
    const response = await api.get("/products/categories");
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
}