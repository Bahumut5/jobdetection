<?php
    //open connection to mysql db
    $connection = mysqli_connect("localhost","dbi350063","VKPMtMCk2G","dbi350063") 
	or die("Error " . mysqli_error($connection));

    //fetch table rows from mysql db
    $sql = "select * from jobs where province = Groningen";
    $result = mysqli_query($connection, $sql) 
	or die("Error in Selecting " . mysqli_error($connection));

    //create an array
    $province = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $province[] = $row;
    }
    //write to json file
    $fp = fopen('provinceData.json', 'w');
    fwrite($fp, json_encode($province));
    fclose($fp);

    //close the db connection
    mysqli_close($connection);
?>