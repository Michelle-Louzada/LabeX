import axios from "axios";

export const getApi = (url, setData) => {
  axios
    .get(url)
    .then((resposta) => {
      setData(resposta.data.trips);
    })
    .catch((erro) => {
      console.log(erro);
    });
};