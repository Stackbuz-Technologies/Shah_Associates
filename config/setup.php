<?php

/*
* **************************************************************************************
* @tutorial: GLOBAL VARIABLE DEFINE
* **************************************************************************************
*
* Created on 14-Jan-2023 6:00:00 am
*
* @FileName: setup.php
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
if ( $_SERVER[ 'HTTP_HOST' ] == '127.0.0.1:8080' || $_SERVER[ 'HTTP_HOST' ] == 'localhost') {
    //
    define( 'GB_BUILD_TYPE', 'DEV' );
    define( 'GB_HTTP', 'http://' );
    define( 'GB_HTTPS', 'https://' );
    define( 'GB_WEBSITE', 'tradesofterp.com' );
    define( 'GB_DOMAIN_NAME', 'tradesofterp.com' );
    define( 'GB_API_KEY', '1de8e66824422b49c970e947967ecf48' );
    //
    define( 'GB_API_HOST', $_SERVER[ 'HTTP_HOST' ] );
    define( 'GB_API_FOLDER', 'accurateca_api' );
    define( 'GB_SYSTEM_ONOFF', 'OFF' );
    define( 'GB_OWNER_ID', '' );
    //
    define( 'GB_PAYMENT_PANEL', 'YES' );
    define( 'GB_PAYMENT_PANEL_NAME', 'RAZORPAY' );
    define( 'GB_PAYMENT_PANEL_MERCHANT_ID', 'GUh7QXTjb1Rppa' );
    define( 'GB_PAYMENT_PANEL_WORKING_KEY', 'rzp_live_Zizum1P5jIje75' );
    define( 'GB_PAYMENT_PANEL_ACCESS_CODE', 'M2EcBIvLaCsiGGpli7nI351o' );
    define( 'PROJECT_DIR', 'Shah_Associates' );
    define( 'SOFTWARE_NAME', 'GST & TAX' );
    define( 'HTTP', 'http://' );
    //
} else if ( $_SERVER[ 'HTTP_HOST' ] == 'swapnilshahassociates.in' || $_SERVER[ 'HTTP_HOST' ] == 'www.swapnilshahassociates.in' || $_SERVER[ 'HTTP_HOST' ] == '13.232.187.88') {
    //
    define( 'GB_BUILD_TYPE', 'PROD' );
    define( 'GB_HTTP', 'http://' );
    define( 'GB_HTTPS', 'https://' );
    define( 'GB_WEBSITE', 'swapnilshahassociates.in' );
    define( 'GB_DOMAIN_NAME', 'swapnilshahassociates.in' );
    define( 'GB_API_KEY', '1de8e66824422b49c970e947967ecf48' );
    //
    define( 'GB_API_HOST', '' );
    define( 'GB_API_FOLDER', '' );
    define( 'GB_SYSTEM_ONOFF', 'ON' );
    define( 'GB_OWNER_ID', '' );
    //
    define( 'GB_PAYMENT_PANEL', 'NO' );
    define( 'GB_PAYMENT_PANEL_NAME', '' );
    define( 'GB_PAYMENT_PANEL_MERCHANT_ID', '' );
    define( 'GB_PAYMENT_PANEL_WORKING_KEY', '' );
    define( 'GB_PAYMENT_PANEL_ACCESS_CODE', '' );
    define( 'PROJECT_DIR', '' );
    define( 'SOFTWARE_NAME', '' );
    define( 'HTTP', 'https://' );
    //
}
?>
