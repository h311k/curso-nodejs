module.exports = (app) => {
    app.set('/', (req, res) => {
        res.render('home/index')
    })
}