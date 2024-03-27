// const watch = document.getElementById("watch-button")
// const containerWatch = document.getElementById("container-watch")

// watch.addEventListener("click",() => {
//     let currentDate = new Date();
//     let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
//     containerWatch.innerHTML = time;
// })

const WatchDiv = document.getElementById("watch");
const daysDiv = document.getElementById("days");


    function DisplayTime () {
    let currentHour = new Date();
    WatchDiv.innerHTML = currentHour.toLocaleTimeString();
}
setInterval(DisplayTime,1000);


 function DisplayDate () {
     let currentDate = new Date();
     daysDiv.innerHTML = currentDate.toDateString();
     document.getElementById("days").innerHTML = text;
 }

 DisplayDate()
