<?php

/*
* ********************************************************************************************
* @Tutorial: TABLE SETUP FILE TP CREATE RELATIVE TABLE IF NOT EXIST @AUTHOR:YUVRAJ-28JAN2023
* ********************************************************************************************
*
* Created on 28 JANUARY 2023 11:03:12 PM
*
* @FileName: table_setup.php
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
if ( $tableName != '' ) {
    $queryCheckTableExist = "SELECT * FROM information_schema.tables WHERE table_schema = '$database' AND table_name = '$tableName' LIMIT 0,1;";
    $resTableExist = $conn->query( $queryCheckTableExist );
    $noOfTablePresent = $resTableExist->num_rows;
}
//
if ( $noOfTablePresent <= 0 ) {
    require  ROOT . DS . 'tables' . DS . $tableName.'.php';
}
//
?>