module.exports.noticias = (app, req, res) => {
    let connection = app.config.dbConnection()
    let noticiasModel = new app.app.models.NoticiasDAO(connection)
    noticiasModel.getNoticias((err, result) => {
        res.render('noticias/noticias', {noticias: result})
    })

}

module.exports.noticia = (app, req, res) => {
    let connection = app.config.dbConnection()
    let noticiasModel = new app.app.models.NoticiasDAO(connection)
    noticiasModel.getNoticia((err, result) => {
        res.render('noticias/noticia', {noticia: result})
    })
}