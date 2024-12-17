const baseUrl = "https://api.themoviedb.org/3/";
const API_KEY = process.env.TMDBI_TOKEN;

// fetch api
export const fetchEndPoint = async (mediaType) => {
  try {
    const response = await fetch(`${baseUrl}${mediaType}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(API_KEY);
    return data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
};

//Images
export const apiImage = {
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
};
