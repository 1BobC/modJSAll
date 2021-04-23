//Section 11: Dates & Times and Section 12: #86 Asynchronous JS
//#82 Dates and times in JS
//const myDate = new Date();
//console.log(myDate);
// console.log(typeof myDate);
//document.getElementById("bob1").innerHTML= "The date is: " + myDate;
// document.getElementById("bob1").innerHTML= "The date is: " + (typeof myDate);

//year month day time
// console.log("getFullYear: ", myDate.getFullYear());
// document.getElementById("bob2").innerHTML= "getFullYear: " + myDate.getFullYear();

// console.log("getMonth: ", myDate.getMonth());
// document.getElementById("bob3").innerHTML= ("getMonth: " + myDate.getMonth());

// console.log("getDate: ", myDate.getDate());
// document.getElementById("bob4").innerHTML= ("getDate: " + myDate.getDate());

// console.log("getDay: ", myDate.getDay());
// document.getElementById("bob5").innerHTML= ("getgetDay: " + myDate.getDay());

// console.log("gettoLocaleDateString: ", myDate.toLocaleString());
// document.getElementById("bob6").innerHTML= ("Today's Date and Time: " + myDate.toLocaleString());

// console.log("get Date String: ", myDate.toDateString());
// console.log("get Time String: ", myDate.toTimeString());

//#83 time stamps
//const before = new Date('02/01/2019 7:30:59');
// const before = new Date('March 1 2021 7:30:59');
// const now = new Date();

// const diff = now.getTime() - before.getTime();
// // const diff = now - before;
// console.log(diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(`the before date was ${mins} mins ago`);
// console.log(`the before date was ${hours} hours ago`);
// console.log(`the before date was ${days} days ago`);
// document.getElementById("bob7").innerHTML= "the before date was: " + days + "days ago";

// // converting timestamps to dates
// const timestamp = 1675938474990;
// console.log(new Date(timestamp));

//#84 Building a digital clock
// const clock= document.querySelector('.clock');
// const tick= () => {
//     const now= new Date();
//     const h= now.getHours();
//     const m= now.getMinutes();
//     const s= now.getSeconds();
//     //console.log(h, m, s);               //YES, it increments every second as setInterval()!
// };
// setInterval(tick, 1000);

//#85 Date fns Library
// const now= new Date();
// //console.log(dateFns.isToday(now));

// // formatting options
// console.log(dateFns.format(now, 'YYYY'));
// console.log(dateFns.format(now, 'MMMM'));
// console.log(dateFns.format(now, 'dddd'));
// console.log(dateFns.format(now, 'Do'));
// console.log(dateFns.format(now, 'dddd, Do MMMM, YYYY'));

// // comparing dates
// const before = new Date('February 1 2019 12:00:00');

// console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));

//Section 12: #86 Async JS - wow eh? and setTimeout is Asynchronous
// console.log(1.);
// document.getElementById("bob10").innerHTML= 1.;
// console.log(2.);
// document.getElementById("bob11").innerHTML= 2.;
// setTimeout(() => {
//     console.log('callback function fired'); 
//     document.getElementById("bob12").innerHTML= "callback function fired";   
// }, 2000);
// console.log(3.);
// document.getElementById("bob13").innerHTML= 3.;
// console.log(4.);
// document.getElementById("bob14").innerHTML= 4.;

//#87 What are HTTP requests?