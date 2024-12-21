import AxiosHelper from "../AxiosHelper";

const baseURL = '/products'

class ProductRequest {
    
    getAllProducts(){
        let url = baseURL;
        return AxiosHelper.get(url);
    }


}

export default new ProductRequest();