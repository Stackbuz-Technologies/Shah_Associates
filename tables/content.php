<?php

/*
* **********************************************************
* @Tutorial: content TABLE FILE @AUTHOR:YUVRAJ-28JAN2023
* **********************************************************
*
* Created on 28 JANUARY 2023 11:03:12 PM
*
* @FileName: content.php
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
$fileName = basename( __FILE__ );
//
$query = "CREATE TABLE IF NOT EXISTS content (
content_id 		            INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
content_name                VARCHAR(50),
content_value               BLOB,
content_status              VARCHAR(10),
content_since               DATETIME,
last_column                 VARCHAR(1))AUTO_INCREMENT = 1";
//
if ( !$conn->query( $query ) ) {
    die( 'Error ('.$fileName.')(Line No - ' . __LINE__ . '): ' . mysqli_error( $conn ) );
}
//
?>