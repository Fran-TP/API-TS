import { Router } from 'express'

export const createDiaryRouter = (): Router => {
  const router = Router()

  router.get('/', (_req, res) => {
    res.json({ message: 'fetching all diaries' })
  })

  router.post('/', (_req, res) => {
    res.json({ message: 'creating a diary' })
  })

  router.put('/:id', (_req, res) => {
    res.json({ message: 'updating a diary' })
  })

  router.delete('/:id', (_req, res) => {
    res.json({ message: 'deleting a diary' })
  })

  return router
}
