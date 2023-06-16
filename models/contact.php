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

$image_model_path = ROOT . DS . 'models' . DS . 'image.php';
require_once $image_model_path;
//

class Contact extends Model {

    // json response array
    public $response = array( 'error' => FALSE );
    //

    public function __construct() {

        $this->ImageModel = new Image();
    }
    //

    public function visitor_crud( $request ) {
        //
        $tableName = 'visitor';
        //
        require  ROOT . DS . 'models' . DS . 'configModel.php';
        //
        if ( $params[ 'req_skip' ] == 'YES' ) {
            $request = $params;
        }
        //
        if ( $request[ 'visitor_id' ] != '' ) {
            $visitor_id = $request[ 'visitor_id' ];
        }
        //
        $operation = $request[ 'operation' ];
        //
        if ( $operation == 'update' || $operation == 'insert' ) {
            //
            $qSelectColumnNames = 'SHOW COLUMNS FROM visitor';
            $resSelColumnNames = $conn->query( $qSelectColumnNames );
            //
            while ( $row = $resSelColumnNames->fetch_assoc() ) {
                //
                $tableColumnName = $row[ 'Field' ];
                $tableColumnValue = $conn->real_escape_string( stripslashes( trim( $request[ $tableColumnName ] ) ) );
                //
                if ( $tableColumnName != 'visitor_id' ) {
                    //
                    $tableColumnNameStr = $tableColumnNameStr . $tableColumnName . ',';
                    //
                    if ( $tableColumnName == 'visitor_since' || $tableColumnName == 'visitor_date') {
                        $drColumnValues = $drColumnValues . 'now(),';
                    } else if ( $tableColumnName != visitor_id ) {
                        $drColumnValues = $drColumnValues . "'$tableColumnValue',";
                        $drUpdateColumns .= "$tableColumnName='$tableColumnValue',";
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
            if ( $operation == 'insert' ) {
                //
                $query = "INSERT INTO visitor ($tableColumnNameStr)VALUES($drColumnValues)";
                //
                if ( !$conn->query( $query ) ) {
                    die( 'Error ('.$fileName.' Model)(Line No - ' . __LINE__ . '): ' . mysqli_error( $conn ) );
                }
                //
                $qSelectRecentEntry = 'SELECT visitor_id FROM visitor ORDER BY visitor_id DESC LIMIT 0,1';
                $resSelectRecentEntry = $conn->query( $qSelectRecentEntry );
                $rowSelectRecentEntry = $resSelectRecentEntry->fetch_assoc();
                //
                $returnResultArray = array( 'visitor_id' => $rowSelectRecentEntry[ 'visitor_id' ] );
                //
            } else if ( $operation == 'update' ) {
                //
                if ( $visitor_id != '' && $visitor_id != NULL ) {
                    //
                    $query = "UPDATE visitor SET $drUpdateColumns WHERE visitor_id = '$visitor_id'";
                    //
                    if ( !$conn->query( $query ) ) {
                        die( 'Error ('.$fileName.' Model)(Line No - ' . __LINE__ . '): ' . mysqli_error( $conn ) );
                    }
                    //
                }
                //
                $returnResultArray = array( 'visitor_id' => $visitor_id );
                //
            }
            //
            if ( $isEncrypt == 'Y' ) {
                $response = encrypt( json_encode( $returnResultArray ), $key );
            } else {
                $response = json_encode( $returnResultArray );
            }
            //
            return $response;
            //
        } else if ( $operation == 'delete' ) {
            //
            if ( $visitor_id != '' && $visitor_id != NULL ) {
                //
                $deleteQuery = "DELETE FROM visitor WHERE visitor_id = '$visitor_id'";
                //
                if ( !$conn->query( $deleteQuery ) ) {
                    die( 'Error ('.$fileName.' Model)(Line No - ' . __LINE__ . '): ' . mysqli_error( $conn ) );
                }
                //
            }
            //
        }
        //
    }
    //
    public function get_visitors( $params ) {
        //
        $tableName = 'visitor';
       //
        require  ROOT . DS . 'models' . DS . 'configModel.php';
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
       if ( $visitor_id != '' ) {
           if ( $where_condition != '' ) {
               $qSelectvisitorDetails = "SELECT * FROM visitor WHERE visitor_id='$visitor_id' AND $where_condition ORDER BY visitor_id DESC $queryLimitStr";
           } else {
               $qSelectvisitorDetails = "SELECT * FROM visitor WHERE visitor_id='$visitor_id' ORDER BY visitor_id DESC $queryLimitStr";
           }
           $resSelectvisitorDetails = $conn->query( $qSelectvisitorDetails );
           $noOfvisitorAvailable = $resSelectvisitorDetails->num_rows;

          
       } else {

           if ( $where_condition != '' ) {
               $qSelectvisitorDetails = "SELECT * FROM visitor WHERE $where_condition ORDER BY visitor_id DESC $queryLimitStr";
           } else {
               $qSelectvisitorDetails = "SELECT * FROM visitor ORDER BY visitor_id DESC $queryLimitStr";
           }
           
           $resSelectvisitorDetails = $conn->query( $qSelectvisitorDetails );
           $noOfvisitorAvailable = $resSelectvisitorDetails->num_rows;
       }
       //
       if ( $noOfvisitorAvailable > 0 ) {
           //
           $rowDetailsArr = array();
           $rowArrCounter = 0;
           //
           while ( $rowDetails = $resSelectvisitorDetails->fetch_assoc() ) {
               //
               // $visitor_resume_id = $rowDetails[ 'visitor_resume_id' ];
               $visitor_image_id = $rowDetails[ 'visitor_image_id' ];
               //
               if ( $visitor_id != '' && $visitor_image_id != '' ) {
                   //
                   $qSelectImageDetails = "SELECT image_snap_fname FROM image WHERE image_id='$visitor_image_id'";
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
           $rowDetailsArr = 'Visitor not Found';
           return $rowDetailsArr ;
           //
       }


    }

    public function get_visitor_history( $params ) {
        //
        require_once  ROOT . DS . 'models' . DS . 'configModel.php';
        //
        if ( $params[ 'req_skip' ] == 'YES' ) {
            $request = $params;
        }
        //
        $day1 = date( 'Y-m-d', strtotime( '-5 days' ) );
        $day2 = date( 'Y-m-d', strtotime( '-4 days' ) );
        $day3 = date( 'Y-m-d', strtotime( '-3 days' ) );
        $day4 = date( 'Y-m-d', strtotime( '-2 days' ) );
        $day5 = date( 'Y-m-d', strtotime( '-1 days' ) );
        //
        $qSelectVisitorData = "SELECT COUNT(*) AS visitor_count, visitor_date FROM visitor WHERE visitor_date IN ('$day1','$day2','$day3','$day4','$day5') GROUP BY visitor_date ORDER BY visitor_date DESC";
        //
        $resSelectVisitorData = $conn->query( $qSelectVisitorData );
        $noOfVisitorAvailable = $resSelectVisitorData->num_rows;
        //
        if ( $noOfVisitorAvailable > 0 ) {
            //
            $rowDetailsArr = array();
            $rowArrCounter = 0;
            //
            while ( $rowSelectVisitorData = $resSelectVisitorData->fetch_assoc() ) {
                //
                $rowDetailsArr[ $rowArrCounter ] = $rowSelectVisitorData;
                //
                $rowArrCounter++;
                //
            }
            //
            if ( $isEncrypt == 'Y' ) {
                $response = encrypt( json_encode( $rowDetailsArr ), $key );
            } else {
                $response = json_encode( $rowDetailsArr );
            }
            //
            return $response;
            //
        } else {
            //
            if ( $isEncrypt == 'Y' ) {
                $response = encrypt( json_encode( 'Visitor Not Found' ), $key );
            } else {
                $response = json_encode( 'Visitor Not Found' );
            }
            //
            return $response;
            //
        }
        //
    }
    //

}

?>