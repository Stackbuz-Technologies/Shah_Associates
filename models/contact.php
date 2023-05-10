<?php

/*
* ********************************************************
* @Tutorial: VISITOR MODEL FILE @AUTHOR:MADHUREE-27JAN2023
* ********************************************************
*
* Created on 27 JANUARY 2023 12:03:12 PM
*
* @FileName: visitor.php
* @Author: Stackbuz Developement Team
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

class Contact extends Model {

    // json response array
    public $response = array( 'error' => FALSE );
    //

    public function __construct() {

    }
    //

    public function visitor_transaction( $request ) {
        //
        $commonFieldArray = array(
            //
            'api_request_type' => 'WEBSITE',
            'api_login_token' => Session::get( 'api_login_token' ),
            'api_prod_key' => Session::get( 'api_prod_key' ),
            'api_request_id' => Session::get( 'api_request_id' ),
            'api_key' => GB_ECOM_API_KEY,
            //
            'domain_name' => GB_DOMAIN_NAME,
            'owner_id' => GB_OWNER_ID,
            'system_onoff' => GB_SYSTEM_ONOFF,
            //
            'owner_login_id' => Session::get( 'owner_login_id' ),
            'owner_user_staff_id' => Session::get( 'owner_user_staff_id' ),
            'owner_user_password' => Session::get( 'owner_user_password' )
            //
        );
        //
        $mergedArray = array_merge( $commonFieldArray, $request );
        $post_fields_arr = json_encode( $mergedArray );
        //
        $ch = curl_init();
        curl_setopt( $ch, CURLOPT_URL, GB_API_HOST . '/' . GB_API_FOLDER . '/visitor/' . $request[ 'function_name' ] );
        curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt( $ch, CURLOPT_POST, 1 );
        curl_setopt( $ch, CURLOPT_POSTFIELDS, $post_fields_arr );
        curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, true );
        curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'POST' );
        curl_setopt( $ch, CURLOPT_POSTREDIR, 3 );
        //
        $result = curl_exec( $ch );
        $result_arr = json_decode( $result, true );
        //
        curl_close( $ch );
        return $result_arr;
        //
    }

}

?>