const dakika = document.getElementById("dakika");
const saniye = document.getElementById("saniye");

const secilenDk = document.getElementById("secilen-dk");
const secilenSn = document.getElementById("secilen-sn");

const baslatbtn = document.getElementById("baslat");
const sifirlabtn = document.getElementById("sifirla");


secilenDk.addEventListener("change",()=>{
    dakika.textContent = secilenDk.value;
});

secilenSn.addEventListener("change",()=>{
   if(secilenSn.value<10){
    saniye.textContent = "0"+secilenSn.value;
   }else{
    saniye.textContent=secilenSn.value;
   }
    //saniye.textContent = secilenSn.value<10 ? "0"+secilenSn.value : secilenSn.value;
})


baslatbtn.addEventListener("click",startTimer);
sifirlabtn.addEventListener("click",()=>{
    dur=true;
    dakika.textContent="00";
    saniye.textContent="00";
    secilenDk.value="00";
    secilenSn.value="00";
})
let dur = false;


function startTimer(){
    let dk = dakika.textContent;
    let sn = saniye.textContent;

    const interval = setInterval(()=>{
        sn--;
        sn= sn<10 ? "0"+sn:sn;
        if(sn == "0-1"){
            dk--;
            sn=59;
        }
        if(dk == 0 && sn == 0){
            clearInterval(interval);
            window.alert("süre doldu");
            secilenDk.value="00";
            secilenSn.value="00";
        }
        if(dur){
            clearInterval(interval);
            return;
        }


        dakika.textContent=dk;
        saniye.textContent=sn;
    },1000)
}

