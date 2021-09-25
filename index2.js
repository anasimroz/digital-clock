function clock (){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    var time = hours + ":" + minutes + ":" + seconds + " ";
    document.getElementById("time") .innerText = time;
    document.getElementById("time") .textContent = time;
}

clock()
