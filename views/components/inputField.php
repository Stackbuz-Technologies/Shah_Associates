<?php
/*
* **************************************************************************************
* @tutorial: UNIVERSAL INPUT FIELD FILE
* **************************************************************************************
*
* Created on 20-Feb-2023 1:00:00 pm
*
* @FileName: inputField.php
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
if ( $inputType == 'text' || $inputType == 'number' ||  $inputType == 'hidden' || $inputType == 'file' || $inputType == 'password' ||  $inputType == 'date') {

    include 'inputFieldText.php';

} else if ( $inputType == 'radio' || $inputType == 'checkbox') {

    include 'inputFieldRadio.php';

} else if ( $inputType == 'select' ) {
    include 'inputFieldSelect.php';

} else if ( $inputType == 'button' || $inputType == 'submit' || $inputType == 'reset' ) {

    // include 'omInputFieldButton.php';

} else if ( $inputType == 'textarea' ) {

    include 'inputTextArea.php';

}
$inputFieldClass = '';
$inputId = '';
$inputDivId = '';
$inputFieldDBQuery = '';
$inputFieldValue = '';
$inputKeyUpFun = '';
$inputKeyDownFun = '';
$inputOnBlurFun = '';
$inputOnClickFun = '';
$inputOnDoubleClickFun = '';
$isNumOnly = '';
$isAlphaOnly = '';
$isAlphaNumOnly = '';
$isAlphaOnlyWithSpecialChar = '';
$isAlphaWithSomeSpecialChar = '';
$isAlphaNumWithSomeSpecialChar = '';
$isAlphaNumWithSomeSpecialCharSpace = '';
$inputLabel = '';
$inputLabelBoxClass = '';
$inputGoogleSuggDivId = '';
$inputFieldColumnName = '';
$inputReadOnly = '';
$selectStaticDropDown = '';
$selectStaticDropDownArray = '';
$staticDropDownArrayCount = '';
$selectValueStaticDropDownArray = '';
$inputTitle = '';
$inputPlaceHolder = '';
$inputLabelDivText = '';
$inputStyle = '';
$selectFieldSelected = '';
$addPlusDiv = '';
$addStoneDiv = '';
$autoComplete = '';
$inputAutoFocus = '';
$requiredField = '';
$inputDisabled = '';
$nextFieldId = '';
$nextMandatoryFieldId = '';
$inputFieldPrevId = '';
$inputFieldFunction = '';
$inputMandatoryFieldFunction = '';
$inputEnterKeyFunction = '';
$prevFieldFunction = '';
$optionArray = array();
$selectedData = '';
$acceptType = '';
$displaynameShowYesORNo ='';
$displaynameShow ='';
$selectedChecked='';
$assocArrayOption = '';
$inputOnChange='';
$inputTextCols = '';
$inputTextRows = '';
$showDefaultOption = ''; // showing default option or not
?>