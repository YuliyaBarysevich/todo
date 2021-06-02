import React, { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

function TodoForm(props) {
  const [item, setItem] = useState({})

  const _handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value } )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({})
  }

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Card>
        <Card.Body>
          <Card.Title>Add To Do Item</Card.Title>

          <Form.Group>
            <Form.Label>To Do Item</Form.Label>
            <Form.Control name="text"  placeholder="Add To Do List Item" onChange={_handleInputChange}/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text"  placeholder="Assignee Name" onChange={_handleInputChange}/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Difficulty Rating</Form.Label>
            <Form.Control type="range" onChange={_handleInputChange}/>
          </Form.Group>

          <Button variant="primary" type="submit">Add Item</Button>

        </Card.Body>
      </Card>
    </Form>
    </>
    // <>
    //     <h3>Add Item</h3>
    //     <form onSubmit={handleSubmit}>
    //       <label>
    //         <span>To Do Item</span>
    //         <input name="text" placeholder="Add To Do List Item" onChange={_handleInputChange} />
    //       </label>
    //       <label>
    //         <span>Assigned To</span>
    //         <input name="text" placeholder="Assignee Name" onChange={_handleInputChange} />
    //       </label>
    //       <label>
    //         <span>Difficulty Rating</span>
    //         <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={_handleInputChange} />
    //       </label>
    //       <button>Add Item</button>
    //     </form>
    //   </>

  )
}

export default TodoForm;

// class TodoForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { item: {} };
//   }
//   handleInputChange = e => {
//     this.setState({ item: {...this.state.item, [e.target.name]: e.target.value } })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     this.props.handleSubmit(this.state.item);
//     const item = {};
//     this.setState({item})
//   };

//   render() {
//     return (
//       <>
//         <h3>Add Item</h3>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <span>To Do Item</span>
//             <input name="text" placeholder="Add To Do List Item" onChange={this.handleInputChange} />
//           </label>
//           <label>
//             <span>Difficulty Rating</span>
//             <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={this.handleInputChange} />
//           </label>
//           <button>Add Item</button>
//         </form>
//       </>
//     );
//   }
// }



