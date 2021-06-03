import axios from "axios";

const useAjax = () => {
  const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";
  // const todoAPI = 'https://barysevich-api-server.herokuapp.com/todo'

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

  const updateItem = async(id, item, callback) => {
    let newItem = await axios.put(`${todoAPI}/${id}`, item)
    callback(newItem.data)
  }

  const deleteItem = async (id, callback) => {
    await axios.delete(`${todoAPI}/${id}`)
    callback()
  }

  return [getItems, addNewItem, updateItem, deleteItem]
};

export default useAjax;