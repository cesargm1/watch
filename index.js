// const watch = document.getElementById("watch-button")
// const containerWatch = document.getElementById("container-watch")

// watch.addEventListener("click",() => {
//     let currentDate = new Date();
//     let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
//     containerWatch.innerHTML = time;
// })

const containerWatch = document.getElementById("watch")

    function watch () {
    let currentDate = new Date();
    containerWatch.innerHTML = currentDate.toLocaleTimeString();
}
setInterval(watch,1000);
