<?php
function inputFields($label, $placeholder, $name, $value, $type, $class) {
    if ($type === "checkbox") {
        $ele = "
        <div class='$class'>
            <label>$label:</label>
            <input type='$type' id='$name' name='$name' value='$value' required>
            <label for='$name'>$placeholder</label>
        </div>
        ";
    } else {
        $ele = "
        <div class='$class'>
            <label for='$name'>$label:</label>
            <input type='$type' id='$name' name='$name' value='$value' placeholder='$placeholder' required autocomplete='off'>
        </div>
        ";
    }
    echo $ele;
}
?>