import AxiosHelper from "../AxiosHelper";

const baseURL = '/category'

class CategoryRequest {
    
    getCategoryName(){
        let url = baseURL;
        return AxiosHelper.get(url);
    }

}

export default new CategoryRequest();