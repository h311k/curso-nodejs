module.exports = (app) => {
    
    app.get('/noticia', (req, res) => {
        let connection = app.config.dbConnection()
        let noticiasModel = app.app.models.noticiasModel
        noticiasModel.getNoticia(connection, (err, result) => {
            res.render('noticias/noticia', {noticia: result})
        })
    })
}