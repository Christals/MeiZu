<?php
    header('Access-Control-Allow-Origin:*');
    $json = file_get_contents("php://input");
    $json = json_decode($json);
    // 获取用户名
    $username = $json -> username;
    // 获取密码
    $pwd = $json -> paserward;

    $coon = new Mysqli("localhost", "root", "123456", "db_shop_admin", 3306);
    $sql = "select * from user_info where username='$username'and paserward='$pwd'";
    $coon->query("SET CHARACTER SET 'utf8'");//读库   
    $coon->query("SET NAMES 'utf8'");//写库  
    // var_dump($sql); 
    $row = $coon -> query($sql);
    $result = $row -> fetch_assoc();
    // var_dump($row); 

    // $result = $coon -> query($sql);
    if($result) {
        // 登录成功
        $arr = array("code" => "200", "msg" => "", "data" => array("name" => $result['username']));
    } else {
        // 登录失败
        $arr = array("code" => "1000", "msg" => "用户名或者密码输入错误", "data" => array());
    }
    echo json_encode($arr);



?>