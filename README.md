# Teste Fullstack - Luís Ferreira

Primeiramente quero agradecer a oportunidade de mostrar do que sou capaz e de conhecer um pouco mais a Uhuu!; infelizmente até o presente momento não consegui terminar a aplicação, tive alguns contratempos pessoais e problemas com algumas ferramentas que acabaram resultando na entrega incompleta, porém, apesar do prazo ter se encerrado pretendo concluir a aplicação, curti muito o desafio que me proporcionou novos conhecimentos sobre geocoding e maps e um teste fullstack dos meus conhecimentos.

## Execução do Projeto Localmente

### Frontend

O Frontend construído em Next.js pode ser executado localmente por meio dos comandos abaixo:

- Acessar a pasta `/frontend`;
- Instalar o projeto executando `npm install`;
- Executar o comando `npm run dev` e acessar o projeto em [http://localhost:3000/](http://localhost:3000/).

### Backend

O Backend construído em Nest.js pode ser executado localmente por meio dos comandos abaixo:

> Infelizmente meu sistema operacional conflitou com o docker e não consegui testar corretamente o docker-compose e a Dockerfile criada, isso me desapontou mas corrigirei o problema do docker e assegurarei que o compose esteja funcional! Já que o docker está inconsistente deixarei as instruções para executar o projeto localmente.

- Acessar a pasta `/backend`;
- Instalar o projeto executando `npm install`;
- Executar o comando `npm run start:dev` e a api estará disponível em [http://localhost:3501/](http://localhost:3501/);
- A documentação dos endpoints estará disponível em [http://localhost:3501/api](http://localhost:3501/api).

## Pontos Concluídos

- Criação do Backend;
- Estruturação dos dados no banco de dados;
- Integração com o Swagger e listagem de endpoints;
- Criação do Frontend;
- Integração com geocoding para coletar dados de endereço;
- Integração com o Google maps para visualização do mapa;
- Criação de ambiente Docker para deploy (em teste).

## Pontos Pendentes

- Criação de endpoints faltantes (DELETE dos dados);
- Complementar a documentação no swagger;
- Assegurar a funcionalidade do ambiente Docker;
- Integração do frontend com o backend (consumo dos endpoints);
- Tabela para visualização dos dados.
- Tratativas de erros.

## Conclusão e Escolhas de Ferramentas

Curti muito essa ideia de projeto e apesar de estar incompleta nesse momento pretendo tirar mais dois dias para finalizar e testar, me diverti no processo e demorei um pouco para me habituar com as apis do google maps além do erro no docker que enfrentei ter sido frustrante e não tinha ocorrido anteriormente.

Utilizei Nest.js no Backend por já estar habituado com o framework opinado e julgo ter uma boa estruturação além de dar uma base caso o projeto escalasse; junto ao Nest.js utilizei Prisma para conexão com o banco de dados, é um ORM que é continuamente atualizado e tem uma ótima experiência de desenvolvimento.

No Frontend optei por utilizar o React com o Next.js também por estar habituado e gostar do framework (apesar de não ter utilizado suas funcionalidades Backend) juntamente com o Sass para estilização.
