<?php 
echo "Hai ordinato ";
foreach ($_POST as $i => $item) {
    if ($item == 0) {
        continue;
    }
    else {
        echo $item . " " . $i . " ";
    }
}
?>
