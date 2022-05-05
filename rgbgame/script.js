var erro = 0
var inter
var clicadas = []
var R
var G
var B
function init() {
    clicadas = []
    document.querySelector("span").innerHTML = '10s'
    erro = 0
    document.querySelector(".lost").style.visibility = 'hidden'
    var time = 10
    inter = setInterval(() => {
        time--;

        document.querySelector("span").innerHTML = time + 's'

        if (time <= 0){
            clearInterval(inter)
            document.querySelector(".container").style.visibility = 'hidden'
            document.querySelector(".win").style.visibility = 'hidden'
            document.querySelector(".lost").style.visibility = 'inherit'

            document.querySelector(".lost").style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')'
            document.querySelector("#result").innerHTML = ""

            document.querySelector("#porque").innerHTML = "Você perdeu por tempo"
            document.querySelector("span").innerHTML = "Tempo acabou"
        }
    }, 1000);

    document.querySelector(".container").style.visibility = 'inherit'
    document.querySelector(".win").style.visibility = 'hidden'
    document.querySelector("#result").innerHTML = ""
    var _pos = 1 + Math.floor(Math.random() * 6)
    globalPos = _pos;
    R = 1 + Math.floor(Math.random() * 255)
    G = 1 + Math.floor(Math.random() * 255)
    B = 1 + Math.floor(Math.random() * 255)
    document.querySelector("#text_introduce").innerHTML = 'Adivinhe a cor rgb(' + R + ', ' + G + ', ' + B + ')'
    function main(pos) {
        document.querySelector("#pos_" + pos).style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')'

        for (var c = 1; c <= 6; c++) {
            if (c != pos) {
                var Rx = 1 + Math.floor(Math.random() * 255)
                var Gx = 1 + Math.floor(Math.random() * 255)
                var Bx = 1 + Math.floor(Math.random() * 255)
                document.querySelector("#pos_" + c).style.backgroundColor = 'rgb(' + Rx + ',' + Gx + ',' + Bx + ')'
            }                  
        }
    }
    main(_pos)

}
init()

function verify(click) {
    if (!clicadas.includes(click)){
        clicadas.push(click)
        if (click == globalPos) {
            clearInterval(inter)
            document.querySelector("span").innerHTML = ''
            if (erro == 0) {
                document.querySelector("#result").innerHTML = "Você acertou de primeira!"
            }
            else if (erro == 1) {
                document.querySelector("#result").innerHTML = "Você acertou, errando uma vez!"
            }
            else {
                document.querySelector("#result").innerHTML = "Você acertou, errando " + erro  + " vezes!"
            }
            
            document.querySelector(".container").style.visibility = 'hidden'
            document.querySelector(".win").style.visibility = 'inherit'
            document.querySelector(".win").style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')'
        }
        if (click != globalPos) {
            document.querySelector("#pos_" + click).style.backgroundColor = 'gray' 
            erro++     
            if (erro == 1) {
                document.querySelector("#result").innerHTML = erro + " erro"
            }
            else if (erro > 1 && erro  <= 3) {
                document.querySelector("#result").innerHTML = erro + " erros"
            }
            else if (erro > 3) {
                document.querySelector("#result").innerHTML = erro + " erros"
                clearInterval(inter)
                document.querySelector("span").innerHTML = ''
                document.querySelector(".container").style.visibility = 'hidden'
                document.querySelector(".win").style.visibility = 'hidden'
                document.querySelector(".lost").style.visibility = 'inherit'
                document.querySelector(".lost").style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')'
                document.querySelector("#porque").innerHTML = 'Você perdeu, pois errou mais de 3 vêzes'
            
            }
            
        }
    }
    
}



