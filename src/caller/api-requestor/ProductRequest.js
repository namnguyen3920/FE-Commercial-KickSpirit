import AxiosHelper from "../AxiosHelper";

const baseURL = '/products'

class ProductRequest {
    
    getAllProducts(){
        return AxiosHelper.get(baseURL);
    }

    getProductById = async(id) => {
        try {
            const response = await AxiosHelper.get(`${baseURL}/${id}`);
            console.log("Log from api", response);
            return response;
        }catch (err){
            throw err;
        }
    }

    deleteProduct = async(id) => {
        try {
            const response = await AxiosHelper.delete(`${baseURL}/del-product/${id}`);
            return response;
        } catch(err) {
            throw err;
        }
    }

    addNewProduct = async(formData) => {
        try{
            const response = await AxiosHelper.post(`${baseURL}/add-product`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                  },
            })
            return response;
        } catch(err) {
            throw err;
        }
    }

    getSellingProduct(id){
        return AxiosHelper.get(`${baseURL}/selling/${id}`)
    }

    addBuyingProduct = async (formData) => {
        try {
            const response = await AxiosHelper.post(`${baseURL}/buying`, formData)
            console.log("Response: ", response);
            return response;
        } catch(err) {
            throw err;
        }
    }

    getBuyingProductById = async(id) => {
        try {
            const response = await AxiosHelper.get(`${baseURL}/order/${id}`);
            return response;
        }catch (err){
            throw err;
        }
    }
   
    
}

export default new ProductRequest();