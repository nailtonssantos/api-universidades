# api-universidades
Consumo de API que retorna as universidades de um determinado país, e salvamento no banco de dados Mongo

INSTALAÇÕES NECESSÁRIAS:

- npm install express
- npm install axios
- npm install nodemon --save
- npm install mongodb
- npm install mongoose


MANUAL INSTALAÇÃO MONGO EM AMBIENTE LINUX 
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/



TRY IT NOW!
(POSTMAN OU INSOMNIA)
-----------------------------------------------------------
- LISTAR TODAS AS UNIVERSIDADES SALVAS NO BANCO DE DADOS:
* MÉTODO: GET
localhost:3000/api/universidades/
-----------------------------------------------------------
- LISTAR UMA UNIVERSIDADE SALVA NO BANCO DE DADOS POR ID:
* MÉTODO: GET
localhost:3000/api/universidades/DIGITE_UM_ID

- EX:
localhost:3000/api/universidades/6313b1a0c0c47834db9378c7
-----------------------------------------------------------
- INSERIR UMA NOVA UNIVERSIDADE NO BANCO DE DADOS:
* MÉTODO: POST
localhost:3000/api/universidades/

BODY:
{
   "domains": "algumsite.com.br",
   "alpha_two_code": "BR",
   "country": "Brazil",
   "web_pages": "http://www.algumsite.com.br",
   "name": "NOME DA FACULDADE",
   "state_province": "MT"	
}
-----------------------------------------------------------
- ALTERAR DADOS DE UMA UNIVERSIDADE NO BANCO DE DADOS PELO ID:
* MÉTODO: PUT
localhost:3000/api/universidades/DIGITE_UM_ID

BODY:
{
   "domains": "mudeiosite.com.br",
   "alpha_two_code": "US",
   "country": "Estados Unidos",
   "web_pages": "http://www.mudeiosite.com.br",
   "name": "NOME DA FACULDADE",
   "state_province": "MT"	
}
-----------------------------------------------------------
- ALTERAR UMA UNIVERSIDADE NO BANCO DE DADOS PELO ID:
* MÉTODO: DELETE
localhost:3000/api/universidades/DIGITE_UM_ID
-----------------------------------------------------------