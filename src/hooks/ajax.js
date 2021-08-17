import axios from "axios";

const useAjax = (list) => {
  // const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";
  const todoAPI = 'https://barysevich-server-api.herokuapp.com/api/v1/todo'

  const getItems = async (callback) => {
    let allItems = await axios.get(todoAPI)
    let items = allItems.data;
    callback(items)
  };

  const addNewItem = async (item, callback) => {
    item.complete = false;
    let newItem = await axios.post(todoAPI, item);
    callback(newItem.data)
  }

  const updateItem = async(id, callback) => {
    try {
      let item = list.filter((i) => i._id === id)[0] || {};
      if (item._id) {
        item.complete = !item.complete;
        let updatedItem = await axios.put(`${todoAPI}/${id}`, item);
        let data = updatedItem.data;
        callback(
          list.map((listItem) => (listItem._id === data._id ? data : listItem))
        );
      }
    } catch (e) {
      console.error(e);
    }
  }

  const deleteItem = async (id, callback) => {
    try {
      let item = list.filter((i) => i._id === id)[0] || {};
      await axios.delete(`${todoAPI}/${id}`);
      callback(list.filter((el) => el._id !== item._id));
    } catch (e) {
      console.error(e);
    }
  }

  return [getItems, addNewItem, updateItem, deleteItem]
};

export default useAjax;