<?php
    $conn = mysqli_connect("localhost", "root", "", "chat");
    if(!$conn){
        echo "Database Is Not Connected" . mysqli_connect_error();
    }
?>