import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from "./Hello";
import Nav from "./Nav";

ReactDOM.render(<Nav title="小松電機産業" />, document.getElementById('nav'));
ReactDOM.render(<Hello content="hello world" />, document.getElementById('app'));
