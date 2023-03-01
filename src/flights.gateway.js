import axios from 'axios';

const axiosNews = (page = 1) => {
  const options = {
    method: 'GET',
    url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
    params: { q: 'covid', lang: 'en', page, page_size: '10', media: 'True' },
    headers: {
      'X-RapidAPI-Key': '2d9ffdeaccmshbfda8c67f16afbcp13166fjsn2f89a52038e9',
      'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com',
    },
  };
  return axios.request(options).catch(function (error) {
    console.error(error);
  });
};

export default axiosNews;
