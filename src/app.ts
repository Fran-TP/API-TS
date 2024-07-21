import express from 'express'
import { createDiaryRouter } from './routes/diaries'

const app = express()

app.use(express.json())

app.disable('x-powered-by')

// routers
app.use('/api/v1/diaries', createDiaryRouter())

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
