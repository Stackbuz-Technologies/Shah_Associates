<?php

/*
* **************************************************************************************
* @tutorial: Dashboard Controller
* **************************************************************************************
*
* Created on 14-Jan-2023 6:00:00 am
*
* @FileName: dashboard.controller.php
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
$staff_model_path = ROOT . DS . 'models' . DS . 'staff.php';
require_once $staff_model_path;
//
$dashboard_model_path = ROOT . DS . 'models' . DS . 'dashboard.php';
require_once $dashboard_model_path;
//
$company_model_path = ROOT . DS . 'models' . DS . 'company.php';
require_once $company_model_path;
//
$setting_model_path = ROOT . DS . 'models' . DS . 'settings.php';
require_once $setting_model_path;
//
//
$customer_model_path = ROOT . DS . 'models' . DS . 'customer.php';
require_once $customer_model_path;
//
//
$customer_model_path = ROOT . DS . 'models' . DS . 'supplier.php';
require_once $customer_model_path;
//
class DashboardController extends Controller {

    //

    public function __construct( $parameter ) {

        $this->StaffModel = new Staff();
        $this->DashboardModel = new Dashboard();        
        $this->CompanyModel = new Company();
        $this->CustomerModel = new Customer();
        $this->SettingsModel = new Settings();
        $this->SupplierModel = new Supplier();
        $this->param = $parameter;

    }

    //

    public function index() {
        //
        require ROOT . DS . 'controllers' . DS . 'loginstatus.controller.php';
        //
        $dashboard_request = array();
        $dashboard_request[ 'owner_id' ] = Session::get( 'owner_id' );
        $dashboard_data = $this->DashboardModel->get_data( $dashboard_request );
        $this->data[ 'dashboard_data' ] = $dashboard_data;
        //
        Session::set( 'default_country', $dashboard_data[ 'default_country_name' ] );
        Session::set( 'default_state', $dashboard_data[ 'default_state_name' ] );
        Session::set( 'default_city', $dashboard_data[ 'default_city_name' ] );
        //
        if ( ( Session::get( 'staff_login' ) == 'YES' ) && ( Session::get( 'staff_id' ) != '' && Session::get( 'staff_id' ) != NULL ) ) {
            //
            $request = array();
            $request[ 'function_name' ] = 'get_staff_access';
            $request[ 'staff_id' ] = $staff_id;
            $request[ 'owner_id' ] = Session::get( 'owner_id' );
            $response = $this->StaffModel->manage_staff_access( $request );
            //
            if ( sizeof( $response ) > 0 ) {
                //
                for ( $stafflist = 0; $stafflist < sizeof( $response );
                $stafflist++ ) {
                    //
                    $staff_access_name = $response[ $stafflist ][ 'staff_access_name' ];

                    $staff_access_name_one = str_replace( '/', '_', $staff_access_name );
                    $$staff_access_name_two = str_replace( ' ', '_', $staff_access_name_one );
                    $session_name = $$staff_access_name_two;
                    $staff_access_value = $response[ $stafflist ][ 'staff_access_value' ];
                    Session::set( $$staff_access_name_two, $staff_access_value );
                    //
                }
                //
            }
            //
            require ROOT . DS . 'controllers' . DS . 'staffaccess.controller.php';
            //
        }
        //================================================================================================================
        $session_comapny_id = Session::get('company_id');   
        if($componyid !=''){
            unset($_SESSION['showPopup']);
        }
    //====================================================POPUP FOR DEFAULT FIRM SELECTION================================
    $request = array();
    $request[ 'function_name' ] = 'get_company';
    //
    $response = $this->CompanyModel->manage_company( $request );
    //
    if($response !='Company Not Found'){
        $this->data[ 'company_list' ] = $response;
    }else{
        $this->data[ 'company_list' ] = array();
    }
    //
    $request = array();
    $request[ 'function_name' ] = 'get_common_setting';
    $request[ 'req_skip' ] = 'YES';
    $settingResponse = $this->SettingsModel->manage_common_setting( $request );
    if ( $settingResponse != 'Setting Not Found' ) {
        $this->data[ 'common_setting' ] = $settingResponse;
    } else {
        $this->data[ 'common_setting'] = array();
    }
    }

    public function dashboard(){
        //
        require ROOT . DS . 'controllers' . DS . 'loginstatus.controller.php';
        //
    }
    public function searchall(){
        $request = array();
        $searching = $_REQUEST['searching'];
        $this->data['searching'] =$searching; 
        $str = substr($searching, 1);
        if($searching[0] == 'P' || $searching[0] == 'p'){  // product searching
            Router::redirect(HTTP_HOST."/product/productlist/product_details/?searchProCode=".$str);
        } else if($searching[0] == 'C' || $searching[0] == 'c'){
            Router::redirect(HTTP_HOST."/customer/detail/customer_details/?customerId=".$str);
        } else if($searching[0] == 'S' || $searching[0] == 's'){
            Router::redirect(HTTP_HOST."/supplier/detail/supplier_details/?supplierId=".$str);
        } else if($searching[0] == 'U' || $searching[0] == 'u'){
            Router::redirect(HTTP_HOST."/staff/detail/staff_details/?staffId=".$str);
        } else{
            Router::redirect(HTTP_HOST."/dashboard/dashboard/dashboard");
        }
        
    }
    public function product(){
        //
        require ROOT . DS . 'controllers' . DS . 'loginstatus.controller.php';
        // 
    }
}
?>