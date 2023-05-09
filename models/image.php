<?php

/*
* **************************************************************************************
* @tutorial: Image Model
* **************************************************************************************
*
* Created on 14-Jan-2023 6:00:00 am
*
* @FileName: image.php
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

class Image extends Model {

    //

    public function moveImageToFolder( $image_request ) {
        //
        $image_id = $image_request[ 'image_id' ];
        $filename = trim( $image_request[ 'image_name' ] );
        $filetype = $image_request[ 'image_type' ];
        $file_size = $image_request[ 'image_size' ];
        $filetempname = $image_request[ 'image_tmp_name' ];
        $image_folder = $image_request[ 'image_folder' ];
        $fileExtension = pathinfo( $filename, PATHINFO_EXTENSION );
        //
        if ( $filetempname != '' ) {
            $file_content = file_get_contents( $filetempname );
        }
        //
        if ( $filename == '' || $filename == NULL || $file_size == 0 || $file_size == NULL ) {
            //
            $file_size_in_MB = 0;
            $snapFile = NULL;
            //
        } else {
            //
            $snapFile = $file_content;
            //
            $file_size_in_MB = ( float ) ( $file_size / ( 1024 * 1024 ) );
            $imageFileSize = $file_size;
            //
            if ( ( float ) $imageFileSize > 0 ) {
                //
                $images_erp = 'images_'. SOFTWARE_NAME;
                //
                if ( GB_SYSTEM_ONOFF == 'ON' ) {
                    //
                    $dirPath = realpath( __DIR__ . '/../../..' ).'/'.$images_erp;
                    //
                    if ( !is_dir( $dirPath ) ) {
                        mkdir( $dirPath, 0777 );
                    }
                    //
                    $dirName = $dirPath . '/' . Session::get( 'owner_id' );
                    //
                    if ( !is_dir( $dirName ) ) {
                        mkdir( $dirName, 0777 );
                    }
                    //
                } else {
                    //
                    $dirPath = realpath( __DIR__ . '/../../..' ).'\dbdir\\'.$images_erp;
                    //
                    if ( !is_dir( $dirPath ) ) {
                        mkdir( $dirPath, 0777 );
                    }
                    //
                    $dirName = $dirPath . '\\' . Session::get( 'owner_id' );
                    //
                    if ( !is_dir( $dirName ) ) {
                        mkdir( $dirName, 0755 );
                    }
                    //
                }
                //
                if ( GB_SYSTEM_ONOFF == 'ON' ) {
                    //
                    if ( $image_folder != '' ) {
                        $erpDirName = $dirName . '//' . $image_folder;
                    } else {
                        $erpDirName = $dirName . '/image';
                    }
                    //
                    if ( !is_dir( $erpDirName ) ) {
                        mkdir( $erpDirName, 0777 );
                    }
                    //
                } else {
                    //
                    if ( $image_folder != '' ) {
                        $erpDirName = $dirName . '\\'. $image_folder;
                    } else {
                        $erpDirName = $dirName . '\\' . 'image';
                    }
                    //
                    if ( !is_dir( $erpDirName ) ) {
                        mkdir( $erpDirName, 0755 );
                    }
                    //
                }
                //
                if ( $fileExtension == '' || $fileExtension == NULL ) {
                    $fileExtension = 'jpg';
                }
                //
                if ( GB_SYSTEM_ONOFF == 'ON' ) {
                    $fileName = "$erpDirName/$image_id.$fileExtension";
                } else {
                    $fileName = "$erpDirName" . '\\' . "$image_id.$fileExtension";
                }
                //
                $fileNameWithJpeg = $erpDirName . '/' . $image_id . '.jpeg';
                $file_jpeg_exists_status = file_exists( $fileNameWithJpeg );
                //
                if ( $file_jpeg_exists_status == TRUE ) {
                    unlink( $fileNameWithJpeg );
                } else if ( $file_jpeg_exists_status != TRUE ) {
                    $fileNameWithJpg = $erpDirName . '/' . $image_id . '.jpg';
                    $file_jpg_exists_status = file_exists( $fileNameWithJpg );
                }
                //
                if ( $file_jpg_exists_status == TRUE ) {
                    unlink( $fileNameWithJpg );
                } else if ( $file_jpg_exists_status != TRUE ) {
                    $fileNameWithPng = $erpDirName . '/' . $image_id . '.png';
                    $file_png_exists_status = file_exists( $fileNameWithPng );
                }
                //
                if ( $file_png_exists_status == TRUE ) {
                    unlink( $fileNameWithPng );
                }
                //
                file_put_contents( $fileName, $snapFile );
                //
            }
        }
    }

    public function moveWebImageToFolder( $webimg_request ){
        $img = $webimg_request[ 'enc_image' ];
        $image_parts = explode( ';base64,', $img );
        $image_type_aux = explode( 'image/', $image_parts[ 0 ] );
        $image_id = $webimg_request[ 'image_id' ];
        $filetype = $image_type_aux[ 1 ];
        $file_size = 1;
        $snapFile = base64_decode( $image_parts[ 1 ] );
        $image_folder = $webimg_request[ 'image_folder' ];
        $fileExtension = '';

        if ($file_size == 0 || $file_size == NULL ) {
            //
            $file_size_in_MB = 0;
            $snapFile = NULL;
            //
        } else {
            //
            $file_size_in_MB = ( float ) ( $file_size / ( 1024 * 1024 ) );
            $imageFileSize = $file_size;
            //
            if ( ( float ) $imageFileSize > 0 ) {
                //
                $images_erp = 'images_'. SOFTWARE_NAME;
                //
                if ( GB_SYSTEM_ONOFF == 'ON' ) {
                    //
                    $dirPath = realpath( __DIR__ . '/../../..' ).'/'.$images_erp;
                    //
                    if ( !is_dir( $dirPath ) ) {
                        mkdir( $dirPath, 0777 );
                    }
                    //
                    $dirName = $dirPath . '/' . Session::get( 'owner_id' );
                    //
                    if ( !is_dir( $dirName ) ) {
                        mkdir( $dirName, 0777 );
                    }
                    //
                } else {
                    //
                    $dirPath = realpath( __DIR__ . '/../../..' ).'\dbdir\\'.$images_erp;
                    //
                    if ( !is_dir( $dirPath ) ) {
                        mkdir( $dirPath, 0777 );
                    }
                    //
                    $dirName = $dirPath . '\\' . Session::get( 'owner_id' );
                    //
                    if ( !is_dir( $dirName ) ) {
                        mkdir( $dirName, 0755 );
                    }
                    //
                }
                //
                if ( GB_SYSTEM_ONOFF == 'ON' ) {
                    //
                    if ( $image_folder != '' ) {
                        $erpDirName = $dirName . '//' . $image_folder;
                    } else {
                        $erpDirName = $dirName . '/image';
                    }
                    //
                    if ( !is_dir( $erpDirName ) ) {
                        mkdir( $erpDirName, 0777 );
                    }
                    //
                } else {
                    //
                    if ( $image_folder != '' ) {
                        $erpDirName = $dirName . '\\'. $image_folder;
                    } else {
                        $erpDirName = $dirName . '\\' . 'image';
                    }
                    //
                    if ( !is_dir( $erpDirName ) ) {
                        mkdir( $erpDirName, 0755 );
                    }
                    //
                }
                //
                if ( $fileExtension == '' || $fileExtension == NULL ) {
                    $fileExtension = 'jpg';
                }
                //
                if ( GB_SYSTEM_ONOFF == 'ON' ) {
                    $fileName = "$erpDirName/$image_id.$fileExtension";
                } else {
                    $fileName = "$erpDirName" . '\\' . "$image_id.$fileExtension";
                }
                //
                $fileNameWithJpeg = $erpDirName . '/' . $image_id . '.jpeg';
                $file_jpeg_exists_status = file_exists( $fileNameWithJpeg );
                //
                if ( $file_jpeg_exists_status == TRUE ) {
                    unlink( $fileNameWithJpeg );
                } else if ( $file_jpeg_exists_status != TRUE ) {
                    $fileNameWithJpg = $erpDirName . '/' . $image_id . '.jpg';
                    $file_jpg_exists_status = file_exists( $fileNameWithJpg );
                }
                //
                if ( $file_jpg_exists_status == TRUE ) {
                    unlink( $fileNameWithJpg );
                } else if ( $file_jpg_exists_status != TRUE ) {
                    $fileNameWithPng = $erpDirName . '/' . $image_id . '.png';
                    $file_png_exists_status = file_exists( $fileNameWithPng );
                }
                //
                if ( $file_png_exists_status == TRUE ) {
                    unlink( $fileNameWithPng );
                }
                //
                file_put_contents( $fileName, $snapFile );
                //
            }
        }
    }
}

?>