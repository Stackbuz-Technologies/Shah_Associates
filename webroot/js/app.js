function changeDiv(httpHost, controller, actionMethod, dataParaOrForm, outputDiv, keyCode, suggetionSelectId, loadingDiv) {
    //
    //  alert('actionMethod :- ' + actionMethod + 'dataParaOrForm :- ' + dataParaOrForm);
    //
    $(document).bind("ajaxStart.func", function () {
        if (loadingDiv !== 'DoNotShow' && loadingDiv !== 'DoNotShowDoNotLoad') {
            $("#progressbarloading").css("display", 'flex');
            $('.progress-bar').animate({ width: "99%" }, 100);
        }
    });
    //
    $(document).bind("ajaxStop.func", function () {
        if (loadingDiv !== 'DoNotShow') {
        }
        if (keyCode != '' && suggetionSelectId != '') {
            if (keyCode == 40 || keyCode == 38) {
                if (document.getElementById(suggetionSelectId)) {
                    document.getElementById(suggetionSelectId).focus();
                    document.getElementById(suggetionSelectId).options[0].selected = true;
                }
            }
            $(document).unbind(".func");
        }
    });
    //
    var url = httpHost + '/' + controller + '/' + actionMethod;
    //
    if (dataParaOrForm != '') {
        $.post(url, dataParaOrForm, function (data) {
            $("#" + outputDiv).html(data);
        });
    } else {
        $.post(url, function (data) {
            $("#" + outputDiv).html(data);
        });
    }

    setTimeout(function () {
        $("#progressbarloading").css("display", "none");
        $('#progressbarloading').css("width", "0%");
    }, 1000);

    //
    if (loadingDiv != 'donotscroll' && loadingDiv != 'DoNotShowDoNotLoad') {
        window.scrollTo({ top: 0 });
    }
}
function changeProductDiv(httpHost, controller, actionMethod, dataParaOrForm, outputDiv, keyCode, suggetionSelectId, productType) {
    //
    $(document).bind("ajaxStart.func", function () {
        if (productType !== 'DoNotShow' && productType !== 'DoNotShowDoNotLoad') {
        $(".custom-progress").css("display", 'flex');
        $('.progress-bar').animate({ width: "99%" }, 100);
        }
    });
    //
    $(document).bind("ajaxStop.func", function () {
        $("#loadingDiv").css('display', 'none');
        if (keyCode != '' && suggetionSelectId != '') {
            if (keyCode == 40 || keyCode == 38) {
                document.getElementById(suggetionSelectId).focus();
                document.getElementById(suggetionSelectId).options[0].selected = true;
            }
            $(document).unbind(".func");
        }
    });
    //
    var url = httpHost + '/' + controller + '/' + actionMethod;
    //
    // Adding and Removing prodduct file 
    if (productType == 'productStock') {
        if (document.getElementById('product_count')) {
            if (document.getElementById('product_count').value != '' || document.getElementById('product_count').value != null) {
                document.getElementById('product_count').value = parseInt(document.getElementById('product_count').value) + 1;
            }
        }
    } else if (productType == 'productStone') {
        var currentproductcount = dataParaOrForm.currentproductcount;
        if (document.getElementById('sub_product_count' + currentproductcount).value == "0") {
            dataParaOrForm['sub_product_count'] = 1;
            document.getElementById('sub_product_count' + currentproductcount).value = parseInt(document.getElementById('sub_product_count' + currentproductcount).value) + 1;
            // alert(dataParaOrForm.sub_product_count);
        } else {
            dataParaOrForm['sub_product_count'] = parseInt(document.getElementById('sub_product_count' + currentproductcount).value) + 1;
            document.getElementById('sub_product_count' + currentproductcount).value = parseInt(document.getElementById('sub_product_count' + currentproductcount).value) + 1;
        }
    } else if (productType == 'expenceadded') {

        if (document.getElementById('addexpence_count')) {
            if (document.getElementById('addexpence_count').value != '' || document.getElementById('addexpence_count').value != null) {
                document.getElementById('addexpence_count').value = parseInt(document.getElementById('addexpence_count').value) + 1;
            }
        }
    } else if(productType == 'metalPay'){
        if (document.getElementById('pay_metal_count')) {
            if (document.getElementById('pay_metal_count').value != '' || document.getElementById('pay_metal_count').value != null) {
                document.getElementById('pay_metal_count').value = parseInt(document.getElementById('pay_metal_count').value) + 1;
            }
        }
    } else if(productType == 'metalReceive'){
        if (document.getElementById('receive_metal_count')) {
            if (document.getElementById('receive_metal_count').value != '' || document.getElementById('receive_metal_count').value != null) {
                document.getElementById('receive_metal_count').value = parseInt(document.getElementById('receive_metal_count').value) + 1;
            }
        }
    } else if(outputDiv == 'addLoanItemDetails'){
        if (document.getElementById('loanItemCount')) {
            if (document.getElementById('loanItemCount').value != '' || document.getElementById('loanItemCount').value != null) {
                document.getElementById('loanItemCount').value = parseInt(document.getElementById('loanItemCount').value) + 1;
                document.getElementById('loanItemfinalCount').value = parseInt(document.getElementById('loanItemfinalCount').value) + 1;
            }
        }
    } else if(outputDiv == 'addexpenseItemDetails'){
        if (document.getElementById('addexpencecount')) {
            if (document.getElementById('addexpencecount').value != '' || document.getElementById('addexpencecount').value != null) {
                document.getElementById('addexpencecount').value = parseInt(document.getElementById('addexpencecount').value) + 1;
                document.getElementById('ExpenseItemfinalCount').value = parseInt(document.getElementById('ExpenseItemfinalCount').value) + 1;
            }
        }
    }
    // Adding and Removing prodduct file 

    if (dataParaOrForm != '') {
        $.post(url, dataParaOrForm, function (data) {
            $("#" + outputDiv).append(data);
        });
    } else {
        $.post(url, function (data) {
            $("#" + outputDiv).append(data);
        });
    }
    setTimeout(function () {
        $(".custom-progress").css("display", "none");
        $('#progressbarloading').css("width", "0%");
    }, 1000);
}
function displayNoneId(productCount, divType) {
    if (divType == 'mainStockProductAddDiv') {
        if (productCount == '0') {
            document.getElementById('productCountdivAddButton' + productCount).style.display = "none";
        } else {
            document.getElementById('productCountdivAddButton' + productCount).style.display = "none";
            document.getElementById('productCountdivCloseButton' + productCount).style.display = "none";
        }
    } else if (divType == 'mainStockProductRemoveDiv') {
        var negativeproduct = parseInt(productCount) - 1;
        if (negativeproduct > 0) {
            document.getElementById('productCountdivCloseButton' + negativeproduct).style.display = "block";
        }
        document.getElementById('product_count').value = parseInt(document.getElementById('product_count').value) - 1;
        document.getElementById('productCountdivAddButton' + negativeproduct).style.display = "block";
        document.getElementById('productCountdiv' + productCount).outerHTML = '';
    } else if (divType == 'mainStockStoneProductRemoveDiv') {
        var subproductcount = document.getElementById('sub_product_count' + productCount).value;
        document.getElementById('mainStoneDiv' + productCount + subproductcount).outerHTML = '';
        document.getElementById('sub_product_count' + productCount).value = parseInt(document.getElementById('sub_product_count' + productCount).value) - 1;
    } else if (divType == 'mainMetalpayDiv') {
        if (productCount == '0') {
            document.getElementById('metalPayAddButton' + productCount).style.display = "none";
        } else {
            document.getElementById('metalPayAddButton' + productCount).style.display = "none";
            document.getElementById('metalPayCloseButton' + productCount).style.display = "none";
        }
    } else if (divType == 'mainMetalRemoveDiv') {
        var negativeMetal = parseInt(productCount) - 1;
        if (negativeMetal > 0) {
            document.getElementById('metalPayCloseButton' + negativeMetal).style.display = "block";
        }
        document.getElementById('pay_metal_count').value = parseInt(document.getElementById('pay_metal_count').value) - 1;
        document.getElementById('metalPayAddButton' + negativeMetal).style.display = "block";
        document.getElementById('paymetalCountedDiv' + productCount).outerHTML = '';
    }  else if (divType == 'mainMetalreceiveDiv') {
        if (productCount == '0') {
            document.getElementById('metalReceiveAddButton' + productCount).style.display = "none";
        } else {
            document.getElementById('metalReceiveAddButton' + productCount).style.display = "none";
            document.getElementById('metalReceiveCloseButton' + productCount).style.display = "none";
        }
    } else if (divType == 'mainMetalreceiveRemoveDiv') {
        var negativeMetalreceive = parseInt(productCount) - 1;
        if (negativeMetalreceive > 0) {
            document.getElementById('metalReceiveCloseButton' + negativeMetalreceive).style.display = "block";
        }
        document.getElementById('receive_metal_count').value = parseInt(document.getElementById('receive_metal_count').value) - 1;
        document.getElementById('metalReceiveAddButton' + negativeMetalreceive).style.display = "block";
        document.getElementById('receivemetalCountedDiv' + productCount).outerHTML = '';


        //



    } else if(divType == 'loansItemsAddDiv'){
        document.getElementById('loanCountdivAddButton' + productCount).classList.add('display-none');
        document.getElementById('loanCountdivAddButton' + productCount).classList.remove('display-flex');
        document.getElementById('loanCountdivCloseButton' + productCount).classList.remove('display-none');
    } else if(divType == 'loansItemsRemoveDiv'){
        document.getElementById('loanItemfinalCount').value =  parseInt(document.getElementById('loanItemfinalCount').value) - 1;
        document.getElementById('currentLoanItemDivId' + productCount).outerHTML = '';
    }

    //

    else if(divType == 'expensesItemsAddDiv'){
        document.getElementById('expenseCountdivAddButton' + productCount).classList.add('display-none');
        document.getElementById('expenseCountdivAddButton' + productCount).classList.remove('display-flex');
        document.getElementById('expenseCountdivCloseButton' + productCount).classList.remove('display-none');
        
    } else if(divType == 'expensesItemsRemoveDiv'){
        document.getElementById('ExpenseItemfinalCount').value =  parseInt(document.getElementById('ExpenseItemfinalCount').value) - 1;
        document.getElementById('currentexpenseItemDivId' + productCount).outerHTML = '';
    }



    
}


