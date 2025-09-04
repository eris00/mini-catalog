import api from "../api";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    const productsWithAdditionalProp = response.data.map(properties => ({
        ...properties,
        isFeatured: Math.random() < 0.3 // added property with randomly val because there is not isFeatured in this API
      }))
    return productsWithAdditionalProp;
  } catch (e) {
    console.log(e);
    throw e;
  }
}