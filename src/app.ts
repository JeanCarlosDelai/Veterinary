import express from 'express'
import Router from './routes/Router'
import notFound from './middleware/not-found'
import errorHandlerMiddleware from './middleware/error-handler'

const app = express()

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', Router)

app.use(notFound)
app.use(errorHandlerMiddleware)

export default app
