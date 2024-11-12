import axios from 'axios';
import qs from 'qs';

const AxiosHelper = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) => qs.stringify(params),
});

AxiosHelper.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},
	(error) => {
		//console.error(error.response);
		return Promise.reject(error);
	}
);

export default AxiosHelper;
