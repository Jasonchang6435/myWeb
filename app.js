const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const session = require('cookie-session')
const cors = require('cors')
const cookieParser = require('cookie-parser')

// 
const { log, chalk } = require('./utils')
const { secretKey } = require('./config')

// 
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false,
}))
app.use(bodyParser.json())
app.use(cookieParser())
// 设置 session, 这里的 secretKey 是从 config.js 文件中拿到的
app.use(session({
    secret: secretKey,
    name: 'session',
    keys: [secretKey /* secret keys */],
    // Cookie Options
    //24 hours
    maxAge: 24 * 60 * 60 * 1000
}))
nunjucks.configure('templates', {
    autoescape: true,
    express: app,
    noCache: true,
})
// const asset = __dirname + '/static'
// app.use('/static', express.static(asset))
app.use(express.static('static'))

// router
// const topic = require('./routes/topic')
// const reply = require('./routes/reply')
const index = require('./routes/index')

// 使用 app.use(path, route) 的方式注册路由程序
app.use('/', index)
// app.use('/topic', topic)
// app.use('/reply', reply)
// const apiTopic = require('./api/topic')
// app.use('/api/topic', apiTopic)

app.use((request, response,next) => {
    const r = response.status(404)
    r.render('error/404.html')
})

app.use((error, request, response,next) => {
    // console.error(error.stack)
    log(chalk.white.bgBlack.bold(`error.stack`, error.stack))
    const r = response.status(500)
    r.render('error/500.html')
})

const run = (port=3000, host='') => {
    const server = app.listen(port, host, () => {
        const address = server.address()
        host = address.address
        port = address.port
        log(chalk.yellow.bgRed.bold(`listening server at http://${host}:${port}`))
        // log(`listening server at http://${host}:${port}`)
    })
}

if (require.main === module) {
    const port = 8000
    const host = '0.0.0.0'
    run(port, host)
}