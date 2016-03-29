<?php

 require_once 'dbconfig.php';

 if($_POST)
 {
  $first_name = $_POST['firstname'];
  $last_name = $_POST['lastname'];
  $user_password = $_POST['password'];
  $user_email = $_POST['email'];

  try
  {

   $stmt = $db_con->prepare("SELECT * FROM users WHERE email=:email");
   $stmt->execute(array(":email"=>$user_email));
   $count = $stmt->rowCount();

   if($count==0){

   $stmt = $db_con->prepare("INSERT INTO users(firstname,lastname,email,password) VALUES(:fname, :lname, :email, :pass)");
   $stmt->bindParam(":fname",$first_name);
   $stmt->bindParam(":lname",$last_name);
   $stmt->bindParam(":pass",$user_password);
   $stmt->bindParam(":email",$user_email);

    if($stmt->execute())
    {
     echo "Registered successfully";
    }
    else
    {
     echo "Query could not execute !";
    }

   }
   else{

    echo "Existing email"; //  not available
   }

  }
  catch(PDOException $e){
       echo $e->getMessage();
  }
 }

?>
