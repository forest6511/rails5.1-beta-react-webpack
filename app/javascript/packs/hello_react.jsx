// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

var React = require('react');
var ReactDOM = require('react-dom');


var HelloReact = React.createClass({
  render: function () {
    return (
        <div>
          <h1>Hello {this.props.name}</h1>
        </div>
    );
  }
});

ReactDOM.render(
    <HelloReact name="React!!"/>,
    document.getElementById('app')
);

