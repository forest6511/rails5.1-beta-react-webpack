var React = require('react');
var {AppBar, Drawer, MenuItem} = require('material-ui');
var {getMuiTheme, MuiThemeProvider} = require('material-ui/styles');

var Header = React.createClass({
    getInitialState: function () {
        return {
            open: false,
            menus: [
                {
                    id: 1,
                    title: '管理メニューA'
                }, {
                    id: 2,
                    title: '管理メニューB'
                }, {
                    id: 3,
                    title: '管理メニューC'
                }, {
                    id: 4,
                    title: '管理メニューD'
                }
            ]
        };
    },
    handleToggle: function () {
        this.setState({open: !this.state.open});
    },
    handleClose: function () {
        this.setState(this.setState({open: false}));
    },
    render: function () {
        // change this.state to this.props by moving menus array to another component.
        var {menus} = this.state;
        var renderMenus = () => {
            return menus.map((menu) => {
                return (
                    <MenuItem key={menu.id} onTouchTap={this.handleClose}>{menu.title}</MenuItem>
                );
            });
        };
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
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
                        {renderMenus()}
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
});

module.exports = Header;