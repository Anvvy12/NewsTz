import axios from 'axios';

const axiosNews = page => {
  const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
    params: { q: 'Fake News', page, pageSize: '5', autoCorrect: 'true' },
    headers: {
      'X-RapidAPI-Key': '2d9ffdeaccmshbfda8c67f16afbcp13166fjsn2f89a52038e9',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    },
  };

  return axios.request(options).catch(function (error) {
    console.error(error);
  });
};

export default axiosNews;
