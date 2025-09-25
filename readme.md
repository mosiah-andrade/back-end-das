# Projeto Banco Financeiro (API Java + API Node.js)

Este é um projeto de sistema bancário que consiste em dois serviços de backend: um desenvolvido em Java (com Maven/Spring Boot) e outro em Node.js (com TypeScript). Este documento descreve como configurar e executar ambos os projetos em uma nova máquina.

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas na sua máquina:

* **Git:** Para clonar o repositório.
* **Java Development Kit (JDK):** Versão 17 ou superior.
* **Apache Maven:** Versão 3.8 ou superior.
* **Node.js:** Versão 20.x (LTS) ou superior.
* **npm:** (geralmente vem instalado com o Node.js).
* Um editor de código de sua preferência (ex: VS Code, IntelliJ IDEA).

---

## 🚀 Instalação e Configuração

Siga estes passos para configurar o ambiente de desenvolvimento local.

### 1. Clonar o Repositório

Primeiro, clone este repositório para a sua máquina local:

```bash
git clone [https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories)
cd [nome-da-pasta-do-projeto]
```

### 2. Configurar o Backend (Java)

O backend Java é responsável pelo core das operações bancárias.

1.  **Navegue até a pasta do projeto Java** (ajuste o nome da pasta se necessário):
    ```bash
    cd backend-java
    ```

2.  **Instale as dependências com o Maven.** Este comando vai baixar todas as bibliotecas necessárias e compilar o projeto.
    ```bash
    mvn clean install
    ```

3.  **Configure as variáveis de ambiente.** O projeto precisa de um arquivo de configuração para se conectar ao banco de dados e outras configurações.
    * Procure por um arquivo chamado `.env.example` ou `application.properties.example`.
    * Crie uma cópia e renomeie para `.env` ou `application.properties`.
    * Preencha os valores necessários, como URL do banco de dados, usuário e senha.

### 3. Configurar o Backend (Node.js)

O backend Node.js pode ser responsável por serviços auxiliares, autenticação ou uma API Gateway.

1.  **Navegue até a pasta do projeto Node.js** (a partir da raiz do repositório):
    ```bash
    cd ../api-node
    ```

2.  **Instale as dependências com o npm:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente.** Assim como no projeto Java, crie um arquivo `.env` a partir do `.env.example` e preencha as variáveis necessárias (porta do servidor, chaves de API, etc.).

---

## ▶️ Executando os Projetos

Com tudo configurado, você pode iniciar os servidores. Lembre-se de que você precisará de **dois terminais abertos**, um para cada projeto.

### Iniciando o Servidor Java

* **No primeiro terminal**, navegue até a pasta do projeto Java (`backend-java`).
* Execute o projeto usando o plugin do Spring Boot (recomendado para desenvolvimento):

```bash
mvn spring-boot:run
```

O servidor Java estará rodando, geralmente na porta `8080`.

### Iniciando o Servidor Node.js

* **No segundo terminal**, navegue até a pasta do projeto Node.js (`api-node`).
* Execute o servidor em modo de desenvolvimento com reinicialização automática:

```bash
npm run dev
```

O servidor Node.js estará rodando em outra porta (ex: `3000` ou `3333`, conforme configurado).

---
*Documento gerado em 25 de setembro de 2025, no Brasil.*