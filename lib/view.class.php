<?php
require_once 'config.class.php';
require_once '../config/config.php';

class View {

    public $data = array();

    public function renderPage( $url, $data ) {
        //
        $this->data = $data;
        //
        $default_template = Config::get( 'default_theme' );
        $error_controller =  Config::get( 'default_error_controller' );
         // checking default theme and if url have index method
        if ( $default_template != '' ) {
            $filePath = ROOT.DS.'views'.DS.$default_template.DS.$url.'.html';
        } else {
            $filePath = ROOT.DS.'views'.DS.$url.'.html';
        }
        // echo "filepayh==".$filePath."<br>";
        // die;
        //
        if ( file_exists( $filePath ) ) {
            include_once $filePath;
            // echo 'babab';
        } else {
             // checking default theme and if url have index method if not setting index by default
            if ( $default_template != '' ) {
                $filePath = ROOT.DS.'views'.DS.$default_template.DS.$url.DS.'index.html';
                $errorfile = ROOT.DS.'views'.DS.$default_template.DS.$error_controller.DS.'index.html';
            } else {
                $filePath = ROOT.DS.'views'.DS.$url.DS.'index.html';
                $errorfile = ROOT.DS.'views'.DS.$error_controller.DS.'index.html';
            }
            if ( file_exists( $filePath ) ) {
                include_once $filePath;
            } else {
                include_once $errorfile;
            }
        }
        // echo $filePath;
        // die;
        //
    }

    public function renderPath( $renderPath) {
        $data = $this->data;
        $default_template = Config::get( 'default_theme' );
        if ( $default_template != '' ) {
            $filePath = ROOT.DS.'views'.DS.$default_template.DS.$renderPath.'.html';
        } else {
            $filePath = ROOT.DS.'views'.DS.$renderPath.'.html';
        }
        if ( file_exists( $filePath ) ) {
            include $filePath;
        } else {
            return 'File Not Found';
        }

    }
}
?>