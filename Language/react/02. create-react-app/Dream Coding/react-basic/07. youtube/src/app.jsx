import React from 'react';
import './app.css';

function App() {
  return (
    <>
      <h1>VScode 커스터마이징</h1>
      <div>
        &#x0007B; <br />
        &nbsp; "workbench.colorCustomizations" : &#x0007B; <br />
        &nbsp;&nbsp;&nbsp;&nbsp; "titleBar.activeBackground" : "#F54133",
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; "titleBar.inactiveBackground" : "#F54133"
        <br />
        &nbsp;&nbsp; &#x0007D;, <br />
        <br />
        &nbsp; "editor.tokenColorCustomizations": &#x0007B; <br />
        &nbsp;&nbsp;&nbsp;&nbsp; "comments": "#d39e9e" //TODO: 주석 색상변경{' '}
        <br />
        &nbsp;&nbsp; &#x0007D;, <br />
        &#x0007D;
        <br />
      </div>
    </>
  );
}

export default App;
