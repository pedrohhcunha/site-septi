import axios from 'axios';

/** Default post body exemplo:
{
  "nome": "Teste",
	"email": "teste@gmail.com",
	"empresa": "Onfinity",
	"endereco": "Av. Porto Alegre, Chapecó",
	"telefone": "49999999999",
	"produto_interesse": "Aventais para procedimentos",
	"quantidade_desejada": "100",
	"cpf_cnpj": "09621200903",
	"observacoes": "Apenas um teste. Favor desconsiderar"
}
*/

export default (req, res) => {
    let nome = req.body.nome
    let email = req.body.email
    let empresa = req.body.empresa
    let endereco = req.body.endereco
    let telefone = req.body.telefone
    let cpf_cnpj = req.body.cpf_cnpj
    let produto_interesse = req.body.produto_interesse
    let quantidade_desejada = req.body.quantidade_desejada
    let observacoes = req.body.observacoes
    
    axios.post(process.env.RD_API_URL + '/auth/token', 
    {  
        "client_id": process.env.RD_CLIENT_ID,
        "client_secret": process.env.RD_CLIENT_SECRET,
        "refresh_token": process.env.RD_REFRESH_TOKEN
    })
    .then(response => {
      let access_token = response.data.access_token
      let config = {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
      axios.post(process.env.RD_API_URL + '/platform/events',{
      "event_type": "CONVERSION",
      "event_family":"CDP",
      "payload": {
        "conversion_identifier": "formulario-de-qualificacao-azeplast-duplicado",
        "traffic_source": "Septi | Formulário de contato",
        "traffic_medium": "cpc",
        "traffic_value": "Septi | Formulário de contato",
        "name": nome,
        "email": email,
        "job_title": "Contato",
        "cf_endereco": endereco,
        "personal_phone": telefone,
        "cf_cnpj_cpf": cpf_cnpj,
        "company_name": empresa,
        "cf_produto_de_interesse": produto_interesse,
        "cf_quantidade_desejada": quantidade_desejada,
        "cf_observacoes": observacoes,
        "tags": ["septi", "2021"],
        "available_for_mailing": true
      }
      }, config).
      then(formulario => {
        if(formulario.data.hasOwnProperty('event_uuid')){
          res.json({msg: 'success'})
        } else {
          res.json({msg: 'error', error:formulario.data})
        }
      })
    });
}