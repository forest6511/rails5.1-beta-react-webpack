// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

var React = require('react');
var ReactDOM = require('react-dom');
var {getMuiTheme, MuiThemeProvider} = require('material-ui/styles');
var {RaisedButton} = require('material-ui');

var HelloReact = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <RaisedButton label="Hello React Material UI"/>
    </MuiThemeProvider>
);


ReactDOM.render(
    <HelloReact/>,
    document.getElementById('app')
);

