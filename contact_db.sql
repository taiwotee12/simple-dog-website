-- SQL script to create the database and table for contact form data

-- Create the database
CREATE DATABASE IF NOT EXISTS doglovers_contact;

-- Use the database
USE doglovers_contact;

-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Insert a sample row for testing
-- INSERT INTO contact_submissions (name, email, message) VALUES ('Test User', 'test@example.com', 'This is a test message.');
