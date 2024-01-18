<?php
// process.php

if (isset($_POST['submit'])) {
    // Define database connection details
   

    // Create database connection
    $con=mysqli_connect("localhost","root","","myhmsdb");


    // Check connection
    if ($con->connect_error) {
        die("Connection failed: " . $con->connect_error);
    }

    // Process uploaded .csv file
    if (isset($_FILES['csvFile']) && $_FILES['csvFile']['error'] == UPLOAD_ERR_OK) {
        $csvFile = $_FILES['csvFile']['tmp_name'];

        // Read .csv file
        if (($handle = fopen($csvFile, "r")) !== false) {
            while (($data = fgetcsv($handle, 1000, ",")) !== false) {
                // Insert data into the database (adjust table and column names accordingly)
                $sql = "INSERT INTO `doctb`(`username`, `password`, `email`, `spec`, `docFees`) VALUES ('$data[0]', '$data[1]', '$data[2]', '$data[3]','$data[4]')";
                $result = $con->query($sql);

                if (!$result) {
                    echo "Error: " . $sql . "<br>" . $con->error;
                }
            }

            fclose($handle);
            echo "Data imported successfully!";
        } else {
            echo "Error reading the .csv file.";
        }
    }

    // Close database connection
    $con->close();
} else {
    // Redirect to the index page if the form is not submitted
    header('Location: csv.html');
    exit();
}
?>
