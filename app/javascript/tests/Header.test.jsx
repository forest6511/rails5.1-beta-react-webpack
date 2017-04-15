var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var injectTapEventPlugin = require('react-tap-event-plugin');
var Header = require('Header');
injectTapEventPlugin();

// We do'nt need to require JQuery. See webpack.

describe('Header', () => {
    it('should exist', () => {
        expect(Header).toExist();
    });
    it('should be "Rails5.1 React for self-studying" on title of header', ()=> {
        var header = TestUtils.renderIntoDocument(<Header/>);
        var $el = $(ReactDOM.findDOMNode(header));
        var title = $el.find('h1').text();
        expect(title).toBe('Rails5.1 React for self-studying');
    });
});