import React from 'react';

export const useCinfirm = (message = '', onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== 'function') return;
  if (!onCancel || typeof onCancel !== 'function') return;
  const confirmAction = () => {
    if (confirm(message)) onConfirm();
    else onCancel();
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log('Deleting the world');
  const abort = () => console.log('Aborted');
  const confirmDelete = useCinfirm('Are you sure', deleteWorld, abort);
  return (
    <div className="App">
      <h1>useConfirm</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
