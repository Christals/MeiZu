<?php
    // header("Content-type:text/html;charset=UTF-8");
    header('Access-Control-Allow-Origin:*');

    $json = file_get_contents("php://input");
    $json = json_decode($json);
    //  var_dump($json);   
     $username = $json -> username;
     $pwd = $json -> paserward;
     $tel = $json -> telephone;
 
     $coon = new Mysqli("localhost", "root", "123456", "db_shop_admin", 3306);
     $sql = "INSERT into `user_info` (username, paserward, telephone) VALUES ('$username', '$pwd', '$tel')";
 
     $coon->query("SET CHARACTER SET 'utf8'");//读库   
     $coon->query("SET NAMES 'utf8'");//写库  
     $result = $coon -> query($sql);
     if($result) {  
          // 注册成功
        $arr = array("code" => "200","msg" => "");
   
      } else {
       // 注册失败
       $arr = array("code" => "1000","msg" => "注册失败请换一种方式"); 
   
      }
      echo json_encode($arr);   
?>