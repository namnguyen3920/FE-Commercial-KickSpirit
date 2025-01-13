import AxiosHelper from "../AxiosHelper";

const baseURL = '/general'

class GeneralRequest {
    
    getBannerImg(){
        console.log("API requestor state");
        return AxiosHelper.get(`${baseURL}/banner`);
    }

}

export default new GeneralRequest();