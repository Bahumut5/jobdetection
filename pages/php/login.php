<?php
 session_start();
 require_once 'dbconfig.php';

 if(isset($_POST))
 {
  $user_email = trim($_POST['email']);
  $user_password = trim($_POST['password']);

  $password =($user_password);

  try
  {

   $stmt = $db_con->prepare("SELECT * FROM users WHERE email=:email");
   $stmt->execute(array(":email"=>$user_email));
   $row = $stmt->fetch(PDO::FETCH_ASSOC);
   $count = $stmt->rowCount();

   if($row['password']==$password){

    echo "ok-you logged in"; // log in
    $_SESSION['user_session'] = $row['id'];
   }
   else{

    echo "email or password does not exist."; // wrong details
   }

  }
  catch(PDOException $e){
   echo $e->getMessage();
  }
 }

?>
