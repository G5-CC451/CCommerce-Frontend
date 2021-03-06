import axios from "axios";

export const getCategories = async () =>
  await axios.get(`${process.env.API_URL}/categories`);

export const getCategory = async (slug) =>
  await axios.get(`${process.env.API_URL}/category/${slug}`);

export const removeCategory = async (slug, authtoken) =>
  await axios.delete(`${process.env.API_URL}/category/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateCategory = async (slug, category, authtoken) =>
  await axios.put(`${process.env.API_URL}/category/${slug}`, category, {
    headers: {
      authtoken,
    },
  });

export const createCategory = async (category, authtoken) =>
  await axios.post(`${process.env.API_URL}/category`, category, {
    headers: {
      authtoken,
    },
  });

export const getCategorySubs = async (_id) =>
  await axios.get(`${process.env.API_URL}/category/subs/${_id}`);
