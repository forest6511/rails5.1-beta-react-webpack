var React = require('react');
var {AppBar} = require('material-ui');

var Header = React.createClass({
    render: function () {
        return (
            <AppBar
                title="Rails5.1 React for self-studying"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
});

module.exports = Header;