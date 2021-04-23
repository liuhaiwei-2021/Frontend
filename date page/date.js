



var d = new Date();
//document.getElementById("date").innerHTML = d;

//console.log(d);
//realDate = document.querySelector("#date");
//console.log(realDate.innerText);

getRealDate =()=>{

    realYear= d.getFullYear();
    realMonth= d.getMonth()+1;
    //console.log(realMonth);
    realDate= d.getDate();
    dateString = `${realYear}-${realMonth}-${realDate}`;
    return dateString;
    }


getRealTime =()=>{

    h= d.getHours();
    m= d.getMinutes();
    s= d.getSeconds();
    timeString = `${h}:${m}:${s}`;
    return timeString;
    }
getRealDate();
getRealTime();

//realDate.innerHTML = dateString;
//console.log(document.getElementById("date").innerText);
//////document.getElementById("date").innerText = dateString;
//document.getElementById("time").innerText = timeString;

//setTimeout("location=location; ", 1000); 


var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var realDate = d.toDateString();
  var realTime = d.toLocaleTimeString();
  document.getElementById("date").innerHTML = realDate;
  document.getElementById("time").innerHTML = realTime;
}