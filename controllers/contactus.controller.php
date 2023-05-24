<?php

/*
* **************************************************************************************
* @tutorial: Contactus Controller
* **************************************************************************************
*
* Created on 23-May-2023 2:27:00 pm
*
* @FileName: Contactus.controller.php
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
$contactr_model_path = ROOT . DS . 'models' . DS . 'contact.php';
require_once $contactr_model_path;

class ContactusController extends Controller {
    //

    public function __construct() {
        $this->ContactModel = new Contact();
    }
    //

    public function index() {
        //
        if ( $_REQUEST[ 'visitor_fname' ] != '' ) {
            $request = array();
            $request = $_REQUEST;
            $visitor_type = $_REQUEST[ 'visitor_type' ];
            $sub_page = $_REQUEST[ 'sub_page' ];
            $request[ 'function_name' ] = 'set_visitor';
            $request[ 'operation' ] = 'insert';
            //
            $response = $this->ContactModel->visitor_transaction( $request );
            //
            if ( $response[ 'visitor_id' ] != '' ) {
                Session::set( 'visitor_response', 'YES' );
            } else {
                Session::set( 'visitor_response', 'NO' );
            }
            //
            Router::redirect( HTTP_HOST.'/contactus' );
            //
        }
    }
    //
}

?>