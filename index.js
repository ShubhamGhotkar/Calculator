let audio1 = new Audio("num1.mp3");
let audio2 = new Audio("num.mp3");
const input = document.getElementById("input");
input.value = 0 ;
let str = "";
const changeColor = (a) => {
    let doc1 = document.getElementById('heading');
    let doc2 = document.getElementById('dark-light');
    let doc3 = document.getElementById('theme');
    let doc4 = document.getElementById('onoff');
     let check = str+=a;
    if(str.length%2 != 0){
        doc2.style.backgroundColor = "white";
        doc4.style.backgroundColor = "darkslateblue";
        doc1.style.color = "black";
        doc3.style.color = "black";
        doc3.innerHTML = "<small>dark Theme</small>";
    }
    else{
        doc3.style.color = "white";
        doc4.style.backgroundColor = "white";
        doc2.style.backgroundColor = "darkslateblue";
        doc1.style.color = "white";
        doc3.innerHTML = "<small>light Theme</small>";
    }
}
const display = ( val ) => {
    str+=val;
     input.value = str;
    audio1.play();
}


const calculate = ( ) => {
    let expration = input.value;
    input.value = eval(expration);
    audio1.play();
}
const clearScreen = () => {
    audio1.play();
    str = "";
    input.value=0;   
}

const clearone = () =>{
    audio1.play();
    str = input.value;
    str = str.substring(0, str.length - 1);
    input.value = str;
}
