function companyvalidation() {
    //
    var company_code = document.getElementById('company_code').value;
    if (company_code.length == 0 || company_code == '' || company_code == 'notSelected') {
        errorAlert('Required', 'Company Code is Necessary !', 'company_code');
        return false;
    } else {
        document.getElementById('company_code').style.borderColor = 'rgb(173, 173, 173)';
    }
    // ============================================================================
    //
    //==================== company_state CODE =====================================
    var company_name = document.getElementById('company_name').value;
    if (company_name.length == 0 || company_name == '' || company_name == 'notSelected') {
        errorAlert('Required', 'Comapny Name is Required !', 'company_name');
        return false;
    } else {
        document.getElementById('company_name').style.borderColor = 'rgb(173, 173, 173)';
    }
    // ==========================================================================
    //
    //==================== company_state CODE ===================
    var company_state = document.getElementById('company_state').value;
    if (company_state.length == 0 || company_state == '' || company_state == 'notSelected') {
        errorAlert('Required', 'State Name is Required !', 'company_state');
        return false;
    } else {
        document.getElementById('company_state').style.borderColor = 'rgb(173, 173, 173)';
    }
    // ===========================================================
    //
    //==================== company_country CODE =====================
    var company_country = document.getElementById('company_country').value;
    if (company_country.length == 0 || company_country == '' || company_country == 'notSelected') {
        errorAlert('Required', 'Country Name is Required !', 'company_country');
        return false;
    } else {
        document.getElementById('company_country').style.borderColor = 'rgb(173, 173, 173)';
    }
    // ===========================================================
    //
}

function loginvalidation() {
    if (document.getElementById('username').value == '' || document.getElementById('username').value == null) {
        document.getElementById('usernameMsg').innerHTML = 'Username is required';
        return false;
    } else {
        document.getElementById('usernameMsg').innerHTML = "";
    }
    if (document.getElementById('password').value == '' || document.getElementById('password').value == null) {
        document.getElementById('passwordMsg').innerHTML = 'Password is required';
        return false;
    } else {
        document.getElementById('passwordMsg').innerHTML = "";
    }
    return true;
}

