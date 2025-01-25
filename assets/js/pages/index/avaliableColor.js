const avaliableColor = document.querySelector("#color");

function getHourInBrasil(){    
    const nowDate = new Date();
    const options = {timeZone : 'America/Sao_Paulo', year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    const brDate = new Intl.DateTimeFormat('pt-BR', options).format(nowDate);
    const hourNow = (brDate[39].toString())+(brDate[40].toString()); 
    return hourNow;
}

if ((getHourInBrasil() < 12 && getHourInBrasil() > 7) || (getHourInBrasil < 22 && getHourInBrasil() > 12) ){
    avaliableColor.style.background = "green";
    console.log("Disponível");
} else{
    avaliableColor.style.background = "red";
    console.log("Indisponível");
}
