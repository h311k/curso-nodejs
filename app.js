const app = require('./config/server')
const rotaNoticias = require('./app/routes/noticias')(app)
const rotaHome  = require('./app/routes/home')(app)
const rotaFormularioIncusaoNoticia  = require('./app/routes/formulario_inclusao_noticia')(app)

app.listen(80, () => {
    console.log('servidor rodando')
})