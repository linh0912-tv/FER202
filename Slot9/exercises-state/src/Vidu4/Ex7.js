import React, { useState } from 'react';

const DragAndDropList = () => {
  const [items, setItems] = useState([
    'Hue',
    'Da nang',
    'Ho Chi Minh',
    'Ha Noi'
  ]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragEnter = (index) => {
    if (index === draggingItem) return;

    const newItems = [...items];
    const item = newItems[draggingItem];
    newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, item);
    setDraggingItem(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <div style={{ padding: '2rem', minHeight: '100vh' }}>
      <h2>Drag and Drop List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDragEnd}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDropList;
