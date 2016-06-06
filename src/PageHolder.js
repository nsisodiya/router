/**
 * Created by narendrasisodiya on 14/03/16.
 */
var currentPageHolded = false;
export default {
	hold(message){
		currentPageHolded = message;
	},
	isHolded(){
		return currentPageHolded;
	},
	unHold(){
		currentPageHolded = false;
	}
}
