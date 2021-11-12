export default (req, res) => {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: process.env.NM_PORT,
        host: process.env.NM_HOST,
        auth: {
            user: process.env.NM_EMAIL,
            pass: process.env.NM_PASSWORD,
        },
        secure: true,
    });

    const mailData = {
        from: 'tecnologia@onfinity.com.br',
        to: 'pedro.cunha@onfinity.com.br',
        subject: `SEPTI - ${req.body.vaga}`,
        attachments: [{
            filename: "nome",
            contents: "FILE"
        }],
        text: `
            Nome: ${req.body.nome}
            Email: ${req.body.email}
            Mensagem: ${req.body.mensagem}

        `
    }

    transporter.sendMail(mailData, error => {
        if(error){
            res.json({
                success: false,
                mensage: 'Email não enviado!'
            })
            return console.log("Falha no envio de email:", error)
        } else {
            res.json({
                success: true,
                mensage: 'Candidato cadastrado com sucesso!'
            })
            return console.log("Candidato cadastrado com sucesso!")
        }
    })
}