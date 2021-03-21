const router = require('express').Router();
let Staff = require('../models/staff.model');

router.route('/').get((req, res) => {
    Staff.find()
        .then(staffs => res.json(staffs))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newStaff = new Staff({
        name, 
        email, 
        password,
    });

    newStaff.save()
        .then(() => res.json("Staff added!"))
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;