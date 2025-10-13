function LogIn_Out(element){
    if (element.innerText == "Login"){
        element.innerText = "Log out";
    }else{
        element.innerText = "Login"
    }
}

function cambioVideo(element){
    const videoMain = document.getElementById("Main_video");
    let videoPequeno = element.src;
    let rutaMain = videoMain.src;

    videoMain.src = videoPequeno;
    element.src = rutaMain;


    //cambio de titulo
    const textoMain = document.getElementById("textoMain")
    let contenidoTextoMain = textoMain.textContent;

    const titulopequeno = element.nextElementSibling;
    let contenidoTextoPequeno = titulopequeno.textContent; 

    textoMain.textContent = contenidoTextoPequeno;
    titulopequeno.textContent = contenidoTextoMain; 
}

