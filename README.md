## Projeto-Full-Stack-Grupo-05

Este projeto é resultado do trabalho conjunto de um grupo de talentosos desenvolvedores, cada um contribuindo com sua expertise para criar uma plataforma full stack para venda de carros, permitindo anúncios e compras. A equipe é composta por Djefferson Wallcy, Jorge Sousa, Leonardo Cunha, Marina Guimarães, Matheus Theodoro, Pedro Henrique e Ranier Dias.

## Estrutura do Projeto Full Stack

O Projeto Full Stack foi organizado em dois diretórios principais:

/backend: Este diretório contém todos os arquivos relacionados ao servidor e à lógica do backend. Aqui, você encontrará:

/src: O código-fonte do backend, com os seguintes subdiretórios:

/controllers: Responsável por conter os controladores que lidam com as requisições HTTP e a lógica de negócio da aplicação.

/routes: Contém as rotas da API que definem os endpoints e as ações correspondentes.

server.js: O arquivo principal que inicia o servidor e configura as dependências necessárias para o funcionamento da aplicação.

/frontend: Este diretório contém todos os arquivos relacionados à interface do usuário e à lógica do frontend. 

## As principais tecnologias usadas no projeto incluem:

Express: Um framework web para Node.js que simplifica a criação de servidores e gerenciamento de rotas.

TypeScript: Uma linguagem que adiciona tipagem estática ao JavaScript, garantindo maior segurança e facilitando a manutenção do código.

React: Uma biblioteca JavaScript para criar interfaces de usuário interativas e reativas, proporcionando uma experiência mais dinâmica e fluida.

Axios: Uma biblioteca que facilita o envio de requisições HTTP do frontend para o backend, aprimorando a comunicação entre as partes.

Zod: Uma biblioteca TypeScript para validar e garantir a integridade dos dados recebidos pelo servidor, evitando erros e vulnerabilidades.

Styled-components: Uma biblioteca que permite estilizar os componentes React através de CSS-in-JS, proporcionando um desenvolvimento mais organizado e modular.

SQLite3: Um banco de dados leve e embutido, ideal para projetos menores e testes locais.

TypeORM: Uma ferramenta de mapeamento objeto-relacional (ORM) que facilita a interação com o banco de dados, tornando as operações de banco de dados mais simples e intuitivas.

Bcryptjs: Uma biblioteca para criptografar senhas, aumentando a segurança das informações dos usuários.

## Executando a Aplicação

Para executar a aplicação, siga os seguintes passos:

-Clone o repositório usando o comando:

"git clone git@github.com:Projeto-Full-Stack-Grupo-05/Projeto-Full-Stack-Grupo-05.git"

-Crie um banco de dados no PostgreSQL (psql).

-Crie um arquivo ".env" na raiz do diretório "backend" e configure-o conforme o exemplo fornecido no arquivo ".env.exemplo" dentro do mesmo diretório.

-No diretório "backend", instale as dependências com o comando:
"npm install"

-Antes de iniciar o projeto, execute as migrações com os seguintes comandos:
"npm run typeorm migration:generate src/migrations/MigrationName -- -d src/data-source"
"npm run typeorm migration:run"

-Após a execução das migrações, inicie o projeto com o comando:
"npm run dev"

O Projeto Desafio Full Stack é uma oportunidade empolgante para vivenciar uma experiência completa de desenvolvimento web, utilizando tecnologias de ponta e desenvolvendo um site funcional e atraente. Com essas habilidades adquiridas, você estará preparado para enfrentar desafios futuros no mundo do desenvolvimento de software Full Stack. Este projeto é resultado do trabalho árduo e colaborativo de Djefferson Wallcy, Jorge Sousa, Leonardo Cunha, Marina Guimarães, Matheus Theodoro, Pedro Henrique e Ranier Dias, e representa um marco significativo em suas jornadas como desenvolvedores.
