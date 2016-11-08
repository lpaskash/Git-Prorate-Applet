/* 244 days from 1-1-16 till 9-1-16 */
var now = new Date();
var start = new Date(now.getFullYear(), 0, 245); 
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

var studentPrice = 362 - ( .991780822 * day );
var facultyStaffPrice = 464 - (1.271232877 * day);
var charterPrice = 410 - (1.123287671 * day);
var hospitalPrice = 464 - (1.271232877 * day);
var alumniPrice = 660 - (1.808219178 * day);
var alumniEarlyPrice = 362 - (0.991780822 * day);
var affiliatePrice = 750 - (2.054794521 * day);
var spousePrice = 356 - (0.9753424466 * day);
var studentSpousePrice = 307 - (0.84109589 * day);

/* .toFixed(2) sets price to rounded two decimal places */
document.getElementById("student").innerHTML = "$" + studentPrice.toFixed(2);
document.getElementById("facultyStaff").innerHTML = "$" + facultyStaffPrice.toFixed(2);
document.getElementById("charter").innerHTML = "$" + charterPrice.toFixed(2);
document.getElementById("hospital").innerHTML = "$" + hospitalPrice.toFixed(2);
document.getElementById("alumni").innerHTML = "$" + alumniPrice.toFixed(2);
document.getElementById("alumniEarly").innerHTML = "$" + alumniEarlyPrice.toFixed(2);
document.getElementById("affiliate").innerHTML = "$" + affiliatePrice.toFixed(2);
document.getElementById("spouse").innerHTML = "$" + spousePrice.toFixed(2);
document.getElementById("studentSpouse").innerHTML = "$" + studentSpousePrice.toFixed(2);





