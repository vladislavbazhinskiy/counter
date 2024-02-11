<?php
      // кодировка =utf-8
       header('Content-Type: text/html; charset=utf-8');

       
        $servername = "localhost";
        $username = "bazhineg_counter";
        $password = "................"; //password
        $dbname = "bazhineg_counter";

        
        // Create connection(объектно-ориентированный )
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 	
	    
	
		 
		// Select data from table counter
		$sql = "SELECT * FROM counter";
        $result = $conn->query($sql);
        $row=$result->fetch_row();
        list($id,$a1,$a2,$b1,$b2,$c1,$c2,$dat)=$row; //извлечение значений всех хранимых переменных из базы данных 
        
        
        
		echo '
<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  </head>	
  <body>
    <div class="container">
    <form id = "form" action="#" >
        <p class="header">Показания счетчиков на: 
		<input type="text" id="dat" name="dat"  value='.$dat.'>
		<button type="submit" class="button" >отправить</button>
		</p> 
		
    <table id="table" >
        <tr>
          <td >Позиция</td>
          <td > Текущее </td>
          <td > Прежнее </td>
          <td >Расход</td>
          <td >Тариф</td> 
          <td >Сумма</td>
        </tr>
        <tr>
          <td>Электро</td>
		      <td><input id="a1" type="text" name="a1" placeholder="текущее" value='.$a1.'></td>                            
		      <td ><input id="a2" type="text"  name="a2" placeholder="прежнее"  value='.$a2.'></td>
		      <td id="result1a"></td>
		      <td align="center">6.43р.</td> 
		      <td id="result2a"></td>
		    </tr>
        <tr>
		      <td>ХВС</td>
		      <td><input id="b1" type="text" name="b1"  placeholder="текущее"  value='.$b1.' ></td>                                       
		      <td><input id="b2" type="text"  name="b2"     placeholder="прежнее" value='.$b2.' ></td>
		      <td id="result1b"></td>                            
		      <td align="center">50.93p.</td>
		      <td id="result2b"></td>
        </tr>
        <tr>
		      <td>ГВС</td>
		      <td><input id="c1" type="text" name="c1"  placeholder="текущее"  value='.$c1.'></td>                                      
		      <td><input id="c2" type="text"name="c2" placeholder="прежнее"  value='.$c2.'></td>
		      <td id="result1c"></td>                             
		      <td align="center">243.16р.</td>
		      <td id="result2c"></td>
		    </tr>
        <tr>
		      <td>Водоотвод</td>
		      <td></td><td></td>
		      <td id="result3d"></td>
		      <td align="center">39.97р.</td>
		      <td id="result4d"></td>
		    </tr>
        <tr>
		      <td colspan="4"><div id="answer" class="answer"></div></td>
		      <td>Итого:</td>
		      <td id="result6"></td>
		   </tr>
    </table>
    </form>
    
    </div>
    
    <script src="script.js"></script>
  
  
</body>
</html>';
?>