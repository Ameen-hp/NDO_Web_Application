import Contact from "../models/Contact.js";
import { sendEmail } from "../utils/sendEmail.js";
// POST: Save new message
export const saveContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = new Contact({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: "Message received successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// GET: Retrieve all messages
export const getAllContactMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// DELETE: Delete message
export const deleteContactMessage = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};


// Confirm message 

export const confirmUserQuery = async (req, res) => {
  try {
    const query = await Contact.findById(req.params.id);
    if (!query) return res.status(404).json({ message: "Query not found" });

    // Update status in DB
    query.status = "Confirmed";
    await query.save();

    // Send confirmation email
    const subject = "We’ve received your message";
    const message = `
      Hello ${query.name}, <br/><br/>
      We have received your query regarding <strong>${query.subject}</strong>. 
      Our team will get back to you soon. Thank you for contacting us!`;

    await sendEmail(query.email, subject, message);

    res.json({ message: "Query confirmed and email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};