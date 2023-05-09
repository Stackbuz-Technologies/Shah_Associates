
<input id = "<?php echo $inputId; ?>" name = "<?php echo $inputName; ?>" <?php if ($inputReadOnly != '') { ?>readonly="<?php echo $inputReadOnly; ?>"<?php } ?>
                   title = "<?php echo $inputTitle; ?>" <?php if ($inputTitle == 'this.value') { ?> onmouseover="javascript: this.title = this.value;"<?php } ?>
                   <?php if ($inputPlaceHolder != '') { ?>placeholder = "<?php echo $inputPlaceHolder; ?>"<?php } ?>
                   type = "<?php echo $inputType; ?>" 
                   class = "<?php echo $inputFieldClass; ?> <?php if ($requiredField == 'Y') { ?> inputRequired <?php } ?>"
                   <?php if ($autoComplete == '') $autoComplete = 'off'; ?>
                   autocomplete="<?php echo $autoComplete; ?>"
                   style = "<?php echo $inputStyle; ?>"
                   value="<?php echo $inputFieldValue; ?>"
                   <?php 
                   if($acceptType !=''){ ?>
                    accept="<?php echo $acceptType; ?>";
                 <?php  }
                   ?>
                   <?php if ($inputKeyUpFun != '') { ?>
                       onkeyup="javascript: <?php echo $inputKeyUpFun; ?>;"
                   <?php } ?>        
                   onkeydown = "javascript:if (event.keyCode === 13) {
                   <?php echo $inputFieldFunction; ?>
                   <?php echo $inputEnterKeyFunction; ?>
                   <?php if ($inputFieldNextId != '') { ?>
                    
                                //    document.getElementById('<?php echo $inputFieldNextId; ?>').focus();
                   <?php } ?>
                               return false;
                           } else if (event.keyCode === 9) {
                   <?php echo $inputMandatoryFieldFunction; ?>
                   <?php if ($inputFieldNextMandatoryId != '') { ?>
                                   document.getElementById('<?php echo $inputFieldNextMandatoryId; ?>').focus();
                   <?php } ?>
                               return false;
                           } else if (event.keyCode === 8) {
                   <?php if ($inputFieldPrevId != '') { ?>
                       <?php echo $prevFieldFunction; ?>
                                   document.getElementById('<?php echo $inputFieldPrevId; ?>').focus();
                   <?php } ?>
                              
                           }
                   <?php echo $inputKeyDownFun; ?>;"
                   <?php if ($inputOnBlurFun != '') { ?> 
                       onblur = "<?php echo $inputOnBlurFun; ?>;"
                   <?php } ?>
                   <?php if ($inputOnDoubleClickFun != '') { ?> 
                       ondblclick = "<?php echo $inputOnDoubleClickFun; ?>" 
                   <?php } ?>
                   <?php if ($inputOnChange != '') { ?> 
                       onchange = "<?php echo $inputOnChange; ?>"
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
                   >