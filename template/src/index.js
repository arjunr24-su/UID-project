const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const templatePath = path.join(__dirname, "../template");
const { CarPreference, collection } = require('./mongodb'); // Import both models
const publicPath = path.join(__dirname, "../public");



// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', "hbs");
app.set('views', templatePath);

// Routes
app.get("/", (req, res) => {
    res.render('login');
});
app.get("/chatbot", (req, res) => {
    res.render('chatbot');
});
app.get("/car", (req, res) => {
    res.render('car');
});
app.get("/add_confirm", (req, res) => {
    res.render('add_confirm');
});

app.get("/welcome", (req, res) => {
    res.render('welcome');
});
app.get("/interior", (req, res) => {
    res.render('interior');
});
app.get("/login", (req, res) => {
    res.render('dummy2');
});
app.get('/test-image', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/images/example.jpg'));
});

app.get("/carpreference", (req, res) => {
    res.render('carpreference');
});

app.get("/signup", (req, res) => {
    res.render('signup');
});

app.get("/Gallery", (req, res) => {
    res.redirect('/Gallery');
});

app.get("/dummy2", (req, res) => {
    res.render('dummy2');
});

app.post("/signup", async (req, res) => {
    try {
        const data = {
            Email: req.body.email,
            password: req.body.password
        };
        const newUser = new collection(data); // Create new user
        await newUser.save(); // Save user to database
        res.redirect('/dummy2');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});


app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await collection.findOne({ Email: email });
        if (!user) {
            return res.send("Invalid username");
        }

        // Debug statements to check password comparison
        console.log("Stored password:", user.password);
        console.log("Input password:", password);

        // Validate password
        if (user.password !== password) {
            return res.send("Incorrect password");
        }

        // Authentication successful
        res.render('dummy2');
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Error logging in');
    }
});

app.get('/dummy2', (req, res) => {
    res.render('dummy2');
});
app.get('/aboutus', (req, res) => {
    res.render('aboutus')
});
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/script.js'));
});
app.get('/email.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/email.js'));
});
// app.get('/chat.js', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/chat.js'));
// });
app.get('/chats.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/chats.js'));
});

// Handle POST request for /carpreference
app.post('/carpreference', async (req, res) => {
    try {
        const Data = {
            carBrand: req.body.carBrand,
            carType: req.body.carType,
            seats: req.body.seats,
            fuel: req.body.fuel,
            color: req.body.color,
            mileage: req.body.mileage,
            power: req.body.power
        };

        const carPreference = new CarPreference(Data);
        await carPreference.save();

        res.render('dummy2', { message: 'Car preference saved successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});
app.get('/Footer', (req, res) => {
    res.sendFile(path.join(__dirname, '..my-app\src\Footer.jsx'));
});
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
