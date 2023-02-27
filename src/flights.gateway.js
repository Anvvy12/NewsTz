import axios from 'axios';

const axiosNews = page => {
  const options = {
    method: 'GET',
    url: `https://steam2.p.rapidapi.com/search/Counter/page/${page}`,
    headers: {
      'X-RapidAPI-Key': '2d9ffdeaccmshbfda8c67f16afbcp13166fjsn2f89a52038e9',
      'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
    },
  };

  console.log(axios.request(options));

  return axios.request(options).catch(function (error) {
    console.error(error);
  });
};

export default axiosNews;
