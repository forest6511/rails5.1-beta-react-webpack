var React = require('react');
var {AppBar, Drawer, MenuItem} = require('material-ui');

var Header = React.createClass({
    getInitialState: function () {
        return {
            open: false
        };
    },
    handleToggle: function () {
        this.setState({open: !this.state.open});
    },
    handleClose: function () {
        this.setState(this.setState({open: false}));
    },
    render: function () {
        return (
            <div>
                <AppBar
                    title="Rails5.1 React for self-studying"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={250}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>管理メニューA</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>管理メニューB</MenuItem>
                </Drawer>
            </div>
        );
    }
});

module.exports = Header;