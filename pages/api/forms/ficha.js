import axios from 'axios';
import { cnpj } from 'cpf-cnpj-validator'; 

/** Default post body exemplo:
{
  "nome": "Teste",
  "email": "teste@gmail.com",
  "cpf_cnpj": "09621200903",
  "empresa": "Onfinity",
  "tag_conversao": "FT_BALACLAVA"
}
*/

export default (req, res) => {
  let nome = req.body.nome
  let email = req.body.email
  let empresa = req.body.empresa
  let cpf_cnpj = req.body.cpf_cnpj
  let tag = req.body.tag_conversao
  
  cpf_cnpj = cpf_cnpj.replace(/\./g, "").replace("/","").replace("-","")
    
  if(cnpj.isValid(req.body.cpf_cnpj.replace(/[^0-9]/g, ''))){
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
        "conversion_identifier": tag,
        "traffic_source": "utm_source",
        "traffic_medium": "SEPTI - ficha técnica",
        "traffic_campaign": "utm_campaign",
        "traffic_value ": "utm_term",
        "name": nome,
        "email": email,
        "cf_cnpj_cpf": cpf_cnpj,
        "company_name": empresa,
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
  } else {
    res.json({
      msg: "CNPJ inválido!"
    })
  }
}