declare var require: any

var React = require('react');
vars ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {
        return (
            <h1>Welcome to React!!</h2>
        );;
    }
};

ReactDOM.render(<Hello />, document.getElementById('root'), );