<?php

/*
* *********************************************************
* @tutorial: CONFIGURATION FILE @AUTHOR:MADHUREE-27JAN2023
* *********************************************************
*
* Created on 27 JANUARY 2023 12:03:12 PM
*
* @FileName: config.php
* @Author: Stackbuz Technologies Team
* @AuthorEmailId:  info@stackbuz.com
* @ProjectName: stackbuz website
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
require_once 'setup.php';
//
Config::set( 'site_name', 'GST AND TAX Software' );
//
Config::set( 'languages', array( 'en', 'hi', 'mr' ) );
//
Config::set( 'default_language', 'en' );
Config::set( 'default_controller', 'home' );
Config::set( 'default_action', 'index' );
Config::set( 'default_error_controller', 'page404' );
//
$theme = array( 'lite', 'lite', 'lite' );
//
Config::set( 'default_theme', '' );
Config::set( 'version', '1.1' );
?>
