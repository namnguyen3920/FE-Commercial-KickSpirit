import AxiosHelper from "../AxiosHelper";

const baseURL = '/products'

class ProductRequest {
    
    getAllProducts(){
        return AxiosHelper.get(baseURL);
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