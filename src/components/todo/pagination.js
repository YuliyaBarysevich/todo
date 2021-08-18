import React from 'react';
import { Button } from 'react-bootstrap';

const Pagination = ({ tasksPerPage, totalTasks, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <section>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
          <Button variant="outline-dark" onClick={() => paginate(number)} href="#">
            {number}
          </Button>
          </li>
        ))}
        
      </ul>
    </section>
  )
}

export default Pagination;