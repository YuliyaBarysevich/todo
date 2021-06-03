import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import axios from 'axios'

import './todo.scss';
import useAjax from '../../hooks/ajax.js';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

function ToDo(props) {
  
  const [list, setList] = useState([])

  const [getItems, addNewItem, updateItem, deleteItem] = useAjax()

 
  const _addItem = async (item) => {
    addNewItem(item, (newItem) => setList([...list, newItem]))
    console.log(item)

  }

  const _toggleComplete = async (id) => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      updateItem(id, item, (update) => setList(list.map(listItem => listItem._id === item._id ? item :listItem)))
    }
  };

  const _deleteOneItem = async (id) => {
    let item = list.filter(i => i._id === id)[0] || {};
    deleteItem(id, (remove) => setList(list.filter(listItem => listItem._id !== item._id)))
  };

  // GET ALL DATA FROM DB
  // FETCH DATA IS SIDE EFFECT
  useEffect(() => {
    getItems((items) => setList(items.results))
  }, []);

  useEffect(() => {
    if (list.length >= 1) { document.title = `To Do List: ${list.filter(item => !item.complete).length}`};
  }, [list]);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
        
      </header>

      <main>
        <h2>
          To Do List Manager ({list.filter(item => !item.complete).length}) 
        </h2>

        <section className="main">

        <div>
          <TodoForm handleSubmit={_addItem}/>
        </div>

        <div>
          <TodoList list={list} handleComplete={_toggleComplete} handleDelete={_deleteOneItem} />
        </div>
      </section>

      </main>

      </>

  )
}

export default ToDo;


// OLD CODE
// OLD CODE
// OLD CODE

  // const addItem = (item) => {
  //   item._id = Math.random();
  //   item.complete = false;
  //   setList([...list, item]);
  // };

  // const addItem = async (item) => {
  //   await axios({
  //     method: 'post',
  //     url: todoAPI,
  //     data: item,
  //     mode: 'cors',
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //   .then(savedItem => {
  //     setList([...list, savedItem])
  //     })
    
  // }

  // const _toggleComplete = (id) => {
  //   let item = list.filter(i => i._id === id)[0] || {};

  //   if(item._id) {
  //     item.complete = !item.complete;
  //     let newList = list.map(listItem => listItem._id === item._id ? item :listItem);
  //     setList(newList) 
  //   }
  // }


  // const _deleteItem = async (id) => {
  //   let item = list.filter(i => i._id === id)[0] || {};

  //   if(item._id){
  //     await axios({
  //       method: 'delete',
  //       url: `${todoAPI}/${id}`,
  //     })

  //   }
    
    
  //   setList(newList)
  // }

  

  // useEffect(() => {
  //   let list = [
  //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
  //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
  //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
  //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
  //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'}
  //   ];

  //   setList(list)
    
  // }, [])

  

// class ToDo extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       list: []
//     };
//   }

//   addItem = (item) => {
//     item._id = Math.random();
//     item.complete = false;
//     this.setState({ list: [...this.state.list, item] });
//   };

//   toggleComplete = id => {

//     let item = this.state.list.filter(i => i._id === id)[0] || {};

//     if(item._id) {
//       item.complete = !item.complete;
//       let list = this.state.list.map(listItem => listItem._id === item._id ? item :listItem);
//       this.setState({list}) 
//     }
//   };

//   componentDidMount() {
//     let list = [
//       { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
//       { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
//       { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
//       { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
//       { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'}
//     ];

//     this.setState({list})
//   }

//   render() {
//     return (
//       <>
//       <header>
//         <h2>
//           There are {this.state.list.filter(item => !item.complete).length} Items To Complete
//         </h2>
//       </header>

//       <section>

//         <div>
//           <TodoForm handleSubmit={this.addItem}/>
//         </div>

//         <div>
//           <TodoList list={this.state.list} handleComplete={this.toggleComplete} />
//         </div>
//       </section>
//       </>
//     )
//   }
// }

