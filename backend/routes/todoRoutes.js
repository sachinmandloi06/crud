const express = require("express")
const { getTodos, addTodo, getTodo, updateTodo, removeTodo } = require("../controllers/todoController")

const router = express.Router()

// Method : GET
// Access : PUBLIC
// Endpoint : /api/todo

router.get("/",getTodos)

// Method : POST
// Access : PUBLIC
// Endpoint : /api/todo
router.post("/",addTodo)

// Method : GET
// Access : PUBLIC
// Endpoint : /api/todo
router.get("/:id",getTodo)

// Method : PUT
// Access : PUBLIC
// Endpoint : /api/todo
router.put("/:id",updateTodo)

// Method : DELETE
// Access : PUBLIC
// Endpoint : /api/todo
router.delete("/:id",removeTodo)

module.exports = router