function CustFileUpload() {
    document.getElementById("user_image").click();
}
function setdefaultcompany(companyId, transcationType, companyName, companyLogoId) {
    if (transcationType != '' && transcationType != null) {
        document.getElementById('set_default_company_id').value = companyId;
        document.getElementById('set_default_company_type').value = transcationType;
        document.getElementById('set_default_company_code').value = companyName;
        document.getElementById('set_default_company_img_id').value = companyLogoId;
        document.getElementById('setCompanyValue').submit();
    } else {
        errorAlert('Required', 'Something Went Wrong Reload the Page !');
        return false
    }
}


function previewFile(event, Id, textId) {
    var output = document.getElementById(Id);
    if (textId != '') {
        var textId = document.getElementById(textId).style.display = "none";
    }
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
}

function updateSoftware(webroot_path, default_theme) {
    if (navigator.onLine) {
        Swal.fire({
            title: '<img src="' + webroot_path + '/' + default_theme + '/img/logo.png" alt="logo" style="width:150px;">',
            html: '<form action="" method="post" enctype="multipart/form-data"><div class="login-wrapper" style="height:unset;text-align:left;font-size:1rem;"><div class="login-content" style="width:100%;display:unset;height:unset;padding:15px;"><div class="form-login"><div class="form-login"><label style="font-size:inherit;">Enter Username</label><input id="username" name="username" placeholder="e.g. Tradesoft" type="text" autocomplete="off" /></div></div></div></div><button type="submit" class="btn btn-submit me-2">Update</button></form>',
            showCloseButton: 1,
            width: "450px",
            showConfirmButton: false
        });
    } else {
        errorAlert('You are offline', 'Internet connection required for Software Update!');
        return false;
    }
}


