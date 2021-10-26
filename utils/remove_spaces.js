//Exportando função que remove espaços em branco de uma string
//stringWithSpaces: <string> | Sting para ser sanitizada

export default function removeSpaces(stringWithSpaces) {
    let stringWithoutSpaces =  ''

    //Itera sobre cada caracter de uma string
    for (let i = 0; i < stringWithSpaces.length; i++) {
        const letter = stringWithSpaces[i];

        //Se o caractere for um espaço -> Substitui por nada | Senão -> Não faz nada
        stringWithoutSpaces += letter !== ' ' ? letter : '-'
    }
    
    //Retorna a a string sem espaços
    return stringWithoutSpaces
}