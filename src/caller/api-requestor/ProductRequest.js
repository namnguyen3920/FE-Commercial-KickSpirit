import AxiosHelper from "../AxiosHelper";

class ProductRequest {
    
    getAllProducts(params){
        const url = "/products";
        return AxiosHelper.get(url, { params });
    }
}

export default ProductRequest;