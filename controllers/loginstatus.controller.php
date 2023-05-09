<?php
//
// print_r($_SESSION);
//
$owner_id = Session::get( 'owner_id' );
//
if ( $owner_id  == '' ) {
    Router::redirect( HTTP_HOST );
}
//
if ( Session::get( 'staff_id' ) != '' ) {
    Session::set( 'staff_login', 'YES' );
    $staff_id = Session::get( 'staff_id' );
} else {
    Session::set( 'staff_login', 'NO' );
    $staff_id = '';
}
//
?>