<?php

/*
* **************************************************************************************
* @tutorial: Account Controller
* **************************************************************************************
*
* Created on 14-Jan-2023 6:00:00 am
*
* @FileName: account.controller.php
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

$admin_model_path = ROOT . DS . 'models' . DS . 'admin.php';
require_once $admin_model_path;
//
$contact_model_path = ROOT . DS . 'models' . DS . 'contact.php';
require_once $contact_model_path;

class AdminController extends Controller {
    //
    public $response = array( 'error' => FALSE );
    //
    public function __construct() {
        $this->param = $parameter;
        $this->AdminModel = new admin();
        $this->ContactModel = new contact();
    }
    //

   
    public function index() {
     //
        $param = $this->param;
        //
        if ( $_REQUEST[ 'admin_email' ] != '' && $_REQUEST[ 'admin_password' ] != '' ) {
            //
            $request = array();
            //
            $request[ 'admin_email' ] = $_REQUEST[ 'admin_email' ];
            $request[ 'admin_password' ] = md5( $_REQUEST[ 'admin_password' ] );
            //
            $response = $this->AdminModel->admin_login( $request );
            //
            // echo "<pre>";
            // print_r($response);
            // echo "</pre>";
            // die();
            // //
            if ( $response != 'Admin not Found' ) {
                //
                Session::set( 'admin_email', $response[ 'admin_email' ] );
                Session::set( 'admin_password', $response[ 'admin_password' ] );
                Session::set( 'error_message', 'Login Successfull.' );
                Session::set( 'admin_login_status', 'YES' );
                Router::redirect( HTTP_HOST.'/admin/admin_profile/index' );
                //
            } else {
                Session::set( 'error_message', 'Incorrect Email Id And Password' );
                $this->data['massge'] = 'Incorrect Email Id And Password'; 
                //
            }
            //
        }
        //
    }
    //
    //
    public function admin_profile() {
        if( Session::get( 'admin_email' ) == 'swapnilshahasso@gmail.com'){
        //
        $request = array();
        //
        $request[ 'limit_from' ] = '0';
        $request[ 'limit_to' ] = '5';
        $response = $this->AdminModel->get_content( $request );
        if ( $response != 'Content not Found' ) {
            $this->data[ 'Content_Details' ] = $response;
        } else {
           $this->data[ 'Content_Details' ] = array();
        }
        //
        $request[ 'where_condition' ] = "visitor_type = 'contact_visitor'";
        $response = $this->ContactModel->get_visitors( $request );
        $this->data[ 'Visitor_Details' ] = $response;
    } else{
        Router::redirect( HTTP_HOST.'/home/index' );
    }
    }

    public function add_content() {
             $request = array();
             $request = $_REQUEST;
            //
            $response = $this->AdminModel->curd_content( $request );
            if ( $response != 'Content not Found' ) {
                $this->data[ 'Content_Details' ] = $response;
            } else {
               $this->data[ 'Content_Details' ] = array();
            }
            
            Router::redirect( HTTP_HOST.'/admin/admin_profile/index' );
    }
    //
    public function delete_content() {

        if ( $_REQUEST[ 'content_id' ] != '' ) {
            $request = array();
            $request[ 'content_id' ] = $_REQUEST[ 'content_id' ];
            $request[ 'operation' ] = 'delete';

            //      echo "<pre>";
            // print_r($request);
            // echo "</pre>";
            // die();
            // //
            $response = $this->AdminModel->curd_content( $request );
            $this->data = $_REQUEST;
        }

             $request = array();
             $request = $_REQUEST;
            //
            $response = $this->AdminModel->curd_content( $request );
            if ( $response != 'Content not Found' ) {
                $this->data[ 'Content_Details' ] = $response;
            } else {
               $this->data[ 'Content_Details' ] = array();
            }
            
            Router::redirect( HTTP_HOST.'/admin/admin_profile/index' );
    }
    //

    public function logout() {
        //
        Session::destroy();
        Router::redirect( HTTP_HOST );
        //
    }
    //

}

?>