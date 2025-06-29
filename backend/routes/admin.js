const express = require("express")
const router = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const verifyAdmin = require("../middleware/middleware")
const Enquiry = require('../models/enquiry')

const JWT_SECRET = process.env.JWT_SECRET

const adminEmail = process.env.ADMIN_EMAIL
const adminPassword = process.env.ADMIN_PASSWORD

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    if (email !== adminEmail || password !== adminPassword) {
        return res.status(401).json({ error: "Invalid admin Credentials" })
    }

    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: '1h' })

    res.cookie("adminToken", token, {
        httpOnly: true,
        secure: true, // true in production(https)
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    })

    res.json({ message: "Admin logged in successfully" })
})


router.get('/centers', verifyAdmin, async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


// Soft Delete
router.delete('/centers/:id', async (req, res) => {
    try {
        const center = await User.findByIdAndUpdate(
            req.params.id,
            {
                isDeleted: true,
                deletedAt: new Date()
            },
            { new: true }
        );
        if (!center) return res.status(404).send("Not found");
        res.json({ message: 'Soft deleted', center });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});


// GET /api/admin/deleted-registrations
router.get('/deleted-registrations', async (req, res) => {
    const deleted = await User.find({ isDeleted: true });
    res.json(deleted);
});

// DELETE /api/admin/permanent-delete/:id
router.delete('/permanent-delete/:id', verifyAdmin, async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await User.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ error: "Registration not found" });
        }

        res.json({ success: true });
    } catch (err) {
        console.error("Permanent delete error:", err);
        res.status(500).json({ error: "Server error" });
    }
});


router.post('/logout', (req, res) => {
    res.clearCookie('adminToken')
    res.json({ message: 'Logged Out Successfully' })
})

// ✅ Get all enquiries (Admin only)
router.get('/enquiries', verifyAdmin, async (req, res) => {
    try {
        const enquiries = await Enquiry.find().sort({ date: -1 });
        res.json(enquiries);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// DELETE /api/admin/enquiries/:id
router.delete('/enquiries/:id', verifyAdmin, async (req, res) => {
    try {
        const enquiry = await Enquiry.findById(req.params.id);
        if (!enquiry) {
            return res.status(404).json({ success: false, message: "Enquiry not found" });
        }

        await Enquiry.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Enquiry deleted successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// routes/admin.js
router.get('/latest-registration', verifyAdmin, async (req, res) => {
    try {
        const latest = await User.find().sort({ createdAt: -1 });

        if (!latest) {
            return res.status(404).json({ message: "No registrations found" });
        }

        res.json(latest);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// Express route for soft delete
router.delete('/registration/:id', verifyAdmin, async (req, res) => {
    try {
        const center = await User.findByIdAndUpdate(
            req.params.id,
            {
                isDeleted: true,
                deletedAt: new Date()
            },
            { new: true }
        );
        if (!center) return res.status(404).send("Not found");
        res.json({ message: 'Soft deleted', center });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});





module.exports = router;


module.exports = router;
