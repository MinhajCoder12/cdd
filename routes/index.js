var express = require('express');
var router = express.Router();

router.use(express.static("./public"))

router.use((req,res,next)=>{
  console.log("hi");
  next()
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index")
});
var add;
router.get('/:add', function(req, res, next) {
  res.send('hello hi by by')
});

module.exports = router;
