const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Enquiry = require('../models/enquiry');

// Route: POST /api/enquiry
router.post('/enquiries',
  [
    body('firstName', 'First name is required').notEmpty(),
    body('lastName', 'Last name is required').notEmpty(),
    body('email', 'Enter a valid email').isEmail(),
    body('number', 'Enter a valid phone number').isLength({ min: 10 }).isNumeric(),
    body('message', 'Message is required').notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { firstName, lastName, email, number, message } = req.body;

    try {
      const enquiry = new Enquiry({
        firstName,
        lastName,
        email,
        number,
        message
      });

      await enquiry.save();
      res.json({ success: true, message: "Enquiry submitted successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
