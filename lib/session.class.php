<?php
//
if ( !isset( $_SESSION ) ) {
    session_start();
}
//

class Session {
    //
    public static function set( $key, $value ) {
        if ( $key != '' && $key != NULL ) {
            $_SESSION[ "$key" ] = $value;
        } else {
            return false;
        }
    }

    //
    public static function get( $key ) {
        if ( $key != '' && $key != NULL ) {
            return $_SESSION[ $key ];
        } else {
            return false;
        }
    }

    //
    public static function destroy() {
        session_destroy();
    }
}
//
?>