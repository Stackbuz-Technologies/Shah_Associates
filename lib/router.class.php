<?php
//

class Router {
    //
    public static function redirect( $url, $arrayName = array()) {
        //
        if ( !isset( $url ) ) {
            $controller = Config::get( 'default_controller' );
            $url = HTTP_HOST . '/'.$controller;
        }
        //
        header( 'Location: ' .$url );
        //
    }
    //
}
?>