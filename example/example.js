import Router, { PageHolder } from '@nsisodiya/router';

console.log(PageHolder.isHolded());
PageHolder.hold("You cannot navigate from this page");
console.log(PageHolder.isHolded());
PageHolder.unHold();
console.log(PageHolder.isHolded());

console.log(Router);