var React = require('react'),
	R = require('ramda'),
	cx = require('../support/utils').cx;

var PlatformStore = require('../stores/PlatformStore'),
	PlatformActions = require('../actions/PlatformActions');

function getStateFromStore() {
	return PlatformStore.getState();
}

var GroupPages = React.createClass({
	render: function() {
		var self = this;
		var pages = R.map(function(page) {
			var path = [ self.props.type + 's', page.path ],
				isCurrentPath = self.props.current_path == path.join('/');
			if (page.platforms[self.props.platform]) {
				path.push(self.props.platform);
			}
			return (
				<li className={ cx({ 'active': isCurrentPath }) } key={ page.title }>
					<a href={ '/' + path.join('/') }>{ page.title }</a>
				</li>);
		});
		return <ul>{ pages(this.props.pages) }</ul>
	}
});

var Sidebar = React.createClass({
	getInitialState: function() {
		return getStateFromStore();
	},
	componentDidMount: function() {
		PlatformStore.listen(this._onChange);
	},
	componentWillUnmount: function() {
		PlatformStore.unlisten(this._onChange);
	},
	_onChange: function() {
		this.setState(getStateFromStore());
	},
	render: function() {
		var self = this;
		var groups = R.map(function(group) {
			return (
				<div className="sidebar-group" key={ group.title }>
					<div className="sidebar-title">{ group.title }</div>
					<GroupPages
						pages={ group.pages }
						type={ group.type }
						current_path={ self.props.current_path }
						platform={ self.state.platform }/>
				</div>);
		});

		return (
			<div className="sidebar">
				{ groups(this.props.site_map) }
			</div>);
	}
});

module.exports = Sidebar;