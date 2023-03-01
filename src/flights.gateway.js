import axios from 'axios';

const axiosNews = () => {
  const options = {
    method: 'GET',
    url: 'https://philippine-news.p.rapidapi.com/latest',
    params: { limit: '10' },
    headers: {
      'X-RapidAPI-Key': '2d9ffdeaccmshbfda8c67f16afbcp13166fjsn2f89a52038e9',
      'X-RapidAPI-Host': 'philippine-news.p.rapidapi.com',
    },
  };
  return axios.request(options).catch(function (error) {
    console.error(error);
  });
};

export default axiosNews;
