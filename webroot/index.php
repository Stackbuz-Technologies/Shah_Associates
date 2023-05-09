<?php

/*
* **************************************************************************************
* @tutorial: ENTRY POINT
* **************************************************************************************
*
* Created on 14-Jan-2023 6:00:00 am
*
* @FileName: index.php
* @Author: Stackbuz Technologies Team
* @AuthorEmailId:  info@stackbuz.com
* @ProjectName:
* @version 1.0.0
* @Copyright ( c ) 2022 www.stackbuz.com
* @All rights reserved
*  Copyright 2022 Stackbuz Technologies
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
define( 'DS', DIRECTORY_SEPARATOR );
define( 'ROOT', dirname( dirname( __FILE__ ) ) );
define( 'VIEWS_PATH', ROOT . DS . 'views' );
define( 'WEBROOT_PATH', ROOT . DS . 'webroot' );
define( 'HHS', '/' );
//
require_once ROOT . DS . 'config' . DS . 'setup.php';
//
if ( PROJECT_DIR == '' ) {
    define( 'HTTP_HOST', HTTP . $_SERVER[ 'HTTP_HOST' ] );
} else {
    define( 'HTTP_HOST', HTTP . $_SERVER[ 'HTTP_HOST' ] . HHS . PROJECT_DIR );
}
//
define( 'HTTP_HOST_WEBROOT', HTTP_HOST . HHS . 'webroot' );
//
require_once ROOT . DS . 'lib' . DS . 'init.php';

//
?>