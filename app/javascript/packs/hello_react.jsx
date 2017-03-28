// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

var React = require('react');
var ReactDOM = require('react-dom');
var {getMuiTheme, MuiThemeProvider} = require('material-ui/styles');
var {RaisedButton} = require('material-ui');
var injectTapEventPlugin = require('react-tap-event-plugin');
var Header = require('Header');

injectTapEventPlugin();

var HelloReact = React.createClass({
    render: function () {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Header/>
                    <div className="index">
                        <div>
                            <RaisedButton label="OK" primary={true} />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
});

ReactDOM.render(
    <HelloReact/>,
    document.getElementById('app')
);

