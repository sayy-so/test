let btn = document.querySelector('button')
let inp = document.querySelectorAll('input')  
console.log(inp[0]);
btn.onclick = fun

function fun() {
    let result = 0
    if(inp[0].value == "токио" || inp[0].value == "Токио" || inp[0].value == "Tokyo" ){
       result = result+20
    }
     if(inp[1].value == "вашингтон" || inp[1].value == "Вашингтон" || inp[1].value == "Washington" ){
        result = result+20
     }
     if( inp[2].value == "сеул" || inp[2].value == "Сеул" || inp[2].value == "Seoul" ) {
        result = result+20
     }
     if( inp[3].value == "пекин" || inp[3].value == "Пекин" || inp[3].value == "Beijing" ) {
        result = result+20
     }
   

    document.body.innerHTML = `<h1>${result} ball</h1>`
}


