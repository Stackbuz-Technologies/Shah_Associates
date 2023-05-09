<?php

/*
 * **************************************************************************************
 * @tutorial: Image Controller
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

//
class ImageController extends Controller {

    //
    public function __construct($parameter) {
        $this->para = $parameter;
    }

    //
    public function index() {
        //
        require ROOT . DS . 'controllers' . DS . 'loginstatus.controller.php';
        //
        $this->data = $this->para;
    }
    public function show() {
        //
        require ROOT . DS . 'controllers' . DS . 'loginstatus.controller.php';
        // print_r($this->para);
        //
        $this->data = $this->para;
    }
   

}

?>