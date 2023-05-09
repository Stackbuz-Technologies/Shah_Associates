<?php

/*
* **************************************************************************************
* @tutorial: Contact Controller
* **************************************************************************************
*
* Created on 20-Feb-2023 1:00:00 pm
*
* @FileName: contact.controller.php
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
$contact_model_path = ROOT . DS . 'models' . DS . 'contact.php';
require_once $contact_model_path;
//

class ContactController extends Controller {
    //

    public function __construct( $parameter ) {
        //
        $this->ContactModel = new Contact();
        $this->param = $parameter;
        //
    }
    //

    public function index() {
        //
        if ( $_REQUEST[ 'operation' ] != '' ) {
            //
            $response = $this->ContactModel->add_visitor( $_REQUEST );
            //
            if ( $response[ 'tradesoft_visitor_id' ] != '' ) {
                Session::set( 'contact_status', 'success' );
            } else {
                Session::set( 'contact_status', 'error' );
            }
            //
        }
        //
    }
    //
}

?>