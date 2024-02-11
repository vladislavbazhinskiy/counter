<?php
//трюк  для удачного выставления кодировки 
error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');

        
        $servername = "localhost";
        $username = "bazhineg_counter";
        $password = "................";//password
        $dbname = "bazhineg_counter";

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $a1 = test_input($_POST["a1"]);
        $a2 = test_input($_POST["a2"]);
        $b1 = test_input($_POST["b1"]);
        $b2 = test_input($_POST["b2"]);
        $c1 = test_input($_POST["c1"]);
        $c2 = test_input($_POST["c2"]);
        $dat= test_input($_POST["dat"]);
    
        
       // Create connection(объектно-ориентированный )
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 	
	    
        
	
//перезапись БД (процедурный стиль)
        $sql = "UPDATE counter SET a1='$a1', a2='$a2' ,b1='$b1', b2='$b2',c1='$c1', c2='$c2',dat='$dat' WHERE id=1";
        $update = mysqli_query($conn, $sql);
		 
        if ($update == true){
        print ("Данные успешно занесены: ".$dat);//Печать сообщения
        
        }else{
        print ("Данные не занесены");
	    $conn->close();
        }

} 

else {
    echo "No data posted with HTTP POST.";
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>