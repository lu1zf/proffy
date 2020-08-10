// servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// configuração do nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', { // pasta onde estão os .html
  express: server,
  noCache: true
})

// inicio e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configuração de arquivos estáticos
.use(express.static('public'))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// configuração de porta do servidor local
.listen(5000)