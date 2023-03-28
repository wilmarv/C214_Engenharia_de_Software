# Exercicio avaliativo de teste unitario com mock

## Descrição do projeto

O projeto consiste em uma classe que simula uma requisição http ao site do Inatel para popular e visualizar horários de atendimento dos professores. A classe oferece métodos para adicionar, buscar, editar e deletar horários de atendimento dos professores, além de métodos para listar todos os horários de atendimento cadastrados.

## Como executar o projeto

Para executar o projeto, siga os seguintes passos:

### Instalação do Node.js e gerenciador de pacotes

#### Windows

1.Acesse o site oficial do Node.js (https://nodejs.org/) e faça o download do instalador compatível com a sua versão do Windows.

2.Execute o instalador e siga as instruções do assistente.

3.Abra o prompt de comando (pressione as teclas Win+R, digite cmd e pressione Enter).

4.Para instalar o gerenciador de pacotes npm, execute o comando: npm install npm@latest -g.

5.Para instalar o gerenciador de pacotes yarn, execute o comando: npm install -g yarn.

#### macOS

1. Execute o comando:

````
brew install node
````
2. Para instalar o gerenciador de pacotes npm, execute o comando:

````
sudo npm install npm@latest -g
````
3. Para instalar o gerenciador de pacotes yarn, execute o comando:

````
brew install yarn
````

### Instalação das dependências

Após instalar o Node.js e o gerenciador de pacotes, acesse a pasta raiz do projeto pelo terminal e execute o comando:

````
npm install
````

ou 

````
yarn 
````
Isso irá instalar todas as dependências do projeto.

### Executando os testes

Para executar os testes do projeto, basta executar o comando:

```
npm test 
```
ou 
````
yarn test
````

Este comando irá executar todos os testes definidos na pasta __tests__ e exibir o resultado no terminal.
