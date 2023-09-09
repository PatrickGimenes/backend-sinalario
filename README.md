# Backend para o app Sinalário

Este projeto desenvolvido para a disciplina Desenvolvimento de Projetos Web, com o propósito de ser o backend da aplicação sinalário.

O app sinalário será um site que oferece vídeos de como realizar os sinais em libras para que qualquer pessoa possa aprender um pouco mais.


## Rodando localmente

Para executar este projeto basta clonar o repositório:

```
  https://github.com/PatrickGimenes/backend-sinalario.git
  cd points-of-interest
```

Este projeto foi desenvolvido utilizando Nestjs e o gerenciador de pacotes pnpm, caso não tenha nenhum dos dois instalado em sua máquina, bastar executar os seguintes comandos no terminal:

```
  #para instalar o pnpm globalmente
  npm install -g pnpm

  #para instalar o nestjs globalmente
  npm install -g @nestjs/cli
```

Depois inicie o Prisma:

```
  npx prisma generate
```

E por fim inicie o serviço:

```
  pnpm start:dev
```

Caso queria ver a documentação das rotas com o Swagger navegue até a url:
  http://localhost:3000/api

Se preferir usar o Isomnia para testar as rotas basta importar o <a href="https://github.com/PatrickGimenes/backend-sinalario/blob/main/signal-prisma/Insomnia">arquivo</a> no Insomnia.
  
## Aprendizado

Desenvolvendo este projeto aprendi sobre bancos com tabelas relacionais e como implementar a documentação das rotas com o Swagger


## Todo
  Este projeto ainda não está finalizado, algumas das futuras implentações serão:
  
- [ ] Implentar testes unitarios e e2e
- [ ] Implementar rotas para criar, atualizar e deletar sinais
- [ ] Implementar rotas para criar, atualizar e deletar categorias
