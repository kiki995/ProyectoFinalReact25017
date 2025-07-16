import React from 'react';
import { ListGroup } from 'react-bootstrap';

const PopupCategorias = ({ categorias,onSelectCategory  }) => {
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
    key={cat.id || idx}
    action
    className="border-0 px-2 py-1"
    style={{ backgroundColor: 'white' }}
    onClick={() => onSelectCategory(cat)} // ⬅️ Pasar objeto completo
  >
    {cat.name}
  </ListGroup.Item>
))}

      </ListGroup>
    </div>
  );
};

export default PopupCategorias;
