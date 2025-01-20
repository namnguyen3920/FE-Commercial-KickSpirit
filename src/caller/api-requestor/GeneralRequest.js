import AxiosHelper from "../AxiosHelper";

const baseURL = '/general'

class GeneralRequest {
    
    getBannerImg(){
        console.log("API requestor state");
        return AxiosHelper.get(`${baseURL}/banner`);
    }

    getSize(){
        let url = '/size';
        return AxiosHelper.get(url);
    }


}

export default new GeneralRequest();