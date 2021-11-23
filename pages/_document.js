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
                <script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/145c79b5-ff57-441d-aede-575e82368a6b-loader.js" ></script>
            </body>
        </Html>
    )
}