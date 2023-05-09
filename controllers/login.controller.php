<?php

/*
* **************************************************************************************
* @tutorial: Login Controller
* **************************************************************************************
*
* Created on 03-Feb-2023 6:00:00 am
*
* @FileName: login.controller.php
* @Author: Stackbuz Technologies Team
* @AuthorEmailId:  info@stackbuz.com
* @ProjectName:
* @version 1.0.0
* @Copyright ( c ) 2023 www.stackbuz.com
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
$login_model_path = ROOT . DS . 'models' . DS . 'login.php';
require_once $login_model_path;
//

class LoginController extends Controller {
    //

    public function __construct() {
        //
        $this->LoginModel = new Login();
        //
    }
    //

    public function index() {
        //
        Router::redirect( HTTP_HOST );
        //
    }
    //

    public function signin() {
        //
        if ( $_REQUEST[ 'username' ] != '' && $_REQUEST[ 'password' ] != '' ) {
            //
            $file = 'C:/Program Files/Tradesoft/info.txt';
            //
            if ( file_exists( $file ) ) {
                $user_details = file( $file );
                $owner_id = base64_decode( $user_details[ 0 ] );
                $owner_indicators = base64_decode( $user_details[ 1 ] );
            } else {
                $owner_id = '';
            }
            //
            $request = array();
            $request[ 'function_name' ] = 'login';
            $request[ 'username' ] = $_REQUEST[ 'username' ];
            $request[ 'password' ] = md5( $_REQUEST[ 'password' ] );
            $request[ 'mac_address' ] = $_REQUEST[ 'mac_address' ];
            $request[ 'owner_id' ] = $owner_id;
            //
            $response = $this->LoginModel->login_transaction( $request );
            //
            if ( $response[ 'error' ] == false && $response[ 'status' ] == 'Success' && $response[ 'status_code' ] == 200 && $response[ 'owner_id' ] != '' ) {
                //
                foreach ( $response as $key => $value ) {
                    Session::set( $key, $value );
                }
                //
                Session::set( 'showPopup', 'YES');
                Router::redirect( HTTP_HOST.'/dashboard' );
            } else {
                Session::set( 'error', $response[ 'message' ] );
                Router::redirect( HTTP_HOST );
            }
            //
        }
        //
    }
    //

    public function signup() {
        //
        if ( $_REQUEST[ 'owner_username' ] != '' ) {
            //
            $request = array();
            $request = $_REQUEST;
            $request[ 'owner_password' ] = md5( $_REQUEST[ 'owner_password' ] );
            $request[ 'function_name' ] = 'registration';
            $request[ 'operation' ] = 'insert';
            //
            $response = $this->LoginModel->login_transaction( $request );
            //
            if ( $response[ 'owner_id' ] != '' ) {
                //
                $details = base64_encode( $response[ 'owner_id' ] ).PHP_EOL.base64_encode( $response[ 'owner_indicators' ] );
                //
                $file = fopen( $dir.'/info.txt', 'w' );
                fwrite( $file, $details );
                fclose( $file );
                //
                Router::redirect( HTTP_HOST );
                //
            } else {
                Session::set( 'error', $response[ 'message' ] );
                Session::set( 'page_name', 'signup/signup' );
                Router::redirect( HTTP_HOST );
            }
            //
        }
        //
    }
    //

    public function forgetpassword() {

    }
    //

    public function otpValidation() {

    }
    //

    public function resetPassword() {

    }
    //

    public function sucess() {

    }
    //

    public function owner_logout() {
        //
        Session::destroy();
        Router::redirect( HTTP_HOST );
        //
    }
    //

}

?>