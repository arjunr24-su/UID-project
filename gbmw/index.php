<?php
require_once('./operations.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Car</title>
    
    <style>
        h1 {
            text-align: center;
            color: #333333;
        }
        form {
            max-width: 400px;
            margin: auto;
            padding: 1em;
            border: 1px solid #ccc;
            border-radius: 1em;
        }
        div + div {
            margin-top: 1em;
        }
        label {
            display: block;
            margin-bottom: 0.5em;
            color: #333333;
        }
        input[type="text"],
        input[type="number"] {
            width: 100%;
            padding: 0.5em;
            border: 1px solid #ccc;
            border-radius: 0.5em;
        }
        .radio-group {
            display: flex;
            align-items: center;
            margin-top: 1em;
        }
        .radio-group label {
            margin-right: 1em;
        }
        button {
            padding: 0.7em;
            color: #fff;
            background-color: #007BFF;
            border: none;
            border-radius: 0.5em;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        .center {
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Upload Your Car</h1>
    <form action="display.php" enctype="multipart/form-data" method="post">
        <?php inputFields("Car Name", "Enter car name", "car_name", "", "text", "car-name-field"); ?>
        <div class="radio-group">
            <label>Fuel Type:</label>
            <input type="radio" id="petrol" name="fuel_type" value="Petrol" required>
            <label for="petrol">Petrol</label>
            <input type="radio" id="diesel" name="fuel_type" value="Diesel" required>
            <label for="diesel">Diesel</label>
        </div>
        <div class="radio-group">
            <label>Car Type:</label>
            <input type="radio" id="suv" name="car_type" value="SUV" required>
            <label for="suv">SUV</label>
            <input type="radio" id="sedan" name="car_type" value="Sedan" required>
            <label for="sedan">Sedan</label>
        </div>
        <div class="radio-group">
            <label>Drive Type:</label>
            <input type="radio" id="awd" name="drive_type" value="All Wheel Drive" required>
            <label for="awd">All Wheel Drive</label>
            <input type="radio" id="rwd" name="drive_type" value="Rear Wheel Drive" required>
            <label for="rwd">Rear Wheel Drive</label>
            <input type="radio" id="fwd" name="drive_type" value="Front Wheel Drive" required>
            <label for="fwd">Front Wheel Drive</label>
        </div>
        <?php inputFields("Engine Power (in HP)", "Enter engine power", "engine_power", "", "number", "engine-power-field"); ?>
        <?php inputFields("Mileage (in km/l)", "Enter mileage", "mileage", "", "number", "mileage-field"); ?>
        <div>
            <label for="car-images">Car Images:</label>
            <input type="file" id="car-images" name="car_images" accept="image/*" multiple required>
        </div>
        <div class="center">
            <button type="submit" name="Submit">Submit</button>
        </div>
    </form>
</body>
</html>
