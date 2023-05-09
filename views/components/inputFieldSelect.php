<select id="<?php echo $inputId; ?>" name="<?php echo $inputName; ?>" <?php if ($inputDisabled == 'Y') { ?> disabled <?php } ?>
            class="<?php echo $inputFieldClass; ?>" style="<?php echo $inputStyle; ?>"
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
                        
                    } else if (event.keyCode === 8) {
            <?php if ($inputFieldPrevId != '') { ?>
                            document.getElementById('<?php echo $inputFieldPrevId; ?>').focus();
            <?php } ?>
                        return false;
                    }"
            <?php if ($inputOnChange != '') { ?> 
                onchange = "<?php echo str_replace('HTTP_HOST',HTTP_HOST,$inputOnChange); ?>"
            <?php } ?>   
            <?php if ($inputOnBlurFun != '') { ?> 
                onblur = "<?php echo $inputO2nBlurFun; ?>;"
            <?php } ?>
            <?php if ($inputOnClickFun != '') { ?> 
                onclick = "<?php echo $inputOnClickFun; ?>" 
            <?php } ?>
            >
            <?php if (sizeof($optionArray) <= 0) { ?>
            <OPTION value="NotSelected" selected><?php echo 'Select Here'; ?></OPTION>
            <?php
             }else{
                if($assocArrayOption == 'Y'){  ?>
                <?php if($showDefaultOption  == ''){?>
                 <OPTION value="NotSelected" selected><?php echo 'Select Here'; ?></OPTION>
                 <?php }?>
                  <?php  foreach($optionArray as $key => $value) {
                    ?>
                <OPTION value="<?php echo $value;?>" <?php
            if($value == $selectedData){
                echo 'selected';
            }
            ?>><?php echo $key; ?></OPTION>
              <?php } }else{ ?>
                <?php if($showDefaultOption  == ''){?>
                <OPTION value="NotSelected" selected><?php echo 'Select Here'; ?></OPTION>
                <?php }?>
           <?php foreach($optionArray as $key => $val){
                ?>
            <OPTION value="<?php echo $val;?>" <?php
            if($val == $selectedData){
                echo 'selected';
            }
            ?>><?php echo $val; ?></OPTION>
      <?php
      }
        }
    }
        ?>
    </select>