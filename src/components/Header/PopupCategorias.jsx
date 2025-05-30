import React from 'react';
import { ListGroup } from 'react-bootstrap';

const PopupCategorias = ({ categorias }) => {
  return (
    <div
      style={{
        background: 'white',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        maxHeight: '300px',
        overflowY: 'auto',
        width: '200px'
      }}
    >
      <ListGroup className="list-unstyled m-0 p-0">
        {categorias.map((cat, idx) => (
          <ListGroup.Item
            key={idx}
            action
            className="border-0 px-2 py-1"
            style={{ backgroundColor: 'white' }}
          >
            {cat}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default PopupCategorias;
