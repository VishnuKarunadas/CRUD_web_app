const router= require('express').Router();
const User = require('../models/userSchema')
const multer = require('multer');

// images upload
var storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./uploads')
  },
  filename: function(req,file,cb){
    cb(null,file.fieldname + "_" + Date.now() + "_" + file.originalname)
  },

})

var upload = multer({
  storage: storage,
}).single("image");

// post
router.post("/add",upload,(req,res)=>{
  const user = new  User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    image: req.file.filename,
  })

  user.save();
  res.redirect('/')

})

router.get("/", async (req, res) => {
  try {
      const users = await User.find(); // Fetch all users
      res.render('index', { title: 'Home page', users: users });
  } catch (err) {
      console.error(err);
      // Optionally render an error view or send an error message
      res.status(500).render('error', { message: 'An error occurred while fetching users.' });
  }
});


router.get('/',(req,res)=>{
  res.render('index',{title: "Home page"})
})

router.get('/add',(req,res)=>{
  res.render('add_users',{title: "Add user"})
})

module.exports= router;
