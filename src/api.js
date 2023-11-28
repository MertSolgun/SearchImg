import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: "Client-ID dnMCwGb0ThT2FFHtsLjRKd4BerbiC_Et4nAqrXJNvlI",
    },
    params: {
      query: term,
      
    },
  });
  return response.data.results;
};

export default searchImages;
