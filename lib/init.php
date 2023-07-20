<?php
//
require_once ROOT . DS . 'lib' . DS . 'config.class.php';
require_once ROOT . DS . 'lib' . DS . 'session.class.php';
require_once ROOT . DS . 'lib' . DS . 'app.class.php';
require_once ROOT . DS . 'lib' . DS . 'router.class.php';
require_once ROOT . DS . 'lib' . DS . 'controller.class.php';
require_once ROOT . DS . 'lib' . DS . 'view.class.php';
require_once ROOT . DS . 'lib' . DS . 'model.class.php';
//
$url = $_SERVER[ 'REQUEST_URI' ];
//
$urlArray = explode( '/', filter_var( trim( $url, '/' ), FILTER_SANITIZE_URL ) );
//
if ( PROJECT_DIR != '' ) {
    unset( $urlArray[ 0 ] );
    $urlArray = array_values( $urlArray );
}
//
if ( $urlArray[ 0 ] == '' ) {
    $url = Config::get( 'default_controller' );
} else {
    $url = implode( '/', $urlArray );
}
// echo 'hiii';
App::run( $url );
?>