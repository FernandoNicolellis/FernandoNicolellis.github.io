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
            body.innerHTML = '<div class="surprise-container red"><p> Você é a pessoa certa pra mim, e você é muitooo suficiente aninha </p></div>'
            break;

        case '19/07':
            body.innerHTML = '<div class="surprise-container green"><p> Você fica linda sem maquiagem </p></div>'
            break;

        case '20/07':
            body.innerHTML = '<div class="surprise-container blue"><p> CARALHOOO VOCÊ É MUITOOO ESTILOSAAAA SOCORRO CHORO, amo muito socorro, linda pfta rainha deusa </p></div>'
            break;

        case '21/07':
            body.innerHTML = '<div class="surprise-container yellow"><p> Eita (hoje é dia 14) o S3X0 foi mto bom hj em krl, que abilidade, ai ai, quero mais</p></div>'
            break;

        case '22/07':
            body.innerHTML = '<div class="surprise-container red"><p> Eu ti amu mtu mtu mtu pá sempii minha esposinhaa mtu mtu queru casar e ter filinhos cum voxeee </p></div>'
            break;

        case '23/07':
            body.innerHTML = '<div class="surprise-container blue"><p> Minha cantora rainha canta demais talentosa demais, choro quando ouço você cantar pq népucivi </p></div>'
            break;

        case '24/07':
            body.innerHTML = '<div class="surprise-container green"><p> Espero que esteja tuduuu bem ai no dia 24/07 KADKAKS, ispelu que esteja fazendo altas coisinhasssss, se divertindo mtuuu, upando no val, escrevendo suas histórias geniais e tudu maix </p></div>'
            break;

        case '25/07':
            body.innerHTML = '<div class="surprise-container blue"><p> Atua demais também, LITERALMENTE não consigo diferenciiar. Uma vez ce tava tendo uma aula, fazendo online aqui da minha casa, e uma hora você tava atuando e eu achei que você tava literalmente falando com o prof </div>'
            break;

        case '26/07':
            body.innerHTML = '<div class="surprise-container blue"><p> Você é gatinha mais lindona de todo esse universuuuuu, naum tem ninguém mais ninita que você (só minha gatinha por sinal HAM) </p></div>'
            break;

        case '27/07':
            body.innerHTML = '<div class="surprise-container green"><p> Morrr além daquii, tem que lembrar que também tem us meus papeizinhos, as balinhas, e espero que a esse ponto você JA TENHA COMIDO us pirulitu que u fefe ti deu hammmmm </p></div>'
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
            body.innerHTML = '<div class="surprise-container green"><p> VOCÊ VAI ME VER LOGUINHOOOOOOO AAAAAAAAAAAAAAAAAAA, daqui a pouquinhuu </p></div>'
            break;

        

        case 1: 
            body.innerHTML = '<div class="surprise-container green"><p> Você é suficiente pá mim e pra todo mundo e eu te amo muituu, pá sempi </p></div>'
        case 2:
            body.innerHTML = '<div class="surprise-container green"><p> Fala comiguu podi falar, eu to aqui sempre pra você, pra ajudar você meu amorzinho, pometu. Ti amu mtu. </p></div>'
        
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