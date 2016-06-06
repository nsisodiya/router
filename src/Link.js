/**
 * Created by narendrasisodiya on 14/03/16.
 */


import { Component } from 'react';
import PageHolder from './PageHolder';
import routeEventBus from './routeEventBus';

class Link extends Component {
	constructor(props, context) {
		super(props, context);
	}

	linkClicked(synthEvt) {
		//Stop Event
		synthEvt.preventDefault();
		synthEvt.stopPropagation();

		if (PageHolder.isHolded() === false || confirm(PageHolder.isHolded())) {
			PageHolder.unHold();
			//Send RouteChange Signal to everywhere
			routeEventBus.publish("ROUTE_CHANGE_REQUESTED", {
				path: synthEvt.currentTarget.getAttribute("href")
			});
		} else {
			//Do nothing, If False !!
			console.log("Link Clicked, but Page is currently holded");
		}
	}

	render() {
		return <a onClick={this.linkClicked.bind(this)} {...this.props}>{this.props.children}</a>
	}
}
Link.defaultProps = {};
Link.propTypes = {};

export default Link;