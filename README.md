# MicroBlog-challenge
MicroBlog made using nodejs to build API and React (Express & PostgreSQL)


## Start the project

 - git clone git@github.com: Maiconjss / MicroBlog-challenge.git
 - npm i

 - generate the tables in the database: npx sequelize-cli db: migrate

 note: you need to have postgreSQL installed, what was used in the project is version 12.5

 If you have questions about setting up the bank, follow this step by step with chocolatey: https://github.com/DevPio/bootcamp-launchbase-05/blob/master/docs/guia-instalacao-postgres.md

## Development

1 - An API was built with express and its due routes,
 All routes are in full operation, if you have any questions, make a PR, the project will be optimized soon.

2 - Authentication service used was Auth0, a free and secure authentication service. The USERS table was created in the bank and the api is OK, for having difficulties with the node passport, I used this solution so as not to be without authentication .

3 - Docker image yet to be assembled.

