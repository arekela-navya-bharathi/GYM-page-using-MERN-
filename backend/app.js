import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

// Load environment variables
config({ path: "./config.env" });

// CORS Configuration
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true, // Correct spelling
  })
);

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    // Call the sendEmail function
    await sendEmail({
      email: "arekelanavyabharathi@gmail.com", // Your email
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email, // Sender's email
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: "Internal server Error",
    });
  }
});

// Use the router
app.use(router);

// Start the server
const PORT = process.env.PORT || 5000; // Default to port 5000 if not defined
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});

