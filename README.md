## Motors Shop - Grupo 05
## Descrição
O Motors Shop - Grupo 05 é uma plataforma completa para a compra e venda de veículos. Este projeto consiste em uma aplicação web que oferece uma experiência de usuário intuitiva e eficiente.

## Principais Características:

Pesquise e navegue por uma ampla variedade de veículos, com filtros para encontrar exatamente o que você procura.
Crie uma conta ou faça login para gerenciar seus anúncios de veículos para venda.
Comentários habilitados nos anúncios.
Estrutura do Projeto
O Projeto Full Stack foi organizado em dois diretórios principais:

## Backend
backend: Este diretório contém todos os arquivos relacionados ao servidor e à lógica do backend.

src: O código-fonte do backend, com os seguintes subdiretórios:

controllers: Responsável por conter os controladores que lidam com as requisições HTTP e a lógica de negócio da aplicação.
routes: Contém as rotas da API que definem os endpoints e as ações correspondentes.
server.js: O arquivo principal que inicia o servidor e configura as dependências necessárias para o funcionamento da aplicação.
Frontend
frontend: Este diretório contém todos os arquivos relacionados à interface do usuário e à lógica do frontend.
Tecnologias Utilizadas
As principais tecnologias usadas no projeto incluem:

## Backend:

Express: Um framework web para Node.js que simplifica a criação de servidores e gerenciamento de rotas.
TypeScript: Uma linguagem que adiciona tipagem estática ao JavaScript, garantindo maior segurança e facilitando a manutenção do código.
TypeORM: Uma ferramenta de mapeamento objeto-relacional (ORM) que facilita a interação com o banco de dados, tornando as operações de banco de dados mais simples e intuitivas.
Bcryptjs: Uma biblioteca para criptografar senhas, aumentando a segurança das informações dos usuários.
Outras bibliotecas como json, cors, dotenv, express-async-errors, jsonwebtoken, lodash, mailgen, nodemailer, pg, reflect-metadata, uuid e zod também foram utilizadas.

## Frontend:

React: Uma biblioteca JavaScript para criar interfaces de usuário interativas e reativas, proporcionando uma experiência mais dinâmica e fluida.
Axios: Uma biblioteca que facilita o envio de requisições HTTP do frontend para o backend, aprimorando a comunicação entre as partes.
Styled-components: Uma biblioteca que permite estilizar os componentes React através de CSS-in-JS, proporcionando um desenvolvimento mais organizado e modular.

## Executando a Aplicação
Para executar a aplicação, siga os seguintes passos:

Clone o repositório usando o comando:


git clone git@github.com:Projeto-Full-Stack-Grupo-05/Projeto-Full-Stack-Grupo-05.git
Crie um banco de dados no PostgreSQL (psql).

Crie um arquivo .env na raiz do diretório backend e configure-o conforme o exemplo fornecido no arquivo .env.exemplo dentro do mesmo diretório.

No diretório backend, instale as dependências com o comando:
npm install

Antes de iniciar o projeto, execute as migrações com os seguintes comandos:

npm run typeorm migration:generate src/migrations/MigrationName -- -d src/data-source
npm run typeorm migration:run -- -d ./src/data-source

Após a execução das migrações, inicie o projeto com o comando:
npm run dev

A aplicação estará acessível em http://localhost:3000.

## Rotas: 

## Usuários:

Criação de Usuário
Rota: POST /user

Obter um Único Usuário por ID
Rota: GET /user/:id
Obter Todos os Usuários

Rota: GET /user
Atualização de Usuário por ID

Rota: PATCH /user/:id
Exclusão de Usuário por ID

Rota: DELETE /user/:id

## Login:

Rota de Login (POST)
Rota: /login

## Anúncios:

Rota: POST /sales
Obter um Único Anúncio por ID

Rota: GET /sales/:id
Atualização de Anúncio por ID

Rota: PATCH /sales/:id
Exclusão de Anúncio por ID

Rota: DELETE /sales/:id
Obter Todos os Anúncios

Rota: GET /sales

## Endereço:

Atualização de Endereço por ID
Rota: PATCH /address/:id


## Comentários:

Criação de Comentário
Rota: POST /comments
Obter Todos os Comentários

Rota: GET /comments
Obter os Comentários de um Único Anúncio

Rota: GET /sales/:id/comments
Obter um Único Comentário por ID

Rota: GET /comments/:id
Atualização de Comentário por ID

Rota: PATCH /comments/:id
Exclusão de Comentário por ID

Rota: DELETE /comments/:id
Contribuidores

## Este projeto foi desenvolvido pelo Grupo 05 e contou com a colaboração dos seguintes membros:

Djefferson Wallacy
Jorge Sousa
Leonardo Cunha
Marina Guimarães
Matheus Theodoro
Pedro Henrique Barros
Ranier Dias