//
function registrationvalidation() {
    var number_format = /^[0-9]+$/;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,14}$/;
    var user_name_format = /^(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    if (document.getElementById('owner_fname').value == '' || document.getElementById('owner_fname').value == null) {
        document.getElementById('owner_fnameMsg').innerHTML = 'Username is required!';
        return false;
    } else {
        document.getElementById('owner_fnameMsg').innerHTML = "";
    }
    //
    if (document.getElementById('owner_email').value != '' && document.getElementById('owner_email').value != null) {
        if (!document.getElementById('owner_email').value.match(mailformat)) {
            document.getElementById('owner_emailMsg').innerHTML = "Invalid Email Id!";
            return false;
        } else {
            document.getElementById('owner_emailMsg').innerHTML = "";
        }
    } else {
        document.getElementById('owner_emailMsg').innerHTML = "Email Id is Required!";
        return false;
    }
    //
    if (document.getElementById('owner_mobile').value != '') {
        if (!document.getElementById('owner_mobile').value.match(number_format)) {
            document.getElementById('owner_mobileMsg').innerHTML = "Invalid Mobile Number!";
            return false;
        } else {
            document.getElementById('owner_mobileMsg').innerHTML = "";
        }
        if (document.getElementById('owner_mobile').value.length < 10) {
            document.getElementById('owner_mobileMsg').innerHTML = "Mobile Number contain 10 digits!";
            return false;
        } else {
            document.getElementById('owner_mobileMsg').innerHTML = "";
        }
    } else {
        document.getElementById('owner_mobileMsg').innerHTML = "Mobile Number Required!";
        return false;
    }
    //
    if (document.getElementById('owner_username').value != '' && document.getElementById('owner_username').value != null) {
        if (!document.getElementById('owner_username').value.match(user_name_format)) {
            document.getElementById('owner_usernameMsg').innerHTML = "Username must be alphanumeric or alpha!";
            return false;
        } else {
            document.getElementById('owner_usernameMsg').innerHTML = "";
        }
        if (document.getElementById('owner_username').value.length > 30) {
            document.getElementById('owner_usernameMsg').innerHTML = "Username is too long!";
            return false;
        } else {
            document.getElementById('owner_usernameMsg').innerHTML = "";
        }
    } else {
        document.getElementById('owner_usernameMsg').innerHTML = "Username is Required!"
        return false;
    }
    if (document.getElementById('owner_password').value != '') {
        if (!document.getElementById('owner_password').value.match(passformat)) {
            document.getElementById('owner_passwordMsg').innerHTML = "Password should be minimum 8 chars with one special character, one small and one capital letter.(Abc#@452)";
            return false;
        } else {
            document.getElementById('owner_passwordMsg').innerHTML = "";
        }
    } else {
        document.getElementById('owner_passwordMsg').innerHTML = "Password Required!";
        return false;
    }
    return true;
}
//
// =======================================================================================================
// CODE FOR SCHEME WITHOUT INTEREST VALIDATION @RENUKA
// =======================================================================================================
function schemevalidation() {
    if (document.getElementById('scheme_user_name').value == '' || document.getElementById('scheme_user_name').value == null) {
        document.getElementById('scheme_user_name').focus();
        errorAlert('Required', 'User Name is Required !');
        return false;
    } else if (document.getElementById('scheme_name').value == '' || document.getElementById('scheme_name').value == null) {
        document.getElementById('scheme_name').focus();
        errorAlert('Required', 'Scheme Name is Required !');
        return false;
    } else if (document.getElementById('scheme_group').value == '' || document.getElementById('scheme_group').value == null) {
        document.getElementById('scheme_group').focus();
        errorAlert('Required', 'Scheme Group is Required !');
        return false;
    } else if (document.getElementById('scheme_company_id').value == '' || document.getElementById('scheme_company_id').value == null) {
        document.getElementById('scheme_company_id').focus();
        errorAlert('Required', 'Firm is Required !');
        return false;
    }
    else if (document.getElementById('scheme_staff_id').value == '' || document.getElementById('scheme_staff_id').value == null) {
        document.getElementById('scheme_staff_id').focus();
        errorAlert('Required', 'Staff Name is Required !');
        return false;
    } else if (document.getElementById('scheme_no_emi').value == '' || document.getElementById('scheme_no_emi').value == null) {
        document.getElementById('scheme_no_emi').focus();
        errorAlert('Required', 'No of EMI is Required !');
        return false;
    } else if (document.getElementById('scheme_occurance_no').value == '' || document.getElementById('scheme_occurance_no').value == null) {
        document.getElementById('scheme_occurance_no').focus();
        errorAlert('Required', 'Frequency Days / Months is Required !');
        return false;
    } else if (document.getElementById('scheme_occurance').value == 'NotSelected' || document.getElementById('scheme_occurance').value == null) {
        document.getElementById('scheme_occurance').focus();
        errorAlert('Required', 'Frequency Days / Months is Required !');
        return false;
    } else if (document.getElementById('scheme_start_date').value == '' || document.getElementById('scheme_start_date').value == null) {
        document.getElementById('scheme_start_date').focus();
        errorAlert('Required', 'Scheme Start Date is Required !');
        return false;
    } else if (document.getElementById('scheme_end_date').value == '' || document.getElementById('scheme_end_date').value == null) {
        document.getElementById('scheme_end_date').focus();
        errorAlert('Required', 'Scheme End Date is Required !');
        return false;
    }
    else if (document.getElementById('scheme_emi_amt').value == '' || document.getElementById('scheme_emi_amt').value == null) {
        document.getElementById('scheme_emi_amt').focus();
        errorAlert('Required', 'EMI Amount is Required !');
        return false;
    }
    else if (document.getElementById('scheme_bonus_amount').value == '' || document.getElementById('scheme_bonus_amount').value == null) {
        document.getElementById('scheme_bonus_amount').focus();
        errorAlert('Required', 'Bonus Amount is Required !');
        return false;
    }
    else if (document.getElementById('scheme_type').value == 'NotSelected' || document.getElementById('scheme_type').value == null) {
        document.getElementById('scheme_type').focus();
        errorAlert('Required', 'Scheme Type is Required !');
        return false;
    }
    else if (document.getElementById('scheme_serial_no').value == '' || document.getElementById('scheme_serial_no').value == null) {
        document.getElementById('scheme_serial_no').focus();
        errorAlert('Required', 'Scheme Serial No. is Required !');
        return false;
    }
    return true;
}
// =============================================================================================================
//Scheme With Interest Validation @RENUKA
// ==============================================================================================================
function schemeWithInterestvalidation() {
    if (document.getElementById('scheme_user_name').value == '' || document.getElementById('scheme_user_name').value == null) {
        document.getElementById('scheme_user_name').focus();
        errorAlert('Required', 'User Name is Required !');
        return false;
    } else if (document.getElementById('scheme_name').value == '' || document.getElementById('scheme_name').value == null) {
        document.getElementById('scheme_name').focus();
        errorAlert('Required', 'Scheme Name is Required !');
        return false;
    }
    else if (document.getElementById('scheme_group').value == '' || document.getElementById('scheme_group').value == null) {
        document.getElementById('scheme_group').focus();
        errorAlert('Required', 'Scheme Group is Required !');
        return false;
    }
    else if (document.getElementById('scheme_start_date').value == '' || document.getElementById('scheme_start_date').value == null) {
        document.getElementById('scheme_start_date').focus();
        errorAlert('Required', 'Scheme Start Date is Required !');
        return false;
    }
    else if (document.getElementById('scheme_end_date').value == 'NotSelected' || document.getElementById('scheme_end_date').value == null) {
        document.getElementById('scheme_end_date').focus();
        errorAlert('Required', 'Scheme End Date is Required !');
        return false;
    }
    else if (document.getElementById('scheme_type').value == 'NotSelected' || document.getElementById('scheme_type').value == null) {
        document.getElementById('scheme_type').focus();
        errorAlert('Required', 'Scheme Type is Required !');
        return false;
    } else if (document.getElementById('scheme_interest').value == 'NotSelected' || document.getElementById('scheme_interest').value == null) {
        document.getElementById('scheme_interest').focus();
        errorAlert('Required', 'Scheme Type is Required !');
        return false;
    }
    else if (document.getElementById('scheme_serial_no').value == 'NotSelected' || document.getElementById('scheme_serial_no').value == null) {
        document.getElementById('scheme_serial_no').focus();
        errorAlert('Required', 'Scheme Serial No. is Required !');
        return false;
    }
    else if (document.getElementById('scheme_token_no').value == 'NotSelected' || document.getElementById('scheme_token_no').value == null) {
        document.getElementById('scheme_token_no').focus();
        errorAlert('Required', 'Scheme Token No. is Required !');
        return false;
    }
    return true;
}
// ============================================================================================================================
//CODE TO VALIDATE  ADD ACCOUNT DATA @RENUKA
//=============================================================================================================================
function accountValidation() {
    var balance = document.getElementById('account_opening_balance').value;
    if (document.getElementById('account_name').value == '' || document.getElementById('account_name').value == null) {
        document.getElementById('account_name').focus();
        errorAlert('Required', 'Account Name is Required !');
        return false;
    } else if (document.getElementById('account_company_id').value == 'NotSelected' || document.getElementById('account_company_id').value == null) {
        document.getElementById('account_company_id').focus();
        errorAlert('Required', 'Company Name is Required !');
        return false;
    }
    else if (document.getElementById('account_primary_account').value == 'NotSelected' || document.getElementById('account_primary_account').value == null) {
        document.getElementById('account_primary_account').focus();
        errorAlert('Required', 'Primary Account is Required !');
        return false;
    } else if (isNaN(balance) || document.getElementById('account_opening_balance').value == '' || document.getElementById('account_opening_balance').value == null) {
        if (isNaN(balance)) {
            document.getElementById('account_opening_balance').focus();
            errorAlert('Invalid', 'Please Enter Valid Opening Balance !');
        } else {
            document.getElementById('account_opening_balance').focus();
            errorAlert('Required', 'Opening Balance is Required !');
        }
        return false;

    }
    else if (document.getElementById('account_opening_balance_date').value == '' || document.getElementById('account_opening_balance_date').value == null) {
        document.getElementById('account_opening_balance_date').focus();
        errorAlert('Required', 'Opening Balance Date is Required !');
        return false;
    }
    return true;
}
// ============================================================================================================================
//CODE TO VALIDATE  ADD ACCOUNT DATA @RENUKA
//=============================================================================================================================
function hideullist(idclasremove, displayremove) {
    if (idclasremove != '') {
        if (document.getElementById(idclasremove)) {
            document.getElementById(idclasremove).classList.remove('subdrop');
        }
    }
    if (displayremove != '') {
        if (document.getElementById(displayremove)) {
            document.getElementById(displayremove).style.display = "none";
        }
    }
}


