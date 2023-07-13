<?php
//
require_once 'config.class.php';
require_once '../config/config.php';
require_once 'view.class.php';
//

class App {
    //

    public static function run( $url ) {
        //
        // creating view class object to call view
        //
        $param = array();
        //
        $urlArray = explode( '/', $url );
        //
        if ( file_exists( ROOT.DS.'controllers/'.$urlArray[ 0 ].'.controller.php' ) ) {
            $controller = $urlArray[ 0 ];
            unset( $urlArray[ 0 ] );
            $viewfolder = $controller;
        } else {
            $controller = Config::get( 'default_controller' );
            $viewfolder = 'error404';
        }
        //
        $controllerFile = ROOT.DS.'controllers/'.$controller.'.controller.php';
        //
        // calling controller file
        //
        require_once $controllerFile;
        //
        // making controller class and set default method parameter
        //
        $controller = $controller.'Controller';
        $default_method = Config::get( 'default_action' );
        //
        // reseting the parametr array
        $param = $urlArray;
        unset( $param[ 1 ] );
        unset( $param[ 2 ] );
       
        if ( isset( $param[ 3 ] ) ) {
            $param = array_values( $param );
        }
        //
        // making controller class object
        //
        $controller_obj = new $controller( $param );
        //
        // checking method exist or not if not calling default method
        //
        // print_r($urlArray);
        if ( isset( $urlArray[ 1 ] ) ) {
            if ( method_exists( $controller_obj, $urlArray[ 1 ] ) ) {
                $method_name = $urlArray[ 1 ];
                unset( $urlArray[ 1 ] );
                // generating new view url to get file and params
                $viewUrl = $viewfolder.'/'.$method_name;
                $filepathurl = $viewUrl;
                //
                $controller_obj->$method_name();
                //
            }else{
                //setting error if method not exist
                //
                $viewUrl = $viewfolder.'/error404';
            }
        } else {
            $controller_obj-> $default_method();
            $viewUrl = $viewfolder;
        }
        if (isset( $urlArray[ 2 ] )) {
            unset( $param[ 2 ] );  // third parameter is file 
            $viewUrl = $filepathurl.'/'.$urlArray[ 2 ];
        } 
        
        // echo '$viewUrl=='.$viewUrl;
        //
        // calling view of that viewUrl and passing controller data
        //
        $view_obj = new View();
        $view_obj->renderPage( $viewUrl, $controller_obj->data );

    }
    //
}
//
?>