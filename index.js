const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require('./data/course.json');
const course = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('course api running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) =>{
    console.log(req.params.id)
    const id = req.params.id;
    const selectedCourse = courses.find( c => c._id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Webscholar server running on port', port)
});