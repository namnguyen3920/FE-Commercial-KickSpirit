import AxiosHelper from "../AxiosHelper";

const baseURL = '/users'

class UserRequest {
    
    getAllUsers(){
        return AxiosHelper.get(baseURL);
    }

    addUser = async(formData) => {
        try {
            const response = await AxiosHelper.post(`${baseURL}/add-user`, formData)
            return response;
        }catch(err) {
            throw err;
        }
    }

    login = async (username, password) => {
        try {
            const loginUser = { username, password };
            const response = await AxiosHelper.post(`${baseURL}/login`, loginUser);            
            console.log("Response from api requestor: ", response);
            return response;
        }catch(err){
            throw err;
        }
    }
}

export default new UserRequest();
