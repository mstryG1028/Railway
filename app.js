
const express = require("express");
const app = express();
const port = 3456;
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const UserKurla = require("./src/models/user");
const DataKurla = require("./src/models/formdata");


require("./src/db/conn");

app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use('/videos', express.static(__dirname + "/videos"));
app.use("/images", express.static("images"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));



app.set("view engine", "ejs");
app.engine('ejs', ejsMate);





app.get("/home", (req, res) => {
    res.render("home.ejs");
});
app.get("/home/login", (req, res) => {
    res.render("login.ejs")
})
app.get("/home/register", (req, res) => {
    res.render("register.ejs");
})

app.get("/home/dataform", (req, res) => {
    res.render("dataform.ejs");
})
app.get("/home/dashboard", async (req, res) => {
    try {
        // Fetch all data from the DataKurla collection
        const data = await DataKurla.find();
        // Render the dashboard.ejs page and pass the data to it
        res.render("dashboard.ejs", { data });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching data");
    }
});


app.post("/home/dataform", (req, res) => {
    const { unitNo, coachNo, coachType, commisionDate, POHDate, IADate, TIDate, ICDate, USTDate, WashingDate } = req.body;

    const newdatakurla = new DataKurla({
        unitNo,
        coachNo,
        coachType,
        commisionDate,
        POHDate,
        IADate,
        TIDate,
        ICDate,
        USTDate,
        WashingDate

    });

    newdatakurla.save()
        .then(() => {
            res.render("home.ejs")
        })
        .catch((err) => {
            res.status(500).send("Error registering user: " + err.message);
        });
});




app.post("/home/login", (req, res) => {
    const { username, password } = req.body;
    console.log(password)
    res.render("dashboard.ejs");
})


app.get("/home/videos", (req, res) => {
    res.render("videos.ejs");
})
app.get("/home/rakes", (req, res) => {
    res.render("rakes.ejs")
})
app.get("/home/rakes/medha", (req, res) => {
    res.render("medha.ejs")
})
app.get("/home/rakes/ac-bhel", (req, res) => {
    res.render("ac-bhel.ejs")
})
app.get("/home/rakes/altsom", (req, res) => {
    res.render("altsom.ejs")
})
app.get("/home/rakes/siemens", (req, res) => {
    res.render("siemens.ejs")
})

app.listen(port, function () {
    console.log("listen at:" + port);
});