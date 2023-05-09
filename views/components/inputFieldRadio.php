<input type = "<?php echo $inputType; ?>" id = "<?php echo $inputId; ?>" value="<?php echo $inputFieldValue; ?>" name = "<?php echo $inputName; ?>"
                <?php
                if($selectedChecked == $inputFieldValue){
                    echo 'checked';
                }
                ?>
               class="<?php
               if ($inputFieldClass != '') {
                   echo $inputFieldClass;
               }
               ?> text-center font-dark"
               style="<?php echo $inputStyle; ?>"
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
               <?php } ?>
                           return false;
                       } else if (event.keyCode === 8) {
               <?php if ($inputFieldPrevId != '') { ?>
                               document.getElementById('<?php echo $inputFieldPrevId; ?>').focus();
               <?php } ?>
                           return false;
                       }"
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
               />  <?php
               if($displaynameShowYesORNo  == 'Y'){
                echo $displaynameShow;
               }
               ?>