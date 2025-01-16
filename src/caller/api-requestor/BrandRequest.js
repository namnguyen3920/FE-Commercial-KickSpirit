import AxiosHelper from "../AxiosHelper";

const baseURL = '/brand'

class BrandRequest {
    
    getBrandName(){
        let url = baseURL;
        return AxiosHelper.get(url);
    }

}

export default new BrandRequest();