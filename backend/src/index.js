/**rotas são endereços adicionais do endereço principal
 * ex. www.omnistack.com
 *     www.omnistack.com/users
 *
 */
const express = require("express"); //importando o express para a variavel express
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();

mongoose.connect(
  "mongodb+srv://cleitonm:qwerty123@cluster0.jaisdtn.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());
app.use(express.json()); //deve vir antes das rotas
app.use(routes);

app.listen(3333);

/** Metodos HTTP
 * GET, - listar, buscar informações
 * POST, - criar informações
 * PUT, - quero editar alguma informação
 * DELETE - quero excluir uma informação
 */

/** Tipos de parametros
 * query: request.query (filtros, ordenação, paginação) usados no GET
 * route: request.params (identificar um recurso na alteração ou remoção)
 * body: request.body (dados para criação ou alteração de um registro)
 */

//MongoDB (DB não relacional)

/** Para deixarmos o servidor ser sensivel as alterações precisamos instalar o nodemon no terminal
 * yarn add nodemon -D
 */
