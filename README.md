# MicroBlog-challenge
MicroBlog feito utilizando nodejs para construção da API e React ( Express &amp; PostgreSQL ) 


## Starte o projeto

 - git clone git@github.com:Maiconjss/MicroBlog-challenge.git
 - npm i

 - gerar as tabelas no banco de dados : npx sequelize-cli db:migrate

 obs: você precisa ter o postgreSQL instalado, o que foi usado no projeto é a versão 12.5

 Caso tenha dúvidas sobre configurar o banco siga este passo a passo com o chocolatey: https://github.com/DevPio/bootcamp-launchbase-05/blob/master/docs/guia-instalacao-postgres.md

## Desenvolvimento

1 - Foi construída uma API com express e suas devidas rotas,
 Todas as rotas estão em pleno funcionamento, qualquer dúvida faça um PR, o projeto será otimizado em breve.

2 - Serviço de autenticação usado foi o Auth0, um serviço de autenticação gratuito e seguro, A tabela de USERS foi criada no banco e a api está OK, por ter tido dificuldades com o passport do node utilizei essa solução para não ficar sem a autenticação.

3 - Imagem em docker ainda para ser montada.


