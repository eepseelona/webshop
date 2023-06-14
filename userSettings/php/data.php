<?php

$path = 'data/new-file.json';

$email = "proba@minta.com";
$wrongemail = "asd";
$pwd = "proba";
$wrongpwd = "asd";


$dbservername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "webkey";

$conn = new mysqli($dbservername, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$eredmeny = $conn->query("SET @emailIN = '$email'");
$eredmeny = $conn->query("CALL selectEmailAndPwd(@emailIN)");

$row = $eredmeny->fetch_assoc();

if ($row["email"] == $email && $row["password"] == $pwd) {
    $result = true;
} else {
    $result = false;
}

file_put_contents('data.json', json_encode($path));

$conn->close();

?>