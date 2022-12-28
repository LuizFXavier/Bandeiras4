options[0].addEventListener('click', (e) => {

    if (!clicavel[0]) {return}

    if (valoresOption[0] == oCerta[rodada]) {
        console.log('Polishop')
        acerto()
    } else {
        console.log('Falha')
        erro(0);
    }
})

options[1].addEventListener('click', (e) => {

    if (!clicavel[1]) {return}

    if (valoresOption[1] == oCerta[rodada]) {
        console.log('Shopee')
        acerto()
    } else {
        console.log('Falha2')
        erro(1);
    }
})

options[2].addEventListener('click', (e) => {

    if (!clicavel[2]) {return}

    if (valoresOption[2] == oCerta[rodada]) {
        console.log('Shopee')
        acerto()
    } else {
        console.log('Falha2')
        erro(2);
    }
})

options[3].addEventListener('click', (e) => {

    if (!clicavel[3]) {return}

    if (valoresOption[3] == oCerta[rodada]) {
        console.log('Shopee')
        acerto()
    } else {
        console.log('Falha2')
        erro(3);
    }
})