function displaygst(type) {
    console.log(type);
    if (document.getElementById('cgstsgstCheckbox').checked == false && document.getElementById('igstCheckbox').checked == false) {
        errorAlert('Required', 'Atleast one of IGST or CGST & SGST is required');
        //
        if (type == 'cgst') {
            document.getElementById('cgstsgstCheckbox').checked = true
            document.getElementById('cgstDiv').style.display = 'flex';
        } else if (type == 'igst') {
            document.getElementById('igstCheckbox').checked = true
            document.getElementById('igstDiv').style.display = 'flex';
        }
        return false
    }
    if (type == 'cgst') {
        if (document.getElementById('cgstsgstCheckbox').checked == true) {
            document.getElementById('cgstDiv').style.display = 'flex';
            //
            document.getElementById('igstDiv').style.display = 'none';
            document.getElementById('igstCheckbox').checked = false
        } else {
            document.getElementById('cgstDiv').style.display = 'none';
        }
    } else if (type == 'igst') {
        if (document.getElementById('igstCheckbox').checked == true) {
            document.getElementById('igstDiv').style.display = 'flex';
            //
            document.getElementById('cgstDiv').style.display = 'none';
            document.getElementById('cgstsgstCheckbox').checked = false
        } else {
            document.getElementById('igstDiv').style.display = 'none';
        }
    } else if (type == 'making') {
        if (document.getElementById('makingCheckbox').checked == true) {
            document.getElementById('makingDiv').style.display = 'flex';
        } else {
            document.getElementById('makingDiv').style.display = 'none';
        }
    } else if (type == 'hallmark') {
        if (document.getElementById('hallmarkCheckbox').checked == true) {
            document.getElementById('hallmarkDiv').style.display = 'flex';
        } else {
            document.getElementById('hallmarkDiv').style.display = 'none';
        }
    } else if (type == 'othtaxes') {
        if (document.getElementById('othtaxesCheckbox').checked == true) {
            document.getElementById('othertaxesDiv').style.display = 'flex';
        } else {
            document.getElementById('othertaxesDiv').style.display = 'none';
        }
    }
}


