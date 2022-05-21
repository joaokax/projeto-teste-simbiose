import axios from "axios";

const ITEM_API_URL = 'https://randomuser.me/api/';

class ItemService {
    getAllItems() {
        return axios.get(ITEM_API_URL)
    }
    
    createItem(item) {
        return axios.post(ITEM_API_URL, item)
    }

    getItemById(itemId) {
        return axios.get(ITEM_API_URL + '/' + itemId)
    }

    updateItem(itemId, item) {
        return axios.put(ITEM_API_URL + '/' + itemId, item)
    }

    deleteItem(itemId) {
        return axios.delete(ITEM_API_URL + '/' + itemId)
    }
}

export default new ItemService();
