import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

function ToDo(props) {
  const [list, setList] = useState([])

 
  const _addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    item && setList([...list, item])

  }

  const _toggleComplete = (id) => {
    let item = list.filter(i => i._id === id)[0] || {};

    if(item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item :listItem);
      setList(newList) 
    }
  }

  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'}
    ];

    setList(list)
    
  }, [])

  useEffect(() => {
    if (list.length >= 1) { document.title = `To Do List: ${list.filter(item => !item.complete).length}`};
  }, [list]);

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section>

        <div>
          <TodoForm handleSubmit={_addItem}/>
        </div>

        <div>
          <TodoList list={list} handleComplete={_toggleComplete} />
        </div>
      </section>
      </>

  )
}

export default ToDo;

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

