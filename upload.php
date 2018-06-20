<?php
  /*if ( 0 < $_FILES['file']['error'] ) {
        echo 'Error: ' . $_FILES['file']['error'] . '<br>';
    }
    else {
        move_uploaded_file($_FILES['file']['tmp_name'],
            'img/users/' . $_FILES['file']['name']);
    }*/

    echo 'PHP script executing!';

    $sourcePath = $_FILES['file']['tmp_name'];       // Storing source path of the file in a variable
    $targetPath = "upload/".$_FILES['file']['name']; // Target path where file is to be stored
    move_uploaded_file($sourcePath,$targetPath) ;    // Moving Uploaded file
?>





