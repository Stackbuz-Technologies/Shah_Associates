
                    <input id = "<?php echo $inputId; ?>" name = "<?php echo $inputName; ?>" <?php if ($inputReadOnly != '') { ?>readonly="<?php echo $inputReadOnly; ?>"<?php } ?>
                   title = "<?php echo $inputTitle; ?>" <?php if ($inputTitle == 'this.value') { ?> onmouseover="javascript: this.title = this.value;"<?php } ?>
                   <?php if ($inputPlaceHolder != '') { ?>placeholder = "<?php echo $inputPlaceHolder; ?>"<?php } ?>
                   type = "<?php echo $inputType; ?>" 
                   class = "<?php echo $inputFieldClass; ?> <?php if ($requiredField == 'Y') { ?> inputRequired <?php } ?>"
                   <?php if ($autoComplete == '') $autoComplete = 'off'; ?>
                   autocomplete="<?php echo $autoComplete; ?>"
                   style = "<?php echo $inputStyle; ?>"
                   value="<?php echo $inputFieldValue; ?>"
                   <?php if ($inputKeyUpFun != '') { ?>
                       onkeyup="javascript: 
                       if(event.keyCode != 13){
                       <?php echo str_replace('HTTP_HOST',HTTP_HOST,$inputKeyUpFun); ?>; }"
                   <?php } ?>        
                   onkeydown = "javascript:if (event.keyCode === 13) {
                   <?php echo $inputFieldFunction; ?>
                   <?php echo $inputEnterKeyFunction; ?>
                   <?php if ($inputFieldNextId != '') { ?>
                                   document.getElementById('<?php echo $inputFieldNextId; ?>').focus();
                   <?php } ?>
                               return false;
                           } else if (event.keyCode === 9) {
                   <?php echo $inputMandatoryFieldFunction; ?>
                   <?php if ($inputFieldNextMandatoryId != '') { ?>
                                   document.getElementById('<?php echo $inputFieldNextMandatoryId; ?>').focus();
                                   return false;
                   <?php } ?>
                            //    return false;
                           } else if (event.keyCode === 8 && this.value == '') {
                   <?php if ($inputFieldPrevId != '') { ?>
                       <?php echo $prevFieldFunction; ?>
                                   document.getElementById('<?php echo $inputFieldPrevId; ?>').focus();
                   <?php } ?>
                               return false;
                           }
                   <?php if ($isNumOnly == 'Y') { // 8 backspace, 9 tab, 34 page down, 40 down arrow, 46 delete, 110 and 190 for '.', 20 FOR CAPS, 32 Space ?>
                               return (event.ctrlKey || event.altKey
                                       || (47 < event.keyCode && event.keyCode < 58 && event.shiftKey == false)
                                       || (95 < event.keyCode && event.keyCode < 106)
                                       || ((event.keyCode == 110 || event.keyCode == 190) && (this.value.indexOf('.') == -1))
                                       || (event.keyCode == 8) || (event.keyCode == 9)
                                       || (event.keyCode > 34 && event.keyCode < 41)
                                       || (event.keyCode == 46))
                   <?php } ?>
                   <?php if ($isAlphaOnly == 'Y') { ?>
                               return (event.ctrlKey || event.altKey
                                       || ((64 < event.keyCode && event.keyCode < 91) && (event.shiftKey == true || event.shiftKey == false))
                                       || ((96 < event.keyCode && event.keyCode < 123) && (event.shiftKey == true || event.shiftKey == false))
                                       || (event.keyCode == 8) || (event.keyCode == 9)
                                       || (event.keyCode > 34 && event.keyCode < 41)
                                       || (event.keyCode == 46) || (event.keyCode == 20))
                   <?php } ?>
                   <?php if ($isAlphaNumOnly == 'Y') { ?>
                               return (event.ctrlKey || event.altKey
                                       || (47 < event.keyCode && event.keyCode < 58 && event.shiftKey == false)
                                       || (95 < event.keyCode && event.keyCode < 106)
                                       || ((64 < event.keyCode && event.keyCode < 91) && (event.shiftKey == true || event.shiftKey == false))
                                       || ((96 < event.keyCode && event.keyCode < 123) && (event.shiftKey == true || event.shiftKey == false))
                                       || (event.keyCode == 110 || event.keyCode == 190)
                                       || (event.keyCode == 8) || (event.keyCode == 9)
                                       || (event.keyCode > 34 && event.keyCode < 41)
                                       || (event.keyCode == 46))
                   <?php } ?>
                   <?php if ($isAlphaOnlyWithSpecialChar == 'Y') { ?>
                               return (event.ctrlKey || event.altKey
                                       || ((64 < event.keyCode && event.keyCode < 91) && (event.shiftKey == true || event.shiftKey == false))
                                       || ((96 < event.keyCode && event.keyCode < 123) && (event.shiftKey == true || event.shiftKey == false))
                                       || ((47 < event.keyCode && event.keyCode < 58) && (event.shiftKey == true || event.shiftKey == false))
                                       || (event.keyCode == 110 || event.keyCode == 190)
                                       || (event.keyCode == 110 || event.keyCode == 173 || event.keyCode == 189)
                                       || (event.keyCode == 8) || (event.keyCode == 9)
                                       || (event.keyCode > 34 && event.keyCode < 41)
                                       || (event.keyCode == 46) || (event.keyCode == 20))
                   <?php } ?>
                   <?php if ($isNumOnlyWithSpecialChar == 'Y') { ?>
                    return (event.ctrlKey || event.altKey
                                       || (47 < event.keyCode && event.keyCode < 58 && (event.shiftKey == true || event.shiftKey == false))
                                       || (95 < event.keyCode && event.keyCode < 106 && (event.shiftKey == true || event.shiftKey == false))
                                       || ((event.keyCode == 110 || event.keyCode == 190) && (this.value.indexOf('.') == -1))
                                       || (event.keyCode == 8) || (event.keyCode == 9)
                                       || (event.keyCode > 34 && event.keyCode < 41)
                                       || (event.keyCode == 46))
                   <?php } ?>
                   <?php echo str_replace('HTTP_HOST',HTTP_HOST,$inputKeyDownFun); ?>;"
                   <?php if ($inputOnBlurFun != '') { ?> 
                       onblur = "<?php echo str_replace('HTTP_HOST',HTTP_HOST,$inputOnBlurFun); ?>"
                   <?php } ?>
                   <?php if ($inputOnDoubleClickFun != '') { ?> 
                       ondblclick = "<?php echo $inputOnDoubleClickFun; ?>" 
                   <?php } ?>
                   <?php if ($inputOnChange != '') { ?> 
                       onchange = "<?php echo str_replace('HTTP_HOST',HTTP_HOST,$inputOnChange); ?>"
                   <?php } ?>   
                   <?php if ($inputOnInput != '') { ?> 
                       oninput = "<?php echo $inputOnInput; ?>" 
                   <?php } ?>      
                   <?php if ($inputOnClickFun != '') { ?> 
                       onclick = "<?php echo $inputOnClickFun; ?>" 
                   <?php } ?>
                   <?php if ($inputAutoFocus == 'Y') { ?> 
                       autofocus
                   <?php } ?>
                   <?php if ($inputDisabled == 'Y') { ?> 
                    disabled
                   <?php } ?>
                   >