class Bandeira {
    constructor(pais, flag) {
        this.pais = pais
        this.flag = flag
    }
}
const imagensB = [
    /*Brasil*/ 'https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg',
    /*Peru*/ 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/1280px-Flag_of_Peru_%28state%29.svg.png',
    /*América*/ 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
    /*Chile */ 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/2560px-Flag_of_Chile.svg.png',
    /*Paraguai */ 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/255px-Flag_of_Paraguay.svg.png',
    /*Argetina */ 'https://static.significados.com.br/foto/argentina.jpg',
    /*Uruguai*/ 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/255px-Flag_of_Uruguay.svg.png',
    /*Libéria */ 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/255px-Flag_of_Liberia.svg.png',
    /*Croácia */ 'https://s3.static.brasilescola.uol.com.br/be/2022/10/bandeira-da-croacia.jpg',
    /*Iêmen */ 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/255px-Flag_of_Yemen.svg.png',
    /*Rússia */ 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png',
    /*Marrocos */ 'https://s3.static.brasilescola.uol.com.br/be/2022/11/bandeira-do-marrocos.jpg'
]

const listaPaises = [
    new Bandeira('Brasil', imagensB[0]),
    new Bandeira('Peru', imagensB[1]),
    new Bandeira('América', imagensB[2]),
    new Bandeira('Chile', imagensB[3]),
    new Bandeira('Paraguai', imagensB[4]),
    new Bandeira('Argentina', imagensB[5]),
    new Bandeira('Uruguai', imagensB[6]),
    new Bandeira('Libéria', imagensB[7]),
    new Bandeira('Croácia', imagensB[8]),
    new Bandeira('Iêmen', imagensB[9]),
    new Bandeira('Rússia', imagensB[10]),
    new Bandeira('Marrocos', imagensB[11])
]