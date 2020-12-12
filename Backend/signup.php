<?php
    header('Access-Control-Allow-Origin: *');
    if (isset($_REQUEST['peticion'])) {
        switch ($_REQUEST['peticion']) {
            case "verificar":
                verificar();
            break;
            default:
                echo 'no request';
        }
    }  
     
    function verificar() {
        header('Access-Control-Allow-Origin: *');
        include_once 'conexion.php';
        
        $username = $_REQUEST['username'];
        $password = $_REQUEST['password'];
        
        if ($username != "" && $password != ""){

            $sql_query = "select count(*) as cntUser from usuario where username='".$username."' and password='".$password."'";
            $result = mysqli_query($conn, $sql_query);
            $row = mysqli_fetch_array($result);
        
            $count = $row['cntUser'];
        
            if($count > 0) {
                echo 1;
            }else{
                echo 0;
            }
        
        }
        
    }
?>