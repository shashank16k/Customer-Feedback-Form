<?php
session_start();

// Check if username and password are correct (You should replace this with your own validation logic)
$username = "user"; // Replace with your actual username
$password = "password"; // Replace with your actual password

if(isset($_POST['username']) && isset($_POST['password']) && $_POST['username'] === $username && $_POST['password'] === $password) {
    // If login is successful, redirect to feedback page
    $_SESSION['loggedin'] = true;
    header("D:\CRM\.html");
    exit;
} else {
    // If login is not successful, redirect back to login page with an error message
    exit;
}
?>
