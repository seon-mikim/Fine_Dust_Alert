import axios from "axios";
import qs from "qs";

const createInstance = () => {
  const instance = axios.create({
    baseURL: "/api",
    timeout: 3000,
    paramsSerializer: (params) => qs.stringify(params, { encode: false }),
  
      params: {
        serviceKey: import.meta.env.VITE_SERVER_API_KEY,
        returnType: "json",
        numOfRows: "100",
        pageNo: "1",
        sidoName: "전국",
        ver: "1.0",
      },
      paramsSerializer: {
        serialize: (params) => qs.stringify(params),
      },
  });
  // paramsSerializer: (params) => qs.stringify(params, { encode: false }),
//   /*
//     params: {
//       serviceKey: import.meta.env.VITE_SERVER_API_KEY,
//       returnType: "json",
//       numOfRows: "100",
//       pageNo: "1",
//       sidoName: "전국",
//       ver: "1.0",
//     },
//     paramsSerializer: {
//       serialize: (params) => qs.stringify(params),
//     },
//   */
  instance.interceptors.request.use(
    (request) => {
      console.log();
      console.log(request);
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      if (!response.data?.response) {
        const errorRegex =
          /(?<=<returnReasonCode>)(?<errorMsg>.*)(?=<\/returnReasonCode>)/g;

        const result = errorRegex.exec(response.data)?.groups.errorMsg;

        return "error";
      }
      return response;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};

export const instance = createInstance();