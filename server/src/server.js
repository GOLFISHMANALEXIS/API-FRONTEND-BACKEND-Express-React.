const express = require('express')
const app = express()
const PORT = 5000;

app.get('/hello', (req, res) => {
   res.json({"Hola mundo APi de Alexis": ["Datos","Estudiante de preparatoria BUAP", "16 años", "Full-developer"]})
})

app.get("/api", (req, res) => {
   res.json({"users": ["userOne","userTwo", "userThree" ]})
})


app.listen(
   PORT,
   () =>
    console.log(`Click en el enlace: http://localhost:${PORT}`)
)