<?php
//

class Config {
    //
    public static function set( $defineCall, $defineValue ) {
        define( "$defineCall", "$defineValue" );
    }
    //
    public static function get( $defineCall ) {
        $defineOutput = constant( "$defineCall" );
        return $defineOutput;
    }
    //
}
?>