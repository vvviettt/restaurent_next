const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL; // Thay bằng URL API của bạn
const BEARER_TOKEN = process.env.STRAPI_API_TOKEN;

export const strapiApiRequest = async (
  endpoint,
  method = "GET",
  data = null
) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const options = {
    method,
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      "Content-Type": "application/json",
    },
  };
  console.log(url);

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json(); // Trả về dữ liệu JSON
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};