// ===================================================================================================================
// XXXXXXXXXXXXXXXXXXXXXXX START CODE FOR CUSTOMER ADD FORM VALIDATION :- YUVRAJ KAMBLE  XXXXXXXXXXXXXXXXXXXXXXXXXXXX
// ===================================================================================================================


function uservalidation() {
    var user_fname = document.getElementById('user_fname').value;
    var user_company_id = document.getElementById('user_company_id').value;
    var user_mobile = document.getElementById('user_mobile').value;
    var user_country = document.getElementById('user_country').value;
    var user_state = document.getElementById('user_state').value;
    var user_city = document.getElementById('user_city').value;
    var number_format = /^[0-9]+$/;
    var usermobileFirstChar = user_mobile.charAt(0);

    //
    //==================== Customer First Name CODE =================================
    if (user_fname.length == 0 || user_fname == '' || user_fname == 'notSelected') {
        errorAlert('Required', 'Customer First Name Is Required !', 'user_fname');
        return false;
    } else {
        document.getElementById('user_fname').style.borderColor = 'rgb(173, 173, 173)';
    }

    // =============================================================================================
    //
    //==================== Company Code CODE =======================================================
    if (user_company_id.length == 0 || user_company_id == '' || user_company_id == 'notSelected') {
        errorAlert('Required', 'Company Code Is Required !', 'user_company_id');
        return false;
    } else {
        document.getElementById('user_company_id').style.borderColor = 'rgb(173, 173, 173)';
    }
    // ===========================================================================================
    //
    //==================== Customer Mobile CODE ==================================================
    if (user_mobile != '') {
        if (!user_mobile.match(number_format)) {
            errorAlert('Required', 'Invalid Mobile Number !', 'user_mobile');
            return false;
        } else {
            document.getElementById('user_mobile').style.borderColor = 'rgb(173, 173, 173)';
        }
        if (user_mobile.length != 10) {
            errorAlert('Required', 'Mobile Number contain 10 digits !', 'user_mobile');
            return false;
        } else {
            document.getElementById('user_mobile').style.borderColor = 'rgb(173, 173, 173)';
        }
        if (usermobileFirstChar == '6' || usermobileFirstChar == '7' || usermobileFirstChar == '8' || usermobileFirstChar == '9' || usermobileFirstChar == '5') {
            document.getElementById('user_mobile').style.borderColor = 'rgb(173, 173, 173)';
        } else {
            errorAlert('Required', 'Invalid Mobile Number !', 'user_mobile');
            return false;
        }
    } else {
        errorAlert('Required', 'Mobile Number Required !', 'user_mobile');
        return false;
    }
    // ===========================================================================
    //

    //==================== user_city CODE ===================
    if (user_city.length == 0 || user_city == '' || user_city == 'notSelected') {
        errorAlert('Required', 'City Name is Required  !', 'user_city');
        return false;
    } else {
        document.getElementById('user_city').style.borderColor = 'rgb(173, 173, 173)';
    }
    // =======================================================

    //==================== user_state CODE ===================
    if (user_state.length == 0 || user_state == '' || user_state == 'notSelected') {
        errorAlert('Required', 'State Name is Required !', 'user_state');
        return false;
    } else {
        document.getElementById('user_state').style.borderColor = 'rgb(173, 173, 173)';
    }
    // ===========================================================
    //
    //==================== user_country CODE =====================
    if (user_country.length == 0 || user_country == '' || user_country == 'notSelected') {
        errorAlert('Required', 'Counry Name is Required !', 'user_country');
        return false;
    } else {
        document.getElementById('user_country').style.borderColor = 'rgb(173, 173, 173)';
    }
    // =======================================================
    //
}

function validationForusername() {
    var user_fname = document.getElementById('user_fname').value;
    if (user_fname.length != 0 || user_fname != '' || user_fname != 'notSelected') {
        document.getElementById('user_fname').style.borderColor = 'rgb(173, 173, 173)';
        return false;
    }
}
//
function validationForcompanycode() {
    var user_company_id = document.getElementById('user_company_id').value;
    if (user_company_id.length != 0 || user_company_id != '' || user_company_id != 'notSelected') {
        document.getElementById('user_company_id').style.borderColor = 'rgb(173, 173, 173)';
        return false;
    }
}

function validationForusermobile() {
    // MOBILE NUMBER 
    var user_mobile = document.getElementById('user_mobile').value;
    var usermobileFirstChar = user_mobile.charAt(0);
    var number_format = /^[0-9]+$/;
    //
    if (user_mobile.match(number_format) != null) {
        document.getElementById('user_mobile').style.borderColor = 'rgb(173, 173, 173)';
        return false;
    }
    if (user_mobile.length != 10) {
        document.getElementById('user_mobile').style.borderColor = 'rgb(173, 173, 173)';
        return false;
    }
    if (usermobileFirstChar != '6' || usermobileFirstChar != '7' || usermobileFirstChar != '8' || usermobileFirstChar != '9' || usermobileFirstChar != '5') {
        document.getElementById('user_mobile').style.borderColor = 'rgb(173, 173, 173)';
        return false;
    }
}

function validationForuserEmail() {
    var user_email = document.getElementById('user_email').value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //
    if (user_email.length != 0 && user_email != '' && user_email.length != null) {
        if (!user_email.match(mailformat)) {
            document.getElementById('user_email').style.borderColor = 'rgb(173, 173, 173)';
            return false;
        }
    }
    // else {
    //     errorAlert('Required', 'Email Required !');
    //     document.getElementById('user_email').style.borderColor = 'red';
    //     return false;
    // }
}

