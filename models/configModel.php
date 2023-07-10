<?php

/*
* *******************************************************
* @Tutorial: CONFIG MODEL FILE @AUTHOR:YUVRAJ-27JAN2023
* *******************************************************
*
* Created on 27 JANUARY 2023 12:03:12 PM
*
* @FileName: configModel.php
* @Author: Stackbuz Developement Team
* @AuthorEmailId:  info@stackbuz.com
* @ProjectName: stackbuz api
* @version: 1.0.0
* @Copyright ( c ) 2023 Stackbuz Technologies Pvt Ltd
* @All rights reserved
*
* @ModificaionHistory
*  MODIFICATION DATE:
*  AUTHOR:
*  REASON:
*
*/
?>
<?php
//
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
//
$domain_name = GB_DOMAIN_NAME;
$system_onoff = GB_SYSTEM_ONOFF;
$software_name = SOFTWARE_NAME;
//
//
if ( $system_onoff == 'ON' ) {
    $servername = '65.2.186.41';
    $username = 'root';
    $password = 'Shah@Associates';
    $database = 'shah_associates';
} else {
    $servername = 'localhost';
    $username = 'root';
    $password = 'omrolrsr';
    $database = 'shah_associates';
}
//
// CREATING CONNECTION @AUTHOR:YUVRAJ-27JAN2023
//
$conn = new mysqli( $servername, $username, $password );
//
// CHECK CONNECTION @AUTHOR:YUVRAJ-27JAN2023
//
//
if ( $conn->connect_error ) {
    die( 'Connection failed: ' . $conn->connect_error );
}
//
// CREATING DATABASE CONNECTION @AUTHOR:YUVRAJ-27JAN2023
//

// if ( $system_onoff == 'OFF' ) {
    //
    $queryCreateDatabase = "CREATE DATABASE IF NOT EXISTS $database";
    //
    if ( $conn->query( $queryCreateDatabase ) === TRUE ) {
        // $readWritefile = fopen( ROOT . DS . 'models' . DS . strtolower( 'om_temp' ) . '.php', 'a' );
        // fwrite( $readWritefile, '\n Database created successfully' );
        // fclose( $readWritefile );
    } else {
        // $readWritefile = fopen( ROOT . DS . 'models' . DS . strtolower( 'om_temp' ) . '.php', 'a' );
        // fwrite( $readWritefile, "\n Error while creating database:  . $conn->error" );
        // fclose( $readWritefile );
    }
    //
// }
//
$queryUseDatabase = "USE $database";
if ( !$conn->query( $queryUseDatabase ) ) {
    die( 'Error ('.$fileName.')(Line No - ' . __LINE__ . '): ' . mysqli_error( $conn ) );
}
//
if ( $tableName != '' ) {
    //
    require  ROOT . DS . 'models' . DS . 'table_setup.php';
    //
}
//
// CLOSING DATABASE CONNECTION @AUTHOR:YUVRAJ-27JAN2023
//
//$conn->close();
//
?>