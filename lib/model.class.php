<?php
//

class Model {
    //
    public $pass_phrase = '0lu5nj57id9t0w8f90t98y224jns9rk05l64o90ed09s8g9c9d0g83523j31k2u5l6o3p5n5b6v8x7';
    //
    public static function encrypt( $encrypt, $key ) {
        //
        $master_key = hash( 'sha256', $pass_phrase );
        define( 'ENCRYPTION_KEY', $master_key );
        //
        if ( $_ENV[ 'S2G_SERVER_SOFTWARE' ] == 'Server2Go 1.8.2' ) {
            //
            $encrypt = serialize( $encrypt );
            $iv = mcrypt_create_iv( mcrypt_get_iv_size( MCRYPT_RIJNDAEL_256, MCRYPT_MODE_CBC ), MCRYPT_DEV_URANDOM );
            $key = pack( 'H*', ENCRYPTION_KEY );
            $mac = hash_hmac( 'sha256', $encrypt, substr( bin2hex( $key ), -32 ) );
            $passcrypt = mcrypt_encrypt( MCRYPT_RIJNDAEL_256, $key, $encrypt . $mac, MCRYPT_MODE_CBC, $iv );
            $encoded = base64_encode( $passcrypt ) . '|' . base64_encode( $iv );
            //
            return $encoded;
            //
        } else {
            //
            $cipher = 'aes-128-cbc';
            $ivlen = openssl_cipher_iv_length( $cipher );
            $iv = substr( md5( ENCRYPTION_KEY ), 0, $ivlen );
            $encrypt = serialize( $encrypt );
            $ciphertext = openssl_encrypt( $encrypt, $cipher, ENCRYPTION_KEY, $options = 0, $iv );
            $encoded = base64_encode( $ciphertext );
            //
            return $encoded;
            //
        }
        //
        return $master_key;
        //
    }
    //
    public static function decrypt( $decrypt, $key ) {
        //
        if ( $_ENV[ 'S2G_SERVER_SOFTWARE' ] == 'Server2Go 1.8.2' ) {
            //
            $master_key = hash( 'sha256', $pass_phrase );
            define( 'ENCRYPTION_KEY', $master_key );
            //
            $decrypt = explode( '|', $decrypt );
            $decoded = base64_decode( $decrypt[ 0 ] );
            $iv = base64_decode( $decrypt[ 1 ] );
            //
            if ( strlen( $iv ) !== mcrypt_get_iv_size( MCRYPT_RIJNDAEL_256, MCRYPT_MODE_CBC ) ) {
                return 'String Length Issue!';
            }
            //
            $key = pack( 'H*', ENCRYPTION_KEY );
            $decrypted = trim( mcrypt_decrypt( MCRYPT_RIJNDAEL_256, $key, $decoded, MCRYPT_MODE_CBC, $iv ) );
            $mac = substr( $decrypted, -64 );
            $decrypted = substr( $decrypted, 0, -64 );
            $calcmac = hash_hmac( 'sha256', $decrypted, substr( bin2hex( $key ), -32 ) );
            //
            if ( $calcmac !== $mac ) {
                return 'Mac Mismatched!';
            }
            //
            $decrypted = unserialize( $decrypted );
            //
            return $decrypted;
            //
        } else {
            //
            $cipher = 'aes-128-cbc';
            $ivlen = openssl_cipher_iv_length( $cipher );
            $iv = substr( md5( ENCRYPTION_KEY ), 0, $ivlen );
            $decodetext = base64_decode( $decrypt );
            $originaltext = openssl_decrypt( $decodetext, $cipher, ENCRYPTION_KEY, $options = 0, $iv );
            $originaltext = unserialize( $originaltext );
            //
            return $originaltext;
            //
        }
        //
    }
    //
}
?>