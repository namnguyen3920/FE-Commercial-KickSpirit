import AxiosHelper from "../AxiosHelper";

const base_url = "/products";
class ProductRequest {
    
    getAllProducts(){
        const url = base_url;
        return AxiosHelper.get(url);
    }

}

export default ProductRequest;