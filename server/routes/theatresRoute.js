// Import the Express router module
const router = require('express').Router();

// Import the authentication middleware
const authMiddleware = require('../middlewares/authMiddleware');

// Import the Theatre model
const Theatre = require('../models/theatreModel');

// add theatre
// Define a POST route to add a new theatre
router.post('/add-theatre', async (req, res) => {
    try {
        // Create a new Theatre instance using request body data
        const newTheatre = new Theatre(req.body);

        // Save the new theatre to the database
        await newTheatre.save();

        // Send a success response
        res.send({
            success: true,
            message: 'Theatre added successfully',
        });
    } catch (error) {
        // Send an error response if an exception occurs
        res.send({
            success: false,
            message: error.message,
        });
    }
});

// get all theatres
// Define a GET route to get all theatres
router.get("/get-all-theatres", async (req, res) => {
    try {
        // Find all theatres from the database and sort them by creation date
        const theatres = await Theatre.find().sort({ createdAt: -1 });

        // Send a success response with the theatre data
        res.send({
            success: true,
            data: theatres,
        });
    } catch (error) {
        // Send an error response if an exception occurs
        res.send({
            success: false,
            message: error.message,
        });
    }
});

// get theatre by owner
// Define a POST route to get all theatres owned by a specific owner
router.post("/get-all-theatres-by-owner", async (req, res) => {
    try {
        // Find theatres owned by the specified owner and sort them by creation date
        const theatres = await Theatre.find({ owner: req.body.owner }).sort({ createdAt: -1 });

        // Send a success response with the theatre data
        res.send({
            success: true,
            message: 'Theatres fetched successfully',
            data: theatres,
        });
    } catch (error) {
        // Send an error response if an exception occurs
        res.send({
            success: false,
            message: error.message,
        });
    }
});

// update theatre
// Define a POST route to update a theatre
router.post("/update-theatre", async (req, res) => {
    try {
        // Update the theatre with the specified theatreId using the request body data
        await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);

        // Send a success response
        res.send({
            success: true,
            message: 'Theatre updated successfully',
        });
    } catch (error) {
        // Send an error response if an exception occurs
        res.send({
            success: false,
            message: error.message,
        });
    }
});

// delete theatre
// Define a POST route to delete a theatre
router.post("/delete-theatre", async (req, res) => {
    try {
        // Delete the theatre with the specified theatreId
        await Theatre.findByIdAndDelete(req.body.theatreId);

        // Send a success response
        res.send({
            success: true,
            message: 'Theatre deleted successfully',
        });
    } catch (error) {
        // Send an error response if an exception occurs
        res.send({
            success: false,
            message: error.message,
        });
    }
});

// Export the router to be used in other parts of the application
module.exports = router;