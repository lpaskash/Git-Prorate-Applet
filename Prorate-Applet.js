var now = new Date();
var start = new Date(now.getFullYear(), 0, 245);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
var price = 362 - ( .991780822 * day ).toFixed(2);