<h1 align="center" style="font-weight: bold;">Works-api 💻</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> •
 <a href="#colab">dev</a> •

</p>

<p align="center">
    <b>Um CRUD (Create, Read, Update, Delete) de produtos é uma aplicação que permite gerenciar informações de produtos em um sistema..</b>
</p>

<h2 id="technologies">💻 Technologies</h2>

- Node
- typescript
- Typeorm
- express

<h2 id="started">🚀 Getting started</h2>

Here you describe how to run your project locally

<h3>Prerequisites</h3>

Here you list all prerequisites necessary for running your project. For example:

- [NodeJS](https://nodejs.org/en/download/package-manager)
- [Git 2](https://github.com)
- [Docker](https://www.docker.com/)

<h3>Cloning</h3>

How to clone your project

```bash
git clone git@github.com:erikomis/works-api.git
```

<h3>Config .env variables</h2>

Use the `.env.example` as reference to create your configuration file `.env`

```yaml
# Environment Configuration
NODE_ENV="development" # Options: 'development', 'production'
PORT="9096"            # The port your server will listen on
HOST="localhost"       # Hostname for the server

# CORS Settings
CORS_ORIGIN="http://localhost:5173" # Allowed CORS origin, adjust as necessary

# Rate Limiting
COMMON_RATE_LIMIT_WINDOW_MS="1000" # Window size for rate limiting (ms)
COMMON_RATE_LIMIT_MAX_REQUESTS="20" # Max number of requests per window per IP

# Database Configuration
  DB_TYPE="mssql"
  DB_HOST= "localhost"
  DB_PORT=1433
  DB_USERNAME= "sa"
  DB_PASSWORD= "TodoApiSqlPass123!"
  DB_DATABASE= "work"
```

<h3>Starting</h3>

How to start your project

```bash
cd works-api
docker-compose  up -d 
npm i
npm run dev
```




<h2 id="routes">📍 API Endpoints</h2>

Aqui você pode listar as principais rotas da sua API e quais são os corpos das requisições esperados.

| route                      | description                                                   
|----------------------------|--------------------------------------------------------------
| <kbd>GET /products</kbd>   | lista todos os produtos (veja [detalhes da resposta](#get-products-detail))
| <kbd>GET /products/:id</kbd>| recupera um produto específico (veja [detalhes da resposta](#get-product-detail))
| <kbd>POST /products</kbd>  | cria um novo produto (veja [detalhes da requisição](#post-product-detail))
| <kbd>PUT /products/:id</kbd>| atualiza um produto existente (veja [detalhes da requisição](#put-product-detail))
| <kbd>DELETE /products/:id</kbd>| remove um produto (veja [detalhes da resposta](#delete-product-detail))

<h3 id="get-products-detail">GET /products</h3>

**RESPONSE**
```json
[
  {
    "id": 1,
    "plu": "1234567890123",
    "description": "Produto A",
    "ncm": "1234.56.78",
    "unidade": "un",
    "created_at": "2024-01-01T12:00:00Z"
  },
  {
    "id": 2,
    "plu": "9876543210123",
    "description": "Produto B",
    "ncm": "8765.43.21",
    "unidade": "kg",
    "created_at": "2024-01-02T12:00:00Z"
  }
]
```
<h2 id="colab">🤝 dev</h2>

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/77300089?v=4" width="100px;" alt="erik martinsProfile Picture"/><br>
        <sub>
          <b>Erik Martins</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


