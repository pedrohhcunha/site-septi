//Criação de um novo templete de document para a inserção da linguagem do html

//Importando os componentes necessários
import { Head, Html, Main, NextScript } from 'next/document'

//Criando o componente
export default function Document () {

    //Retornando o JSX do componente
    return (

        //Definindo a linguagem do Html e recriando a estrutura padrão
        <Html lang="pt-br">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}