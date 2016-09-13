/*

 The MIT License (MIT)
 Copyright (c) 2016 Narendra Sisodiya https://github.com/nsisodiya

 */

import PageHolder from './PageHolder';
import Link from './Link';
import routeEventBus from './routeEventBus';
import RouteLoader from './RouteLoader';
import addEvent from './addEvent';


addEvent(window, 'popstate', function (event) {
	if (PageHolder.isHolded() === false || confirm(PageHolder.isHolded())) {
		PageHolder.unHold();
		routeEventBus.publish("ROUTE_CHANGE_REQUESTED_POPSTATE", {
			event: event
		});
	} else {
		console.log("Back/Forward Button Clicked, but Page is currently holded");
		event.preventDefault();
		history.go(1); //This will make two alertBOX but working !!
		return false;
	}
});

module.exports = {
	PageHolder,
	Link,
	routeEventBus,
	RouteLoader
};