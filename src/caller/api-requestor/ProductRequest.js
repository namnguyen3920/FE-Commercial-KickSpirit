import AxiosHelper from "../AxiosHelper";

const baseURL = '/products'

class ProductRequest {
    
    getAllProducts(){
        return AxiosHelper.get(baseURL);
    }

    getSellingProduct(id){
        return AxiosHelper.get(`${baseURL}/selling/${id}`)
    }
}

export default new ProductRequest();