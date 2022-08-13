import { Router } from "express";
import { createBook, deleteBook, getAllBooks, getBooksByGenre } from "../services/books.services.js";

const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await getAllBooks()
    res.json({
      message:'all books retrived',
      Books:result.rows
    })
  } catch (err) {
    res.status(500).json({
      message:'internal system error',
      Error: err
    })
  }
})

router.get('/:genre', async (req, res) => {
  try {
    const result = await getBooksByGenre(req.params.genre)
    res.json({
      message: 'book is retrived',
      book: result.rows
    })
  } catch (err) {
    res.status(500).json({
      message:'internal system error',
      Error: err
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const {name, author, genre, since} = req.body
    await createBook(name, author, genre, since)
    res.json({
      message:'book is retrived',
      
    })
  } catch (err) {
    res.status(500).json({
      message:'internal system error',
      Error: err
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const result = await deleteBook(req.params.id)
    res.json({
      message: 'book is deleted',
      book: result.rows
    })
  } catch (err) {
    res.status(500).json({
      message:'internal system error',
      Error: err
    })
  }
})



export default router