//==========================================================================
function validationForuserstate() {
    var user_state = document.getElementById('user_state').value;
    //
    if (user_state.length != 0 || user_state.length != '' || user_state.length != 'notSelected') {
        document.getElementById('user_state').style.borderColor = 'rgb(173, 173, 173)';
        return false;
    }
}
//==========================================================================
function validationForusercountry() {
    var user_country = document.getElementById('user_country').value;
    //
    if (user_country.length != 0 || user_country.length != '' || user_country.length != 'notSelected') {
        document.getElementById('user_country').style.borderColor = 'rgb(173, 173, 173)';
        return false;
    }
}
//==========================================================================
function validationForusercity() {
    var user_city = document.getElementById('user_city').value;
    //
    if (user_city.length != 0 || user_city.length != '' || user_city.length != 'notSelected') {
        document.getElementById('user_city').style.borderColor = 'rgb(173, 173, 173)';
        return false;
    }
}
//==========================================================================
//
//==========================================================================
function validationForuserrole() {
    var user_role = document.getElementById('user_role').value;
    //
    if (user_role.length != 0 || user_role.length != '' || user_role.length != 'notSelected') {
        document.getElementById('user_role').style.borderColor = 'rgb(173, 173, 173)';
        return false;
    }
}
//==========================================================================
function validationForuserid() {
    var user_username = document.getElementById('user_username').value;
    //
    if (user_username.length != 0 || user_username.length != '' || user_username.length != 'notSelected') {
        document.getElementById('user_username').style.borderColor = 'rgb(173, 173, 173)';
        return false;
    }
}
//==========================================================================
function validationForuserpass() {
    var user_password = document.getElementById('user_password').value;
    //
    if (user_password.length != 0 || user_password.length != '' || user_password.length != 'notSelected') {
        document.getElementById('user_password').style.borderColor = 'rgb(173, 173, 173)';
        return false;
    }
}

