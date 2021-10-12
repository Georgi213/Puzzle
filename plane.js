function choose(pilt) {
    var part1 = document.getElementById("part1");
    var part2 = document.getElementById("part2");
    var part3 = document.getElementById("part3");
    var part4 = document.getElementById("part4");
    var part5 = document.getElementById("part5");
    var part6 = document.getElementById("part6");
    var part7 = document.getElementById("part7");
    var part8 = document.getElementById("part8");
    var part9 = document.getElementById("part9");


    var valik1 = document.getElementById("valik1");
    var valik2 = document.getElementById("valik2");
    var valik3 = document.getElementById("valik3");
    var valik4 = document.getElementById("valik4");
    var valik5 = document.getElementById("valik5");
    var valik6 = document.getElementById("valik6");
    var valik7 = document.getElementById("valik7");
    var valik8 = document.getElementById("valik8");
    var valik9 = document.getElementById("valik9");

    var imgchs = document.getElementsByClassName("imgchs");

    var i= 0;

    pilt.src = valitudPilt;
    /*if(valitudPilt.src=="img/x.png"){

          valitudPilt="img/0.png";
      }
      else{
          valitudPilt="img/x.png";
      }
  */
    if (
        valik1.src == part1.src &&
        valik2.src == part2.src &&
        valik3.src == part3.src &&
        valik4.src == part4.src &&
        valik5.src == part5.src &&
        valik6.src == part6.src &&
        valik7.src == part7.src &&
        valik8.src == part8.src &&
        valik9.src == part9.src
    )
    {
        part1.style.margin = -2.7;  part2.style.margin = -2.7; part3.style.margin = -2.7;  part4.style.margin = -2.7;

        part5.style.margin = -2.7; part6.style.margin = -2.7;   part7.style.margin = -2.7;    part8.style.margin = -2.7;
        part9.style.margin = -2.7;
        document.getElementById("valikk").innerHTML = "Молодец";
        alert("Поздравляю, вы собрали пазл!");


    }
    else
    {
        part1.style.margin = -2;  part2.style.margin = -2; part3.style.margin = -2;  part4.style.margin = -2;
        part5.style.margin = -2; part6.style.margin = -2;   part7.style.margin = -2;    part8.style.margin = -2;
        part9.style.margin = -2;


        document.getElementById("valikk").innerHTML = "";
    }



}
function pildiValik(pilt) {
    valitudPilt = pilt.src;
    document.getElementById("valik").src = valitudPilt;
}