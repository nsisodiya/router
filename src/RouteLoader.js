/**
 * Created by narendrasisodiya on 14/03/16.
 */


import PathParser from 'pathparser';
import routeEventBus from './routeEventBus';
import { Component } from 'react';

var simplePathParser = new PathParser();

class RouteLoader extends Component {
	constructor(props, context) {
		super(props, context);
		console.log("%c RouteLoader Component -> Init ", 'background: red; color: white');
		this.state = {
			currentRoute: null
		};

		this.unsub1 = routeEventBus.subscribe("ROUTE_CHANGE_REQUESTED", function (routeObj) {
			simplePathParser.run(routeObj.path);
		});

		this.unsub2 = routeEventBus.subscribe("ROUTE_CHANGE_REQUESTED_POPSTATE", function (routeObj) {
			console.log("Path Requested", window.location.pathname);
			routeEventBus.publish("ROUTE_CHANGE_REQUESTED", {
				path: window.location.pathname
			});
			//simplePathParser.run(window.location.pathname);
		});


		var self = this;
		Object.keys(this.props.config.routes).map((i) => {
			console.log("adding", i);
			simplePathParser.add(i, function () {
				//Load Component which mached with {i}
				this.url = "/" + this.url;

				// Change State if new Component is requested
				//if (self.state.currentRoute !== i) {
				self.setState({
					currentRoute: i,
					url: this.url,
					args: this
				});
				//}

				//Now Set Path
				if (window.location.pathname !== this.url) {
					history.pushState({}, "WTF", this.url);
				}

				routeEventBus.publish("ROUTE_CHANGE_DONE", {
					currentRoute: i,
					url: this.url,
					args: this
				});
			});
		});
	}

	componentWillUnmount() {
		this.unsub1();
		this.unsub2();
		console.log("%c RouteLoader Component -> UnMount ", 'background: black; color: yellow');
	}

	render() {
		console.log("%c RouteLoader Component -> Render ", 'background: black; color: pink');
		if (this.state.currentRoute === null) {
			return (<div></div>);
		}
		var C = this.props.config.routes[this.state.currentRoute];
		return (
				<div styleName='container'>
					<C {...this.state.args} />
				</div>
		);
	}
}
RouteLoader.defaultProps = {};
RouteLoader.propTypes = {};

export default RouteLoader;