// ===================================================================================================================
// XXXXXXXXXXXXXXXXXXXXXXX START CODE FOR CUSTOMER ADD FORM VALIDATION :- YUVRAJ KAMBLE  XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// ===================================================================================================================
function productFormValidation(type, producttype) {

    var product_add_date = document.getElementById('product_add_date').value;
    var product_company_id = document.getElementById('product_company_id').value;

    if (product_add_date.length == 0 || product_add_date == '' || product_add_date == 'notSelected') {
        errorAlert('Required', ' Date Is Required !', 'product_add_date', 'product');
        return false;
    } else {
        document.getElementById('product_add_date').style.border = 'rgb(173, 173, 173)';
    }
    // ===================================================================================
    if (product_company_id.length == 0 || product_company_id == '' || product_company_id == 'NotSelected') {
        errorAlert('Required', 'Company Code Is Required !', 'product_company_id', 'product');
        return false;
    } else {
        document.getElementById('product_company_id').style.border = 'rgb(173, 173, 173)';
    }
    // ===================================================================================================================
    // ===================================================================================================================

    if (!document.getElementById('product_count')) {
        var productMergeCount = '0';
    } else {
        var productMergeCount = document.getElementById('product_count').value;
    }

    for (var noofproduct = 0; noofproduct < productMergeCount; noofproduct++) {
        var product_metal_type = document.getElementById('product_metal_type' + noofproduct).value;

        if (product_metal_type.length == 0 || product_metal_type == '' || product_metal_type == 'notSelected') {
            errorAlert('Required', 'Metal Type Is Required !', 'product_metal_type' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_metal_type' + noofproduct).style.border = 'rgb(173, 173, 173)';
        }
        // =====================================================================================================
        if (producttype == 'saleproduct') {
            var product_sale_rate = document.getElementById('product_sale_rate' + noofproduct).value;
            if (product_sale_rate.length == 0 || product_sale_rate == '' || product_sale_rate == 'notSelected') {
                errorAlert('Required', 'Rate Is Required !', 'product_sale_rate' + noofproduct, 'product');
                return false;
            } else {
                document.getElementById('product_purchase_rate' + noofproduct).style.border = '1px solid #cfcfcf';
            }
        } else {
            var product_purchase_rate = document.getElementById('product_purchase_rate' + noofproduct).value;
            if (product_purchase_rate.length == 0 || product_purchase_rate == '' || product_purchase_rate == 'notSelected') {
                errorAlert('Required', 'Rate Is Required !', 'product_purchase_rate' + noofproduct, 'product');
                return false;
            } else {
                document.getElementById('product_purchase_rate' + noofproduct).style.border = '1px solid #cfcfcf';
            }
        }
        // =====================================================================================================
        var product_category = document.getElementById('product_category' + noofproduct).value;

        if (product_category.length == 0 || product_category == '' || product_category == 'notSelected') {
            errorAlert('Required', 'Category Is Required !', 'product_category' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_category' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_name = document.getElementById('product_name' + noofproduct).value;

        if (product_name.length == 0 || product_name == '' || product_name == 'notSelected') {
            errorAlert('Required', 'Product Name Is Required !', 'product_name' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_name' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_pre_code = document.getElementById('product_pre_code' + noofproduct).value;

        if (product_pre_code.length == 0 || product_pre_code == '' || product_pre_code == 'notSelected') {
            errorAlert('Required', 'Product Pre Code Is Required !', 'product_pre_code' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_pre_code' + noofproduct).style.border = '1px solid #cfcfcf';
        }

        if (producttype == 'retail' || producttype == 'saleproduct') {
            var product_post_code = document.getElementById('product_post_code' + noofproduct).value;

            if (product_post_code.length == 0 || product_post_code == '' || product_post_code == 'notSelected') {
                errorAlert('Required', 'Product Post Code Is Required !', 'product_post_code' + noofproduct, 'product');
                return false;
            } else {
                document.getElementById('product_post_code' + noofproduct).style.border = '1px solid #cfcfcf';
            }
        }
        // =====================================================================================================
        var product_qty = document.getElementById('product_qty' + noofproduct).value;

        if (product_qty.length == 0 || product_qty == '' || product_qty == 'notSelected') {
            errorAlert('Required', 'Product Quantity Is Required !', 'product_qty' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_qty' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_gs_wt = document.getElementById('product_gs_wt' + noofproduct).value;

        if (product_gs_wt.length == 0 || product_gs_wt == '' || product_gs_wt == 'notSelected') {
            errorAlert('Required', 'Product Weight Is Required !', 'product_gs_wt' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_gs_wt' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_nt_wt = document.getElementById('product_nt_wt' + noofproduct).value;

        if (product_nt_wt.length == 0 || product_nt_wt == '' || product_nt_wt == 'notSelected') {
            errorAlert('Required', 'Product Net Weight Is Required !', 'product_nt_wt' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_nt_wt' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_tunch = document.getElementById('product_tunch' + noofproduct).value;

        if (product_tunch.length == 0 || product_tunch == '' || product_tunch == 'notSelected') {
            errorAlert('Required', 'Product Purity Is Required !', 'product_tunch' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_tunch' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_fn_wt = document.getElementById('product_fn_wt' + noofproduct).value;

        if (product_fn_wt.length == 0 || product_fn_wt == '' || product_fn_wt == 'notSelected') {
            errorAlert('Required', 'Product Fine Weight Is Required !', 'product_fn_wt' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_fn_wt' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_final_wt = document.getElementById('product_final_wt' + noofproduct).value;

        if (product_final_wt.length == 0 || product_final_wt == '' || product_final_wt == 'notSelected') {
            errorAlert('Required', 'Product Final Weight Is Required !', 'product_final_wt' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_final_wt' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_metal_amt = document.getElementById('product_metal_amt' + noofproduct).value;

        if (product_metal_amt.length == 0 || product_metal_amt == '' || product_metal_amt == 'notSelected') {
            errorAlert('Required', 'Product Metal Amount Is Required !', 'product_metal_amt' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_metal_amt' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_final_amt = document.getElementById('product_final_amt' + noofproduct).value;

        if (product_final_amt.length == 0 || product_final_amt == '' || product_final_amt == 'notSelected') {
            errorAlert('Required', 'Product Final Amount Is Required !', 'product_final_amt' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_final_amt' + noofproduct).style.border = '1px solid #cfcfcf';
        }


        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        var subproduct = document.getElementById('sub_product_count' + noofproduct).value;
        if (subproduct.length != 0 || subproduct != '' || subproduct != 'notSelected') {

            for (var subProdCount = 1; subProdCount <= subproduct; subProdCount++) {
                if (noofproduct == 0) {
                    var noofproductsub = '0' + subProdCount;
                } else {
                    var noofproductsub = String(noofproduct) + subProdCount;
                }

                var product_category = document.getElementById('product_category' + noofproductsub).value;
                if (product_category.length == 0 || product_category == '' || product_category == 'notSelected') {
                    errorAlert('Required', 'Stone Category Is Required !', 'product_category' + noofproductsub, 'product');
                    return false;
                } else {
                    document.getElementById('product_category' + noofproductsub).style.border = '1px solid #cfcfcf';
                }
                // =====================================================================================================
                var product_name = document.getElementById('product_name' + noofproductsub).value;
                if (product_name.length == 0 || product_name == '' || product_name == 'notSelected') {
                    errorAlert('Required', 'Stone Name Is Required !', 'product_name' + noofproductsub, 'product');
                    return false;
                } else {
                    document.getElementById('product_name' + noofproductsub).style.border = '1px solid #cfcfcf';
                }
                // =====================================================================================================
                var product_qty = document.getElementById('product_qty' + noofproductsub).value;
                if (product_qty.length == 0 || product_qty == '' || product_qty == 'notSelected') {
                    errorAlert('Required', 'Stone Quantity Is Required !', 'product_qty' + noofproductsub, 'product');
                    return false;
                } else {
                    document.getElementById('product_qty' + noofproductsub).style.border = '1px solid #cfcfcf';
                }
                // =====================================================================================================
                var product_gs_wt = document.getElementById('product_gs_wt' + noofproductsub).value;
                if (product_gs_wt.length == 0 || product_gs_wt == '' || product_gs_wt == 'notSelected') {
                    errorAlert('Required', 'Stone Weight Is Required !', 'product_gs_wt' + noofproductsub, 'product');
                    return false;
                } else {
                    document.getElementById('product_gs_wt' + noofproductsub).style.border = '1px solid #cfcfcf';
                }
                // =====================================================================================================
                if ((producttype == 'retail' || producttype == 'wholesale') && (type == 'product' || type == 'purchase')) {
                    var product_purchase_rate = document.getElementById('product_purchase_rate' + noofproductsub).value;
                    if (product_purchase_rate.length == 0 || product_purchase_rate == '' || product_purchase_rate == 'notSelected') {
                        errorAlert('Required', 'Stone Purchase Rate Is Required !', 'product_purchase_rate' + noofproductsub, 'product');
                        return false;
                    } else {
                        document.getElementById('product_purchase_rate' + noofproductsub).style.border = '1px solid #cfcfcf';
                    }
                }

                // if ((producttype == 'retail' || producttype == 'wholesale' || producttype == 'saleproduct') && (type == 'product' || type == 'sale')) {
                //     var product_sale_rate = document.getElementById('product_sale_rate' + noofproductsub).value;

                //     if (product_sale_rate.length == 0 || product_sale_rate == '' || product_sale_rate == 'notSelected') {
                //         errorAlert('Required', 'Product Sell Rate Is Required !', 'product_sale_rate' + noofproductsub, 'product');
                //         return false;
                //     } else {
                //         document.getElementById('product_sale_rate' + noofproductsub).style.border = '1px solid #cfcfcf';
                //     }
                // }

                // =====================================================================================================
                var product_final_amt = document.getElementById('product_final_amt' + noofproductsub).value;
                if (product_final_amt.length == 0 || product_final_amt == '' || product_final_amt == 'notSelected') {
                    errorAlert('Required', 'Stone Final Amount Is Required !', 'product_final_amt' + noofproductsub, 'product');
                    return false;
                } else {
                    document.getElementById('product_final_amt' + noofproductsub).style.border = '1px solid #cfcfcf';
                }
                // =====================================================================================================

            }

        }
    }
    return true;
}
//
//
function productOrderFormValidation() {

    var product_add_date = document.getElementById('product_add_date').value;
    var product_company_id = document.getElementById('product_company_id').value;
    var fixedRate = document.getElementById('fixedRate').checked;
    if(document.getElementById('product_user_name')){
        product_user_name = document.getElementById('product_user_name').value;
        if (product_user_name == '' || product_user_name == 'notSelected') {
            errorAlert('Required', ' Username Is Required !', 'product_user_name', 'product');
            return false;
        } else {
            document.getElementById('product_user_name').style.borderColor = 'rgba(11, 36, 60, 0.32)';
        }
    }
    if (product_add_date.length == 0 || product_add_date == '' || product_add_date == 'notSelected') {
        errorAlert('Required', ' Date Is Required !', 'product_add_date', 'product');
        return false;
    } else {
        document.getElementById('product_add_date').style.border = 'rgb(173, 173, 173)';
    }
    // ===================================================================================
    if (product_company_id.length == 0 || product_company_id == '' || product_company_id == 'NotSelected') {
        errorAlert('Required', 'Company Code Is Required !', 'product_company_id', 'product');
        return false;
    } else {
        document.getElementById('product_company_id').style.border = 'rgb(173, 173, 173)';
    }
    // ===================================================================================================================
    // ===================================================================================================================

    if (!document.getElementById('product_count')) {
        var productMergeCount = '0';
    } else {
        var productMergeCount = document.getElementById('product_count').value;
    }

    for (var noofproduct = 0; noofproduct < productMergeCount; noofproduct++) {
        var product_metal_type = document.getElementById('product_metal_type' + noofproduct).value;

        if (product_metal_type.length == 0 || product_metal_type == '' || product_metal_type == 'notSelected') {
            errorAlert('Required', 'Metal Type Is Required !', 'product_metal_type' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_metal_type' + noofproduct).style.border = 'rgb(173, 173, 173)';
        }
        // =====================================================================================================
            if(fixedRate == true){
                    var product_sale_rate = document.getElementById('product_sale_rate' + noofproduct).value;
                if (product_sale_rate.length == 0 || product_sale_rate == '' || product_sale_rate == 'notSelected') {
                    errorAlert('Required', 'Rate Is Required !', 'product_sale_rate' + noofproduct, 'product');
                    return false;
                } else {
                    document.getElementById('product_sale_rate' + noofproduct).style.border = '1px solid #cfcfcf';
                }
            }
            
        // =====================================================================================================
        var product_category = document.getElementById('product_category' + noofproduct).value;

        if (product_category.length == 0 || product_category == '' || product_category == 'notSelected') {
            errorAlert('Required', 'Category Is Required !', 'product_category' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_category' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_name = document.getElementById('product_name' + noofproduct).value;

        if (product_name.length == 0 || product_name == '' || product_name == 'notSelected') {
            errorAlert('Required', 'Product Name Is Required !', 'product_name' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_name' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_pre_code = document.getElementById('product_pre_code' + noofproduct).value;

        if (product_pre_code.length == 0 || product_pre_code == '' || product_pre_code == 'notSelected') {
            errorAlert('Required', 'Product Pre Code Is Required !', 'product_pre_code' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_pre_code' + noofproduct).style.border = '1px solid #cfcfcf';
        }

        if (producttype == 'retail' || producttype == 'saleproduct') {
            var product_post_code = document.getElementById('product_post_code' + noofproduct).value;

            if (product_post_code.length == 0 || product_post_code == '' || product_post_code == 'notSelected') {
                errorAlert('Required', 'Product Post Code Is Required !', 'product_post_code' + noofproduct, 'product');
                return false;
            } else {
                document.getElementById('product_post_code' + noofproduct).style.border = '1px solid #cfcfcf';
            }
        }
        // =====================================================================================================
        var product_qty = document.getElementById('product_qty' + noofproduct).value;

        if (product_qty.length == 0 || product_qty == '' || product_qty == 'notSelected') {
            errorAlert('Required', 'Product Quantity Is Required !', 'product_qty' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_qty' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_gs_wt = document.getElementById('product_gs_wt' + noofproduct).value;

        if (product_gs_wt.length == 0 || product_gs_wt == '' || product_gs_wt == 'notSelected') {
            errorAlert('Required', 'Product Weight Is Required !', 'product_gs_wt' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_gs_wt' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_nt_wt = document.getElementById('product_nt_wt' + noofproduct).value;

        if (product_nt_wt.length == 0 || product_nt_wt == '' || product_nt_wt == 'notSelected') {
            errorAlert('Required', 'Product Net Weight Is Required !', 'product_nt_wt' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_nt_wt' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_tunch = document.getElementById('product_tunch' + noofproduct).value;

        if (product_tunch.length == 0 || product_tunch == '' || product_tunch == 'notSelected') {
            errorAlert('Required', 'Product Purity Is Required !', 'product_tunch' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_tunch' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_fn_wt = document.getElementById('product_fn_wt' + noofproduct).value;

        if (product_fn_wt.length == 0 || product_fn_wt == '' || product_fn_wt == 'notSelected') {
            errorAlert('Required', 'Product Fine Weight Is Required !', 'product_fn_wt' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_fn_wt' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_final_wt = document.getElementById('product_final_wt' + noofproduct).value;

        if (product_final_wt.length == 0 || product_final_wt == '' || product_final_wt == 'notSelected') {
            errorAlert('Required', 'Product Final Weight Is Required !', 'product_final_wt' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_final_wt' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        if(fixedRate == true){
        var product_metal_amt = document.getElementById('product_metal_amt' + noofproduct).value;

        if (product_metal_amt.length == 0 || product_metal_amt == '' || product_metal_amt == 'notSelected') {
            errorAlert('Required', 'Product Metal Amount Is Required !', 'product_metal_amt' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_metal_amt' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        // =====================================================================================================
        var product_final_amt = document.getElementById('product_final_amt' + noofproduct).value;

        if (product_final_amt.length == 0 || product_final_amt == '' || product_final_amt == 'notSelected') {
            errorAlert('Required', 'Product Final Amount Is Required !', 'product_final_amt' + noofproduct, 'product');
            return false;
        } else {
            document.getElementById('product_final_amt' + noofproduct).style.border = '1px solid #cfcfcf';
        }
        }
        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        var subproduct = document.getElementById('sub_product_count' + noofproduct).value;
        if (subproduct.length != 0 || subproduct != '' || subproduct != 'notSelected') {

            for (var subProdCount = 1; subProdCount <= subproduct; subProdCount++) {
                if (noofproduct == 0) {
                    var noofproductsub = '0' + subProdCount;
                } else {
                    var noofproductsub = String(noofproduct) + subProdCount;
                }

                var product_category = document.getElementById('product_category' + noofproductsub).value;
                if (product_category.length == 0 || product_category == '' || product_category == 'notSelected') {
                    errorAlert('Required', 'Stone Category Is Required !', 'product_category' + noofproductsub, 'product');
                    return false;
                } else {
                    document.getElementById('product_category' + noofproductsub).style.border = '1px solid #cfcfcf';
                }
                // =====================================================================================================
                var product_name = document.getElementById('product_name' + noofproductsub).value;
                if (product_name.length == 0 || product_name == '' || product_name == 'notSelected') {
                    errorAlert('Required', 'Stone Name Is Required !', 'product_name' + noofproductsub, 'product');
                    return false;
                } else {
                    document.getElementById('product_name' + noofproductsub).style.border = '1px solid #cfcfcf';
                }
                // =====================================================================================================
                var product_qty = document.getElementById('product_qty' + noofproductsub).value;
                if (product_qty.length == 0 || product_qty == '' || product_qty == 'notSelected') {
                    errorAlert('Required', 'Stone Quantity Is Required !', 'product_qty' + noofproductsub, 'product');
                    return false;
                } else {
                    document.getElementById('product_qty' + noofproductsub).style.border = '1px solid #cfcfcf';
                }
                // =====================================================================================================
                var product_gs_wt = document.getElementById('product_gs_wt' + noofproductsub).value;
                if (product_gs_wt.length == 0 || product_gs_wt == '' || product_gs_wt == 'notSelected') {
                    errorAlert('Required', 'Stone Weight Is Required !', 'product_gs_wt' + noofproductsub, 'product');
                    return false;
                } else {
                    document.getElementById('product_gs_wt' + noofproductsub).style.border = '1px solid #cfcfcf';
                }
                // =====================================================================================================
                if ((producttype == 'retail' || producttype == 'wholesale') && (type == 'product' || type == 'purchase')) {
                    var product_purchase_rate = document.getElementById('product_purchase_rate' + noofproductsub).value;
                    if (product_purchase_rate.length == 0 || product_purchase_rate == '' || product_purchase_rate == 'notSelected') {
                        errorAlert('Required', 'Stone Purchase Rate Is Required !', 'product_purchase_rate' + noofproductsub, 'product');
                        return false;
                    } else {
                        document.getElementById('product_purchase_rate' + noofproductsub).style.border = '1px solid #cfcfcf';
                    }
                }

                // =====================================================================================================
                var product_final_amt = document.getElementById('product_final_amt' + noofproductsub).value;
                if (product_final_amt.length == 0 || product_final_amt == '' || product_final_amt == 'notSelected') {
                    errorAlert('Required', 'Stone Final Amount Is Required !', 'product_final_amt' + noofproductsub, 'product');
                    return false;
                } else {
                    document.getElementById('product_final_amt' + noofproductsub).style.border = '1px solid #cfcfcf';
                }
                // =====================================================================================================

            }

        }
    }
    return true;
}
//
//
function validationForproddate() {
    var product_add_date = document.getElementById('product_add_date').value;
    //
    if (product_add_date.length != 0 || product_add_date != '' || product_add_date != 'notSelected') {
        document.getElementById('product_add_date').style.borderColor = 'rgb(173, 173, 173)';
        return false;
    }
}

function validationForcompname() {
    var product_company_id = document.getElementById('product_company_id').value;
    //
    if (product_company_id.length != 0 || product_company_id != '' || product_company_id != 'notSelected') {
        document.getElementById('product_company_id').style.borderColor = 'rgb(173, 173, 173)';
        return false;
    }
}

//XXXXXXXXXXXXXXXXXXXXXXXXX OWNER VALIDATION XXXXXXXXXXXXXXXXXXXXXXXXXXX
function profilevalidation(type) {
    if (navigator.onLine) {
        return true;
    } else {
        errorAlert('You are offline', 'Internet connection required for profile update!');
        return false;
    }
}
// XXXXXXXXXXXXXXXXXXXXXXXXXXX END OWNER DETIALS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//
// XXXXXXXXXXXXXXXXXXXXXXXXXXXX Start Code For password validation XXXXXXXXXXXXXXXXXXX
function profileLoginToggle(eyeToggle, checkPara) {
    if (checkPara == 'profileLogin') {
        var newpassuser = document.getElementById('owner_password');
        if (newpassuser.type == "password") {
            newpassuser.type = "text";
        } else {
            newpassuser.type = "password";
        }
    }

    if (checkPara == 'staffuser') {
        var newpassuser = document.getElementById('user_password');
        if (newpassuser.type == "password") {
            newpassuser.type = "text";
        } else {
            newpassuser.type = "password";
        }
    }

    if (checkPara == 'loginuser') {
        var newpassuser = document.getElementById('password');
        if (newpassuser.type == "password") {
            newpassuser.type = "text";
        } else {
            newpassuser.type = "password";
        }
    }

    if (checkPara == 'loginsignupuser') {
        var newpassuser = document.getElementById('owner_password');
        if (newpassuser.type == "password") {
            newpassuser.type = "text";
        } else {
            newpassuser.type = "password";
        }
    }
}
// XXXXXXXXXXXXXXXXXXXXXXXXXXXX END Code For password validation XXXXXXXXXXXXXXXXXXX
function hideaccount() {
    document.getElementById('hidediv').display = 'none';
}


function loanValidation() {

    if(document.getElementById('Search_customer')){
        if (document.getElementById('Search_customer').value =='') {
            errorAlert('Required', 'Customer Name is Required !', 'Search_customer');
            return false;
        } else {
            document.getElementById('Search_customer').style.borderColor = 'rgba(11, 36, 60, 0.32)';
        }
    }
    //
    if (document.getElementById('loan_principal_amt').value =='') {
        errorAlert('Required', 'Principal Amount is Required !', 'loan_principal_amt');
        return false;
    } else {
        document.getElementById('loan_principal_amt').style.borderColor = 'rgba(11, 36, 60, 0.32)';
    }
    //
    if (document.getElementById('loan_company_id').value =='NotSelected') {
        errorAlert('Required', 'Company is Required !', 'loan_company_id');
        return false;
    } else {
        document.getElementById('loan_company_id').style.borderColor = 'rgba(11, 36, 60, 0.32)';
    }
    //
    if (document.getElementById('loan_serial_code').value =='') {
        errorAlert('Required', 'Serial Code is Required !', 'loan_serial_code');
        return false;
    } else {
        document.getElementById('loan_serial_code').style.borderColor = 'rgba(11, 36, 60, 0.32)';
    }
    //
    if (document.getElementById('loan_serial_number').value =='') {
        errorAlert('Required', 'Serial Number Amount is Required !', 'loan_serial_number');
        return false;
    } else {
        document.getElementById('loan_serial_number').style.borderColor = 'rgba(11, 36, 60, 0.32)';
    }
    //
    if (document.getElementById('loan_ROI_percentage').value =='') {
        errorAlert('Required', 'ROI is Required !', 'loan_ROI_percentage');
        return false;
    } else {
        document.getElementById('loan_ROI_percentage').style.borderColor = 'rgba(11, 36, 60, 0.32)';
    }
    //
    if (document.getElementById('loan_time_period').value =='') {
        errorAlert('Required', 'Time Period is Required !', 'loan_time_period');
        return false;
    } else {
        document.getElementById('loan_time_period').style.borderColor = 'rgba(11, 36, 60, 0.32)';
    }
    //
    if (document.getElementById('loan_dr_account_id').value =='NotSelected') {
        errorAlert('Required', 'Account is Required !', 'loan_dr_account_id');
        return false;
    } else {
        document.getElementById('loan_dr_account_id').style.borderColor = 'rgba(11, 36, 60, 0.32)';
    }

    if (document.getElementById('loanItemCount').value != '' && document.getElementById('loanItemCount').value != '0') {
        itemCount = parseInt(document.getElementById('loanItemCount').value) - 1;
        for (counterItem = 0; counterItem <= itemCount; counterItem++) {
            if (document.getElementById('loan_item_name' + counterItem)) {
                if (document.getElementById('loan_item_name' + counterItem).value == '') {
                    errorAlert('Required', 'Item Name is Required !', 'loan_item_name' + counterItem);
                    return false;
                } else {
                    document.getElementById('loan_item_name'+ counterItem).style.borderColor = 'rgba(11, 36, 60, 0.32)';
                }
            }
            if (document.getElementById('loan_item_qty' + counterItem)) {
                if (document.getElementById('loan_item_qty' + counterItem).value == '') {
                    errorAlert('Required', 'Item Qty is Required !', 'loan_item_qty' + counterItem);
                    return false;
                } else {
                    document.getElementById('loan_item_qty'+ counterItem).style.borderColor = 'rgba(11, 36, 60, 0.32)';
                }
            }
            if (document.getElementById('loan_item_gs_wt' + counterItem)) {
                if (document.getElementById('loan_item_gs_wt' + counterItem).value == '') {
                    errorAlert('Required', 'Item Gs Wt is Required !', 'loan_item_gs_wt' + counterItem);
                    return false;
                } else {
                    document.getElementById('loan_item_gs_wt'+ counterItem).style.borderColor = 'rgba(11, 36, 60, 0.32)';
                }
            }
            if (document.getElementById('loan_item_ls_wt' + counterItem)) {
                if (document.getElementById('loan_item_ls_wt' + counterItem).value == '') {
                    errorAlert('Required', 'Item Ls Wt is Required !', 'loan_item_ls_wt' + counterItem);
                    return false;
                } else {
                    document.getElementById('loan_item_ls_wt'+ counterItem).style.borderColor = 'rgba(11, 36, 60, 0.32)';
                }
            }
            if (document.getElementById('loan_item_nt_wt' + counterItem)) {
                if (document.getElementById('loan_item_nt_wt' + counterItem).value == '') {
                    errorAlert('Required', 'Item Nt Wt is Required !', 'loan_item_nt_wt' + counterItem);
                    return false;
                } else {
                    document.getElementById('loan_item_nt_wt'+ counterItem).style.borderColor = 'rgba(11, 36, 60, 0.32)';
                }
            }
            if (document.getElementById('loan_item_tunch' + counterItem)) {
                if (document.getElementById('loan_item_tunch' + counterItem).value == '') {
                    errorAlert('Required', 'Item Nt Wt is Required !', 'loan_item_tunch' + counterItem);
                    return false;
                } else {
                    document.getElementById('loan_item_tunch'+ counterItem).style.borderColor = 'rgba(11, 36, 60, 0.32)';
                }
            }
            if (document.getElementById('loan_item_rate' + counterItem)) {
                if (document.getElementById('loan_item_rate' + counterItem).value == '') {
                    errorAlert('Required', 'Item Rate is Required !', 'loan_item_rate' + counterItem);
                    return false;
                } else {
                    document.getElementById('loan_item_rate'+ counterItem).style.borderColor = 'rgba(11, 36, 60, 0.32)';
                }
            }
            if (document.getElementById('loan_item_amt' + counterItem)) {
                if (document.getElementById('loan_item_amt' + counterItem).value == '') {
                    errorAlert('Required', 'Item Amount is Required !', 'loan_item_amt' + counterItem);
                    return false;
                } else {
                    document.getElementById('loan_item_amt'+ counterItem).style.borderColor = 'rgba(11, 36, 60, 0.32)';
                }
            }
        }
    }
    return true;
}

function fixedRateDisableField(){
   
    setTimeout(function(){
        var fixedRate = document.getElementById('fixedRate').checked;
        if (!document.getElementById('product_count')) {
            var productMergeCount = '0';
        } else {
            var productMergeCount = document.getElementById('product_count').value;
        }
        for (var noofproduct = 0; noofproduct < productMergeCount; noofproduct++) {
            if(fixedRate == true){
                document.getElementById('product_sale_rate' + noofproduct).disabled = false;
                document.getElementById('product_metal_amt' + noofproduct).disabled = false;
                document.getElementById('product_mkg_amt' + noofproduct).disabled = false;
                document.getElementById('product_other_amt' + noofproduct).disabled = false;
                document.getElementById('product_hallmark_amt' + noofproduct).disabled = false;
                document.getElementById('product_final_amt' + noofproduct).disabled = false;
            }else{
                document.getElementById('product_sale_rate' + noofproduct).disabled = true;
                document.getElementById('product_metal_amt' + noofproduct).disabled = true;
                document.getElementById('product_mkg_amt' + noofproduct).disabled = true;
                document.getElementById('product_other_amt' + noofproduct).disabled = true;
                document.getElementById('product_hallmark_amt' + noofproduct).disabled = true;
                document.getElementById('product_final_amt' + noofproduct).disabled = true;
            }
        }
    },700)
    
}