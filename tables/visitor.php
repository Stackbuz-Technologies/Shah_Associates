<?php

/*
* ********************************************************
* @Tutorial: VISITOR TABLE FILE @AUTHOR:YUVRAJ-28FEB2023
* ********************************************************
*
* Created on 06 FEBRUARY 2023 11:03:12 PM
*
* @FileName: visitor.php
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
$query = "CREATE TABLE IF NOT EXISTS visitor (
    visitor_id 		            INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    visitor_type                VARCHAR(20),
    visitor_fname               VARCHAR(50),
    visitor_lname               VARCHAR(50),
    visitor_mobile              VARCHAR(20),
    visitor_email               VARCHAR(50),
    visitor_website             VARCHAR(50),
    visitor_country             VARCHAR(30),
    visitor_company_name        VARCHAR(50),
    visitor_other_info          BLOB,
    visitor_date                DATE,
    visitor_since               DATETIME,
    last_column                 VARCHAR(1))AUTO_INCREMENT = 1";
//
if ( !$conn->query( $query ) ) {
    die( 'Error ('.$fileName.')(Line No - ' . __LINE__ . '): ' . mysqli_error( $conn ) );
}
//
?>