function selects() {
    var checkboxes = document.getElementsByClassName('check');
    for (var checkbox of checkboxes) {
        checkbox.checked = true;
        checkbox.value = this.value;
    }
}

function deselects() {
    var checkboxes = document.getElementsByClassName('check');
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }
}
//
function changeSchemeDiv(httpHost, controller, actionMethod, dataParaOrForm, outputDiv, keyCode, suggetionSelectId, productType) {
    //
    $(document).bind("ajaxStart.func", function () {
        $(".custom-progress").css("display", 'flex');
        $('.progress-bar').animate({ width: "99%" }, 100);
    });
    //
    $(document).bind("ajaxStop.func", function () {
        $("#loadingDiv").css('display', 'none');
        if (keyCode != '' && suggetionSelectId != '') {
            if (keyCode == 40 || keyCode == 38) {
                document.getElementById(suggetionSelectId).focus();
                document.getElementById(suggetionSelectId).options[0].selected = true;
            }
            $(document).unbind(".func");
        }
    });
    //
    var url = httpHost + '/' + controller + '/' + actionMethod;
    //
    // Adding and Removing prodduct file 
    if (productType == 'productStock') {
        if (document.getElementById('product_count')) {
            if (document.getElementById('product_count').value != '' || document.getElementById('product_count').value != null) {
                document.getElementById('product_count').value = parseInt(document.getElementById('product_count').value) + 1;
            }
        }
    } else if (productType == 'productStone') {
        var currentproductcount = dataParaOrForm.currentproductcount;
        if (document.getElementById('sub_product_count' + currentproductcount).value == "0") {
            dataParaOrForm['sub_product_count'] = 1;
            document.getElementById('sub_product_count' + currentproductcount).value = parseInt(document.getElementById('sub_product_count' + currentproductcount).value) + 1;
            // alert(dataParaOrForm.sub_product_count);
        } else {
            dataParaOrForm['sub_product_count'] = parseInt(document.getElementById('sub_product_count' + currentproductcount).value) + 1;
            document.getElementById('sub_product_count' + currentproductcount).value = parseInt(document.getElementById('sub_product_count' + currentproductcount).value) + 1;
        }
    }
    // Adding and Removing prodduct file 

    if (dataParaOrForm != '') {
        $.post(url, dataParaOrForm, function (data) {
            $("#" + outputDiv).append(data);
        });
    } else {
        $.post(url, function (data) {
            $("#" + outputDiv).append(data);
        });
    }
    setTimeout(function () {
        $(".custom-progress").css("display", "none");
        $('#progressbarloading').css("width", "0%");
    }, 1000);
}
function displayNoneSchemeId(productCount, divType) {
    if (divType == 'mainStockProductAddDiv') {
        if (productCount == '0') {
            document.getElementById('productCountdivAddButton' + productCount).style.display = "none";
        } else {
            document.getElementById('productCountdivAddButton' + productCount).style.display = "none";
            document.getElementById('productCountdivCloseButton' + productCount).style.display = "none";
        }
    } else if (divType == 'mainStockProductRemoveDiv') {
        var negativeproduct = parseInt(productCount) - 1;
        if (negativeproduct > 0) {
            document.getElementById('productCountdivCloseButton' + negativeproduct).style.display = "block";
        }
        document.getElementById('product_count').value = parseInt(document.getElementById('product_count').value) - 1;
        document.getElementById('productCountdivAddButton' + negativeproduct).style.display = "block";
        document.getElementById('productCountdiv' + productCount).outerHTML = '';
    } else if (divType == 'mainStockStoneProductRemoveDiv') {
        var subproductcount = document.getElementById('sub_product_count' + productCount).value;
        document.getElementById('mainStoneDiv' + productCount + subproductcount).outerHTML = '';
        document.getElementById('sub_product_count' + productCount).value = parseInt(document.getElementById('sub_product_count' + productCount).value) - 1;
    }
}

