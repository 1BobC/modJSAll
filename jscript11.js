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

//#88 What are HTTP requests?
//#89 Making an HTTP request using JSONPlaceholder and #90 Response Status and #91 Callback Functions
// getTodos= (resource, callback) =>  {    //#91 Callback Functions and resource # 93. Callback Hell
// const request= new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//         //  console.log(request, request.readyState);
//         //  document.getElementById("bob15").innerHTML= "Request reaches state: " + (request, request.readyState) + ". Completed";
//          if(request.readyState === 4 && request.status === 200){
//              const data= JSON.parse(request.responseText);           //# 92 JSON data
//              //console.log(request, request.responseText);
//              callback(undefined, data);                                  //'request.responseText' moved to L99 and replaced by 'data' # 92 JSON data
//          }else if(request.readyState === 4){
//              //console.log('could not fetch the data');
//              callback('could not fetch the data', undefined);
//          }
//     });
    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/2');
    //request.open('GET', 'todos.json');          //# 92 JSON data creating our very own JSON 
    // request.open('GET', resource);
    // request.send();
    // };

    // console.log(1);
    // document.getElementById("bob17").innerHTML= 1;
    // console.log(2);
    // document.getElementById("bob18").innerHTML= 2;

    // getTodos('luigi.json',(err, data) => {              //# 93. Callback Hell - nested callback functions             
    //             console.log(data);
    //             document.getElementById("bob24").innerHTML= (data);
    //     getTodos('mario.json',(err, data) => {                           
    //         console.log(data);
    //         document.getElementById("bob25").innerHTML= (data); 
    //         getTodos('shaun.json',(err, data) => {                           
    //             console.log(data);
    //             document.getElementById("bob26").innerHTML= (data); 
    //             });           
    //             });          
            // if(err){
            //     console.log(err);
            //     document.getElementById("bob20").innerHTML= (err);
            // }else{
            //     console.log(data);
            //     //document.getElementById("bob20").innerHTML= (data);
            //     document.getElementById("bob23").innerHTML= (data);
            // }
    //});

    // console.log(3);
    // document.getElementById("bob21").innerHTML= 3;
    // console.log(4);
    // document.getElementById("bob22").innerHTML= 4;

    //# 92 JSON data including creating our very own JSON 
    //# 93. Callback Hell
    //# 94. Promise Basics - no coding just look and listen
    //#95 Chaining Promises - no coding just look and listen
    //#96 The Fetch API - no coding just look and listen
    //#97 Async & Await - no coding just look and listen
   