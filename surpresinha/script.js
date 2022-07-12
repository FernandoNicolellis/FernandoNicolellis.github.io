const surprise = function (day) {
    const body = document.querySelector(".body")
    switch (day) {
        case '15/07':
            body.innerHTML = '<div class="surprise-container blue"><p> Oiii minha azulzinhaaa gostou do funduu?. Entaumm hoje é o dia que eu fui viajar, VUEI (espero que a gente tenha se visto KKKKK), e é o primeiru que você tá lendo, então vou indroduzir. SIMM podi printar. Os textos nem vão ser textos às vezes vai ser bem pequeninho atée tlg? Então essi foi só o primeiro mesmo. Besão te amo lindona. </p> <div>'
            break;

        case '16/07':
            body.innerHTML = '<div class="surprise-container red"><p> Vermelhu de amor por você <3. Hmmm eu te amo mtoo mtuu táa, naum se esqueça disso nunquinha pufavo. Eu te amo como ngm nunca amou, te amo por inteiro e amo todos os seus defeitos pftos. Você é a minha felicidade meu bemm. Tem muta coisa pa flr mas KKKKKKK. vocee sabi. Besinhu minha rainha estilosa <3 </p> <div>'
            break;

        case '17/07':
            body.innerHTML = '<div class="surprise-container green"><p> Essi verdinho é pra você fica muituuu felixx, SE TIVER TITI EU VOU BATER NESSE TAL DE TITI VOU ARRANCAR ELE DE VOCÊ HAMMM. VOU MATAR ESSE TITI AI, PQ NGM MEXE COM A MINHA NINI. Minha gatinha, só minha, e meu objetivu, minha meta é sempre te fazer a garotinha maisss felixx POSSIVELLLL. (Não vai dar pra escrever tanto assim tlg, em tds) </p> <div>'
            break;

        case '18/07':
            body.innerHTML = '<div class="surprise-container green"><p> Você é a pessoa certa pra mim, e você é muitooo suficiente aninha </p></div>'
            break;

        case '19/07':
            break;

        case '20/07':
            break;

        case '21/07':
            break;

        case '22/07':
            break;

        case '23/07':
            break;

        case '24/07':
            break;

        case '25/07':
            break;

        case '26/07':
            break;

        case '27/07':
            break;

        case '28/07':
            break;

        case '29/07':
            break;

        case '30/07':
            break;

        case '31/07':
            break;

        case '01/08':
            break;

        case '02/08':
            break;

        case '03/08':
            break;

        case '04/08':
            break;

        case '05/08':
            break;

        case 1: 
            body.innerHTML = '<div class="surprise-container green"><p> dasdas     </p></div>'

        
    }
}

const openDay = function (clickDay, titi) {
    const date = new Date()
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');

    const today = day + '/' + month

    if (today == clickDay) {
        surprise(today)
    }
    else if (clickDay == true) {
        surprise(titi)
    }
    else {
        alert("Não é pra roubarrrrrr eu falei")
    }
}

const render = function () {
    const body = document.querySelector(".body")
    body.style.visibility = 'hidden'
    document.body.innerHTML += "<div class=password> <input type=text id=pass placeholder='Senha do site'> <button id='sub'>Entrar</button> </div>"
    
}
render()


document.querySelector("#sub").addEventListener('click', () => {
    const pass = document.querySelector("#pass").value
    
    if (pass == 'ninitutuca96') {
        const body = document.querySelector(".body")
        body.style.visibility = 'inherit'
        document.querySelector(".password").innerHTML = ''
    }
    else {
        alert("Sai daqui INVASOR")
    }
})