function changestate(typechecking) {
    if (typechecking == 'stoneDetails') {
        if (document.getElementById('master_metal_type').value == 'Stone') {
            document.getElementById('stoneType').style.display = "flex";
        } else {
            document.getElementById('stoneType').style.display = "none";
        }
    }else if(typechecking == 'lowStockUnitSts'){
        if(document.getElementById('master_min_unit_status').checked == true){
            document.getElementById('lowStockUnit').style.display = "flex";
        } else {
            document.getElementById('lowStockUnit').style.display = "none";
        }
    }else if(typechecking == 'mrpStatus'){
        if(document.getElementById('master_mrp_status').checked == true){
            document.getElementById('mrpPricingBox').style.display = "flex";
        } else {
            document.getElementById('mrpPricingBox').style.display = "none";
        }
    }else if(typechecking == 'taxtMrp'){
        if(document.getElementById('master_gst_status').value == 'withTax'){
            document.getElementById('master_gst').style.display = "flex";
        } else {
            document.getElementById('master_gst').style.display = "none";
        }
    }else if(typechecking == 'halmarksts'){
        if(document.getElementById('master_hallmark_status').checked == true){
            document.getElementById('halmarkdiv').style.display = "flex";
        } else {
            document.getElementById('halmarkdiv').style.display = "none";
        }
}
}

function hideexpenseDiv(id,count,closexpenseicon) {
  
    if(id == 'expenceclose'){
       document.getElementById('expensetabletd' + count).outerHTML = '';
       document.getElementById('addexpence_count').value = parseInt(document.getElementById('addexpence_count').value) - 1;
    }

    if( id == 'maindivchngeexpense'){ 
        var e = document.getElementById(id);
        if ( e.style.display == 'block' )
            e.style.display = 'none';
        else
            e.style.display = 'block';

    }else if(id == 'plusexpenseicon' + count ){
        //
        var e = document.getElementById(id);
        if ( e.style.display == 'block' ){ 
            e.style.display = 'none';
        }else{ 
            e.style.display = 'block';
        }
        //
    } 

    //
 
    if (closexpenseicon == 'closexpenseicon' ){ 
        //
        var negativeproduct = parseInt(document.getElementById('addexpence_count').value) - 1;
        //
        if ( (document.getElementById('addexpence_count').value >= 0) && ( count == document.getElementById('addexpence_count').value) ) {
         
            document.getElementById('plusexpenseicon' + negativeproduct).style.display = "block";
        
        }else if (document.getElementById('addexpence_count').value == '0' && document.getElementById('addexpence_count').value == 0 ){
 
            document.getElementById('plusexpenseicon').style.display = "block";

        }

    }


            
}
//====================================================================================================
//CODE FOR HIDE/SHOW DIV @RENUKA
//====================================================================================================
function showAccountDetails(){
    document.getElementById('showDivAcount').style.display = "flex";
    document.getElementById('showminus').style.display = "flex";
    document.getElementById('showplus').style.display = "none";
}
function hideAccountDetails(){
    document.getElementById('showDivAcount').style.display = "none";
    document.getElementById('showminus').style.display = "none";
    document.getElementById('showplus').style.display = "flex";
}
function showTransactionDetails(){
    document.getElementById('showDivAcount').style.display = "flex";
    document.getElementById('toggleOut').style.display = "none";
    document.getElementById('toggleIn').style.display = "flex";
    document.getElementById("transaction_mode").checked = true;
}
function hideTransactionDetails(){
    document.getElementById('showDivAcount').style.display = "none";
    document.getElementById('toggleOut').style.display = "flex";
    document.getElementById('toggleIn').style.display = "none";
    document.getElementById("transaction_mode1").checked = false;
}
function showProductTransfer(){
    document.getElementById('showTransferDiv').style.display = "block";
}
//====================================================================================================
//====================================================================================================

function blank(blankId){
        document.getElementById(blankId).value = '';
}