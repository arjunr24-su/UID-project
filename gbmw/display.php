<?php

include('./connect.php');

if(isset($_POST['Submit'])){
    $car_name = $_POST['car_name'];
    $fuel_type = $_POST['fuel_type'];
    $car_type = $_POST['car_type'];
    $drive_type = $_POST['drive_type'];
    $engine_power = $_POST['engine_power'];
    $mileage = $_POST['mileage'];
    $car_images = $_FILES['car_images'];

    $imagefilename = $car_images['name'];
    $imagefiletemp = $car_images['tmp_name'];

    $filename_separate = explode('.', $imagefilename);
    $file_extension = strtolower(end($filename_separate));
    $extension = array('jpeg', 'jpg', 'png');

    if(in_array($file_extension, $extension)){
        $upload_image = 'car_images/' . $imagefilename;
        move_uploaded_file($imagefiletemp, $upload_image);

        $sql = "INSERT INTO uploadcar (CARNAME, FUELTYPE, CARTYPE, DRIVETYPE, ENGINEPOWER, MILEAGE, IMAGEFILE) VALUES ('$car_name', '$fuel_type', '$car_type', '$drive_type', '$engine_power', '$mileage', '$upload_image')";
        $result = mysqli_query($con, $sql);

        if($result){
            echo '<div class="alert alert-success" role="alert">
            <strong>Success:</strong> Data inserted successfully
            </div>';
        } else {
            die(mysqli_error($con));
        }
    } else {
        echo '<div class="alert alert-danger" role="alert">
        <strong>Error:</strong> Invalid file extension. Allowed extensions are: jpeg, jpg, png
        </div>';
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display data</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1 class="text-center my-4">User Data</h1>
    <div class="container mt-5 d-flex justify-content-center">
        <table class="table table-bordered w-50%">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Car Name</th>
                    <th scope="col">Fuel Type</th>
                    <th scope="col">Car Type</th>
                    <th scope="col">Drive Type</th>
                    <th scope="col">Engine Power</th>
                    <th scope="col">Mileage</th>
                    <th scope="col">Image</th>
                </tr>
            </thead>
            <tbody>
                <?php
        $sql = "SELECT * FROM uploadcar";
        $result = mysqli_query($con, $sql);
        while($row = mysqli_fetch_assoc($result)){
        $CARNAME = $row['CARNAME'];
        $FUELTYPE = $row['FUELTYPE'];
        $CARTYPE = $row['CARTYPE'];
        $DRIVETYPE = $row['DRIVETYPE'];
        $ENGINEPOWER = $row['ENGINEPOWER'];
        $MILEAGE = $row['MILEAGE'];
        $IMAGEFILE = $row['IMAGEFILE'];
                    
        echo '<tr>
        <td>'.$CARNAME.'</td>
        <td>'.$FUELTYPE.'</td>
        <td>'.$CARTYPE.'</td>
        <td>'.$DRIVETYPE.'</td>
        <td>'.$ENGINEPOWER.'</td>
        <td>'.$MILEAGE.'</td>
        <td><img src="'.$IMAGEFILE.'" width="100px" height="100px"></td>
        </tr>';
        }
        ?>
            </tbody>
        </table>
    </div>
</body>
</html>
