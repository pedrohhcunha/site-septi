import formidable from 'formidable'

//set bodyparser
export const config = {
    api: {
      bodyParser: false
    }
}

export default async (req, res) => {  
  let nodemailer = require('nodemailer')
  const data = await new Promise((resolve, reject) => {
    const form = formidable()
    form.parse(req, (err, fields, files) => {
      if (err) reject({ err })
      resolve({ err, fields, files })
    }) 
  })

  console.log(data)
  let extensao = data.files.image.originalFilename.split('.')[1]

  if(data.files.image.size > 10000000){
    console.log("Arquivo superior a 10MB ->", data.files.image.size / 1024 + "MB")
    res.json({
      success: false,
      mensage: 'Arquivo superior a 10MB'
    })
  } 

  else if(extensao != 'pdf' && extensao != 'doc' && extensao != 'docx'){
    console.log("Arquivo com extensao inválida ->", extensao)
    res.json({
      success: false,
      mensage: 'Extensão de arquivo inválida'
    })
  }

  else {
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
        to: 'carlos.giongo@onfinity.com.br',
        subject: `SEPTI - ${data.fields.vaga}`,
        attachments: [{
          filename: data.files.image.originalFilename,
          path: data.files.image.filepath
        }],
        text: `
          Nome: ${data.fields.nome}
          Email: ${data.fields.email}
          Mensagem: ${data.fields.mensagem}
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

}