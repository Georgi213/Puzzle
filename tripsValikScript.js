var kellekord="pildid/trips.png";
var lopp=false;
function klik(pilt){
    pilt.src=kellekord;
    if(vyidukonroll()){
        alert("sa võtsid");
        lopp=true;
    }

   // if(kellekord==="pildid/trips.png"){
    //    kellekord="pildid/traps.png";
  //  } else{
  //      kellekord="pildid/trips.png";
   // }
    if(ruududKasutatud()) {
        lopp=true;
        alert("Mäng on läbi");
    }
}
function klikValik(pilt){
    kellekord=pilt.src;
    document.getElementById("pilt12").src=kellekord;
}
//проверяет все картинки и возвращает аfalse если найдет пустую картинку
function ruududKasutatud(){
    pildid = document.images;
    for (var i = 0; i < pildid.length; i++) {
        if (pildid[i].src.split("/").pop() == "Tyhi1.png") {
            return false;
            //split делает массив из пути к файлу
            //pop() выбирает из массива последнее значение
        }
    }
    return true;
}
// определяем имя файла
function sisu(nr){
    var fnimi=document.getElementById("pilt"+nr).src;
    fnimi=fnimi.split("/").pop();
    return fnimi;
}
function kontrollsisu(a,b,c,sisulopp){
    //a,b,c-номера картинок и sisulopp-адрес нужной картинки
    if(sisu(a)==sisulopp.split("/").pop() && sisu(b)==sisulopp.split("/").pop() && sisu(c)==sisulopp.split("/").pop())
    {return true;}else{return false;}



}
function vyidukonroll(){
    if( kontrollsisu(1,2,3,kellekord)){return true;}
    if( kontrollsisu(4,5,6,kellekord)){return true;}
    if( kontrollsisu(7,8,9,kellekord)){return true;}
    if( kontrollsisu(1,4,7,kellekord)){return true;}
    if( kontrollsisu(2,5,8,kellekord)){return true;}
    if( kontrollsisu(4,6,9,kellekord)){return true;}
    if( kontrollsisu(1,5,6,kellekord)){return true;}
    if( kontrollsisu(3,5,7,kellekord)){return true;}
    return false;

}