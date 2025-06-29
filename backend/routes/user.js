const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');

// Route 1: Register a User using POST "/api/user/register"
router.post('/register', [
    body('centerName').notEmpty().isLength({ min: 3 }).withMessage('Center name is required with minimum length 3'),
    body('postalAddress').notEmpty().withMessage("Postal address is required"),
    body('contact')
        .isNumeric().withMessage('Contact must be a number')
        .isLength({ min: 10 }).withMessage('Contact must be at least 10 digits'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('centerType')
    .isString().withMessage('Center type must be string')
    .isIn([
        'Private Test Center',
        'School',
        'College',
        'Govt. Institutions / University'
    ]).withMessage('Invalid center type selected')
], async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await User.create({
            centerName: req.body.centerName,
            postalAddress: req.body.postalAddress,
            contact: req.body.contact,
            email: req.body.email,
            centerType: req.body.centerType,
            availability: req.body.availability,
            isNew:true,
        });
        
        await user.save()

        success = true;
        res.json({ success, message: "User registered successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occurred");
    }
});

module.exports = router;
