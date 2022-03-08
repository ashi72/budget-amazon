const express = require ('express');
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

router.post("/register", (req, res) => {
    console.log(req.body.userEmail);
    User.findOne({ // search by an email
        $or:
            [{"userEmail": req.body.userEmail}]
    }).then(user => {
        console.log(user);
        if (user) {            
            return res.status(202).send({
                message: "This user already exists!"
            })
        }
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            const newUser = new User ({
            userEmail: req.body.userEmail,
            password: hash,
            name: req.body.name,
            UID: req.body.UID,
            phoneNumber: req.body.phoneNumber,
            reviews: [],
            products: [],
          })
          newUser.save()
            .catch(err => {
                return res.status(500).send({
                    message: "Internal server error, please try again later!"
                })
            });
          res.json(201, newUser);
          })
    })
})

router.get('/fetch/:email', function(req, res) {
  User.findOne({ // search by an email
    $or:
        [{"userEmail": req.params.email}]
  }).then(user => {
    if (!user) {
      return res.status(200).send({
        message: "User not found"
      })
    }
    return res.status(200).send({user, message: "User found!"});   
  }).catch(err => {
    return res.status(500).send({
      message: "Internal server error, please try again later!",
      error: err
    })
  })
})  

router.put('/update', function(req, res, next) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    User.findOneAndUpdate({ // search by an id
        $or:
            [{userEmail: req.body.userEmail}]
    }, {
        userEmail: req.body.userEmail,
        password: hash,
        name: req.body.name,
        UID: req.body.UID,
        phoneNumber: req.body.phoneNumber,
        reviews: [],
        products: [],
      }).then(user => {
      console.log(user);
      if (!user) {
        return res.status(400).send({
          message: "this user does not exist"
        })
      }
      return res.status(200).send(user);
    }).catch(err => {
        return res.status(500).send({
            message: "Internal server error, please try again later!",
            error: err
        })
    });
  })
  
})

router.delete("/delete/:email", function (req, res) {
  User.findOneAndDelete({ // search by an email
      $or:
      [{userEmail: req.body.userEmail}]
    }).then(user => {
    if(!user){
        return res.status(404).send({
            message: "This user does not exist"
          })
    }
    else return res.status(200).send({message: 'User deleted successfully'})
  }).catch(err => {
        return res.status(500).send({
            message: "Internal server error, please try again later!",
            error: err
        })
    });
})

module.exports = router;