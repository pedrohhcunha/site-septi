//Definição para sanitizar string
//Recebe a STRING a ser sanitizada
//Retorna a STRING sanitizada

export default function remove_accents(strAccents){

    //Transformar o array de caracteres em uma lista
    let strAccents = strAccents.split('');
    let strAccentsOut = new Array();
    let strAccentsLen = strAccents.length;

    //Caracteres a serem removios
    let accents =    "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";

    //Caracteres para inserir quando um for removido
    let accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";

    //Itera sobre cada item da lista e caso o carctere contenha acento substitui pelo caracter que não tem
    for (let i = 0; i < strAccentsLen; i++) {
        if (accents.indexOf(strAccents[i]) != -1) {
            strAccentsOut[i] = accentsOut.substr(accents.indexOf(strAccents[i]), 1);
        } else
            strAccentsOut[i] = strAccents[i];
    }

    //Transforma o array de caracteres em uma string
    strAccentsOut = strAccentsOut.join('');

    //Retorna a STRING sanitizada
    return strAccentsOut;
}