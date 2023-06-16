<?php

/*
* **************************************************************************************
* @tutorial: Home Controller
* **************************************************************************************
*
* Created on 20-Feb-2023 1:00:00 pm
*
* @FileName: home.controller.php
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

class HomeController extends Controller {
    //

    public function __construct( $parameter ) {
        $this->AdminModel = new admin();
        $this->ContactModel = new contact();
    }
    //

    public function index() {

        $response = $this->AdminModel->get_content( $request );
        if ( $response != 'Content not Found' ) {
            $this->data[ 'Content_Details' ] = $response;
        } else {
           $this->data[ 'Content_Details' ] = array();
        }
        

    }
    //
    public function register() {
    }
    //
}

?>