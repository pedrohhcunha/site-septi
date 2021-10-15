export default function removeSpaces(stringWithSpaces) {
    let stringWithoutSpaces =  ''
    for (let i = 0; i < stringWithSpaces.length; i++) {
        const letter = stringWithSpaces[i];
        stringWithoutSpaces += letter !== ' ' ? letter : '-'
    }
    
    return stringWithoutSpaces
}