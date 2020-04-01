module.exports.formulario_inclusao_noticia = (app, req, res) => {
    res.render('admin/form_add_noticia', {validacao:''})
}

module.exports.noticias_salvar = (app, req, res) => {
    let noticia = req.body
        
        req.assert('titulo', 'Título é obrigatório').notEmpty()
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100)
        req.assert('autor', 'Autor é obrigatório').notEmpty()
        req.assert('data_noticia', 'Data é obrigatório').notEmpty()
        req.assert('noticia', 'Notícia é obrigatório').notEmpty()

        let err = req.validationErrors()

        if(err) {
            res.render('admin/form_add_noticia', {validacao:err , noticia})
            return
        } 

        let connection = app.config.dbConnection()
        let noticiasModel = new app.app.models.NoticiasDAO(connection)
        noticiasModel.salvarNoticia(noticia, (err, result) => {
            res.redirect('/noticias')
        })
}