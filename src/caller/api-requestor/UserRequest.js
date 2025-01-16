import AxiosHelper from "../AxiosHelper";

const baseURL = '/users'

class UserRequest {
    
    getAllUsers(){
        return AxiosHelper.get(baseURL);
    }

    getUserById = async (id) => {
        const response = await AxiosHelper.get(`${baseURL}/${id}`);
        return response;
    }

    modifyUserInfo = async (formData, id) => {
        console.log("Form data", formData);
        console.log("id user", id);
        const response = await AxiosHelper.put(`${baseURL}/update-user/${id}`, formData)
        console.log("response", response);
        return response;
    }

    addUser = async(formData) => {
        try {
            const response = await AxiosHelper.post(`${baseURL}/add-user`, formData)
            return response;
        } catch(err) {
            throw err;
        }
    }

    deleteUser = async(id) => {
        try {
            const response = await AxiosHelper.delete(`${baseURL}/del-user/${id}`);
            return response;
        } catch(err) {
            throw err;
        }
    }

    login = async (username, password) => {
        try {
            const loginUser = { username, password };
            const response = await AxiosHelper.post(`${baseURL}/login`, loginUser);            
            console.log("Response from api requestor: ", response);
            return response;
        } catch(err){
            throw err;
        }
    }
}

export default new UserRequest();
