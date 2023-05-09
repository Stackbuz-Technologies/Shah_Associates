<?php

/*
 * **************************************************************************************
 * @tutorial: 
 * **************************************************************************************
 * 
 * Created on 14-Jan-2023 6:00:00 am
 *
 * @FileName: encryption.php
 * @Author: Stackbuz Technologies Team
 * @AuthorEmailId:  info@stackbuz.com
 * @ProjectName: 
 * @version 1.0.0
 * @Copyright (c) 2022 www.stackbuz.com
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

$pass_phrase = '0lu5nj57id9t0w8f90t98y224jns9rk05l64o90ed09s8g9c9d0g83523j31k2u5l6o3p5n5b6v8x7';
$master_key = hash('sha256', $pass_phrase);
// Define a 32-byte (64 character) hexadecimal encryption key
// Note: The same encryption key used to encrypt the data must be used to decrypt the data
define('OM_ENCRYPT_KEY', $master_key);
//
// Encrypt Function
if ($_ENV["S2G_SERVER_SOFTWARE"] == 'Server2Go 1.8.2') {

    //
    function mc_encrypt($encrypt, $key) {
        $encrypt = serialize($encrypt);
        $iv = mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_CBC), MCRYPT_DEV_URANDOM);
        $key = pack('H*', OM_ENCRYPT_KEY);
        $mac = hash_hmac('sha256', $encrypt, substr(bin2hex($key), -32));
        $passcrypt = mcrypt_encrypt(MCRYPT_RIJNDAEL_256, $key, $encrypt . $mac, MCRYPT_MODE_CBC, $iv);
        $encoded = base64_encode($passcrypt) . '|' . base64_encode($iv);
        return $encoded;
    }

    //
} else {

    //
    function mc_encrypt($encrypt, $key) {
        $cipher = "aes-128-cbc";
        $ivlen = openssl_cipher_iv_length($cipher);
        $iv = substr(md5(OM_ENCRYPT_KEY), 0, $ivlen);
        $encrypt = serialize($encrypt);
        // Encrypt 
        $ciphertext = openssl_encrypt($encrypt, $cipher, OM_ENCRYPT_KEY, $options = 0, $iv);
        // Base 64 encode the encrypted 
        $encoded = base64_encode($ciphertext);
        // Return encrypted code
        return $encoded;
    }

    //
}
//
// Decrypt Function
if ($_ENV["S2G_SERVER_SOFTWARE"] == 'Server2Go 1.8.2') {

    //
    function mc_decrypt($decrypt, $key) {
        //
        $decrypt = explode('|', $decrypt);
        $decoded = base64_decode($decrypt[0]);
        $iv = base64_decode($decrypt[1]);
        if (strlen($iv) !== mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_CBC)) {
            return 'String Length Issue!';
        }
        $key = pack('H*', OM_ENCRYPT_KEY);
        $decrypted = trim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256, $key, $decoded, MCRYPT_MODE_CBC, $iv));
        $mac = substr($decrypted, -64);
        $decrypted = substr($decrypted, 0, -64);
        $calcmac = hash_hmac('sha256', $decrypted, substr(bin2hex($key), -32));
        if ($calcmac !== $mac) {
            return 'Mac Mismatched!';
        }
        $decrypted = unserialize($decrypted);
        //
        return $decrypted;
    }

} else {

    //
    function mc_decrypt($decrypt, $key) {
        //
        $cipher = "aes-128-cbc";
        $ivlen = openssl_cipher_iv_length($cipher);
        $iv = substr(md5(OM_ENCRYPT_KEY), 0, $ivlen);
        // Base 64 decrypt 
        $decodetext = base64_decode($decrypt);
        // Decrypt 
        $originaltext = openssl_decrypt($decodetext, $cipher, OM_ENCRYPT_KEY, $options = 0, $iv);
        //
        $originaltext = unserialize($originaltext);
        //
        // Return decrypted code
        return $originaltext;
    }

    //
}
?>