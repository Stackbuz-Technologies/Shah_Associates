<?php

/*
* **************************************************************
* @Tutorial: ADMIN API MODEL FILE @AUTHOR:YUVRAJ-27JAN2023
* **************************************************************
*
* Created on 27 JANUARY 2023 12:03:12 PM
*
* @FileName: ADMIN.php
* @Author: Stackbuz Developement Team
* @AuthorEmailId:  info@stackbuz.com
* @ProjectName: stackbuz api
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
//
$image_model_path = ROOT . DS . 'models' . DS . 'image.php';
require_once $image_model_path;
//


class Admin extends Model {

    //
    public $response = array( 'error' => FALSE );
    //

    public function __construct() {

        $this->ImageModel = new Image();
    }
    //
    public function admin_login() {
        //
        require_once  ROOT . DS . 'models' . DS . 'configModel.php';
        //
        $request = $_REQUEST;
        //
        //
        if ( $request[ 'admin_email' ] == '' || $request[ 'admin_password' ] == '' ) {
            //
            $response = array(
                'error' => TRUE,
                'status' => 'Fail',
                'message' => 'Username or password is missing!',
                'status_code' => 400
            );
            //
            return $response;
            //
        } else if ( $request[ 'admin_email' ] == 'swapnilshahasso@gmail.com' || $request[ 'admin_password' ] == 'Admin@123' ) {
            //
            $admin_email = $request[ 'admin_email' ];
            $admin_password = md5($request[ 'admin_password' ]);
            //
            $response = array(
                'error' => TRUE,
                'admin_email' => $request[ 'admin_email' ],
                'admin_password' => $request[ 'admin_password' ],
                'status' => 'Success',
                'message' => 'Login Successfull !',
                'status_code' => 400
            );
            return $response;
        //
      } else {
        $response = 'Admin not Found';
        return $response ;
       } 
    }
    //
    public function curd_content( $request ){
        //
        $tableName = 'content';
        require  ROOT . DS . 'models' . DS . 'configModel.php';

        $operation = $request[ 'operation' ];
        $content_id = $request[ 'content_id' ];

        // echo "API ";
        // echo "<pre>";
        // print_r($request);
        // echo "</pre>";
        // echo "<pre>";
        // print_r($_REQUEST);
        // echo "</pre>";
        // die();

        //
        if ( $operation == 'update' || $operation == 'insert' ) {
            //
            $qSelectColumnNames = 'SHOW COLUMNS FROM content';
            $resSelColumnNames = $conn->query( $qSelectColumnNames );
            //
            while ( $row = $resSelColumnNames->fetch_assoc() ) {
                //
                $tableColumnName = $row[ 'Field' ];
                $tableColumnValue = $conn->real_escape_string( stripslashes( trim( $request[ $tableColumnName ] ) ) );
                //
                if ( $tableColumnName != 'content_id' ) {
                    //
                    $tableColumnNameStr = $tableColumnNameStr . $tableColumnName . ',';
                    //
                    if ( $tableColumnName == 'content_since' ) {
                        $drColumnValues = $drColumnValues . 'now(),';
                    } else if ( $tableColumnName != content_id ) {
                        $drColumnValues = $drColumnValues . "'$tableColumnValue',";
                        if ( $tableColumnValue != '' ) {
                            $drUpdateColumns .= "$tableColumnName='$tableColumnValue',";
                        }
                    }
                    //
                }
                //
            }
            //
            $tableColumnNameStr = rtrim( $tableColumnNameStr, ',' );
            $drColumnValues = rtrim( $drColumnValues, ',' );
            $drUpdateColumns = rtrim( $drUpdateColumns, ',' );
            //
        // $readWritefile = fopen( ROOT . DS . 'models' . DS . strtolower( 'temp' ) . '.php', 'a' );
        // fwrite( $readWritefile, print_r($request, true).'operation In UPDATE = '.$operation );
        // fclose( $readWritefile );

            if ( $operation == 'insert' ) {
                //
                $query = "INSERT INTO content ($tableColumnNameStr)VALUES($drColumnValues)";
                //
                //
                if ( !$conn->query( $query ) ) {
                    die( 'Error ('.$fileName.' Model)(Line No - ' . __LINE__ . '): ' . mysqli_error( $conn ) );
                }
                //
                $qSelectRecentEntry = 'SELECT content_id FROM content ORDER BY content_id DESC LIMIT 0,1';
                $resSelectRecentEntry = $conn->query( $qSelectRecentEntry );
                $rowSelectRecentEntry = $resSelectRecentEntry->fetch_assoc();
                //
                $returnResultArray = array( 'content_id' => $rowSelectRecentEntry[ 'content_id' ] );
                //
            } else if ( $operation == 'update' ) {
                //
                if ( $content_id != '' && $content_id != NULL ) {
                    //
                    $query = "UPDATE content SET $drUpdateColumns WHERE content_id = '$content_id'";
                    

                    if ( !$conn->query( $query ) ) {
                        die( 'Error ('.$fileName.' Model)(Line No - ' . __LINE__ . '): ' . mysqli_error( $conn ) );
                    }
                    //
                }
                //
                $returnResultArray = array( 'content_id' => $content_id );
                //
            }
            //
            return $returnResultArray;
            //
        } else if ( $operation == 'delete' ) {

    

            //
            if ( $content_id != '' && $content_id != NULL ) {        

                //
                $deleteQuery = "DELETE FROM content WHERE content_id = '$content_id'";
                //
                if ( !$conn->query( $deleteQuery ) ) {
                    die( 'Error ('.$fileName.' Model)(Line No - ' . __LINE__ . '): ' . mysqli_error( $conn ) );
                }
                //
                $returnResultArray = array( 'content_id' => $content_id );
                //
                return $returnResultArray;
                //
            }
        }


    }

    //

    public function get_content( $request ) {
        //
        $tableName = "content";
        //
        require_once  ROOT . DS . 'models' . DS . 'configModel.php';
        //
        $user_id = $request[ 'user_id' ];
        $where_condition = $request[ 'where_condition' ];
        $limit_from = $request[ 'limit_from' ];
        $limit_to = $request[ 'limit_to' ];
        //
        if ( $limit_from != '' && $limit_to != '' ) {
            $queryLimitStr = " LIMIT $limit_from,$limit_to";
        } else {
            $queryLimitStr = '';
        }
        //
    
    
        if ( $content_id != '' ) {
            if ( $where_condition != '' ) {
                $qSelectcontentDetails = "SELECT * FROM content WHERE content_id='$content_id' AND $where_condition ORDER BY content_id DESC $queryLimitStr";
            } else {
                $qSelectcontentDetails = "SELECT * FROM content WHERE content_id='$content_id' ORDER BY content_id DESC $queryLimitStr";
            }
            $resSelectcontentDetails = $conn->query( $qSelectcontentDetails );
            $noOfcontentAvailable = $resSelectcontentDetails->num_rows;

           
        } else {
           

            if ( $where_condition != '' ) {
                $qSelectcontentDetails = "SELECT * FROM content WHERE $where_condition ORDER BY content_id DESC $queryLimitStr";
            } else {
                $qSelectcontentDetails = "SELECT * FROM content ORDER BY content_id DESC $queryLimitStr";
            }

            
            $resSelectcontentDetails = $conn->query( $qSelectcontentDetails );
            $noOfcontentAvailable = $resSelectcontentDetails->num_rows;
        }
        //
        if ( $noOfcontentAvailable > 0 ) {
            //
            $rowDetailsArr = array();
            $rowArrCounter = 0;
            //
            while ( $rowDetails = $resSelectcontentDetails->fetch_assoc() ) {
                //
                // $content_resume_id = $rowDetails[ 'content_resume_id' ];
                $content_image_id = $rowDetails[ 'content_image_id' ];
                //
                if ( $content_id != '' && $content_image_id != '' ) {
                    //
                    $qSelectImageDetails = "SELECT image_snap_fname FROM image WHERE image_id='$content_image_id'";
                    $resImageDetails = $conn->query( $qSelectImageDetails );
                    $rowImageDetails = $resImageDetails->fetch_assoc();
                    $image_snap_fname = $rowImageDetails[ 'image_snap_fname' ];
                    //
                    $rowDetails[ 'profile_image_snap_fname' ] = $image_snap_fname;
                    //
                }
                //
                $rowDetailsArr[ $rowArrCounter ] = $rowDetails;
                $rowArrCounter++;
                //
            }
            //
            return $rowDetailsArr;
            //
        } else {
            //
            $rowDetailsArr = 'Content not Found';
            return $rowDetailsArr ;
            //
        }

    }



}

?>