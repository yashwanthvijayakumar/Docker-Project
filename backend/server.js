// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // Set up express app
// const app = express();

// // CORS configuration (allow all origins)
// app.use(cors({ origin: '*' }));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());  // Support JSON-encoded bodies

// // Connect to MongoDB
// mongoose.connect('mongodb://mongo:27017/formData', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Error connecting to MongoDB:', err));

// // Create schema and model for form data
// const formSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     message: { type: String, required: true }
// });

// const Form = mongoose.model('Form', formSchema);

// // API to handle form submission (POST request)
// app.post('/submit', async (req, res) => {
//     console.log('Received POST request on /submit');
//     console.log('Request Body:', req.body);

//     try {
//         const newForm = new Form({
//             name: req.body.name,
//             email: req.body.email,
//             message: req.body.message,
//         });

//         await newForm.save();
//         console.log('Form data saved successfully');
//         res.status(200).json({ message: "Form data saved successfully", data: newForm });
//     } catch (err) {
//         console.error('Error saving form data:', err);
//         res.status(500).json({ error: "Error saving form data", details: err.message });
//     }
// });

// // Route to handle GET request at /
// app.get('/', (req, res) => {
//     res.send("Welcome to the backend server! Use the POST /submit route to submit data.");
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });

// app.get('/submissions', async (req, res) => {
//     try {
//         const forms = await Form.find();  // Fetch all form submissions
//         res.status(200).json(forms);      // Return the data as JSON
//     } catch (err) {
//         console.error('Error retrieving submissions:', err);
//         res.status(500).send('Error retrieving submissions');
//     }
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Set up express app
const app = express();

// CORS configuration (allow all origins)
app.use(cors({ origin: '*' }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  // Support JSON-encoded bodies

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/formData', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Create schema and model for form data
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Form = mongoose.model('Form', formSchema);

// API to handle form submission (POST request)
app.post('/submit', async (req, res) => {
    try {
        const newForm = new Form({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });

        await newForm.save();
        res.status(200).send("Form data saved successfully");
    } catch (err) {
        console.error('Error saving form data:', err);
        res.status(500).send("Error saving form data");
    }
});

// API to retrieve all form submissions (GET request)
app.get('/submissions', async (req, res) => {
    try {
        const forms = await Form.find();  // Retrieve all form submissions from MongoDB
        res.status(200).json(forms);      // Return the data as a JSON response
    } catch (err) {
        console.error('Error retrieving submissions:', err);
        res.status(500).send('Error retrieving submissions');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
