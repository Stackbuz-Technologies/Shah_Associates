//
// START CODE TO ADD FUNCTION FOR PRODUCT CALCULATION @AUTHOR:MADHURI-23MARCH2023
//
function productCalculation(prodCount) {
    //
    var prodTransType = '';
    var metalType = '';
    var prodPurchaseRate = 0;
    var prodSaleRate = 0;
    var prodRate = 0;
    var prodRateType = '';
    var prodQty = 0;
    var prodGsWt = 0;
    var prodGsWtType = '';
    var prodLsWt = 0;
    var prodStLsWt = 0;
    var prodNtWt = 0;
    var prodTunch = 0;
    var prodFnWt = 0;
    var prodWs = 0;
    var prodWsWt = 0;
    var prodWastageBy = ''
    var prodFinalWt = 0;
    var prodFinalWtBy = ''
    var prodLbrChrg = 0;
    var prodLbrChrgType = '';
    var prodLbrBy = ''
    var prodMkgChrg = 0;
    var prodMkgChrgType = '';
    var prodMkgBy = ''
    var prodOthChrg = 0;
    var prodOthChrgType = '';
    var prodOtherBy = ''
    var prodMetalAmt = 0;
    var prodMetalAmtBy = ''
    var prodLabourAmt = 0;
    var prodMakingAmt = 0;
    var prodOtherAmt = 0;
    var prodHallmarkAmt = 0;
    var gd_met_rate_per_wt_tp = '';
    var gd_met_rate_per_wt = 0;
    var sl_met_rate_per_wt_tp = '';
    var sl_met_rate_per_wt = 0;
    var oth_met_rate_per_wt_tp = '';
    var oth_met_rate_per_wt = 0;
    var gmWtInGm = 0;
    var gmWtInKg = 0;
    var gmWtInMg = 0;
    var srGmWtInGm = 0;
    var srGmWtInKg = 0;
    var srGmWtInMg = 0;
    var othGmWtInGm = 0;
    var othGmWtInKg = 0;
    var othGmWtInMg = 0;
    //
    if (typeof (document.getElementById('product_transaction_type' + prodCount)) != 'undefined' &&
        (document.getElementById('product_transaction_type' + prodCount) != null)) {
        prodTransType = document.getElementById('product_transaction_type' + prodCount).value;
    }
    //
    if (typeof (document.getElementById('product_metal_type' + prodCount)) != 'undefined' &&
        (document.getElementById('product_metal_type' + prodCount) != null)) {
        metalType = document.getElementById('product_metal_type' + prodCount).value;
    }
    //
    if (typeof (document.getElementById('product_purchase_rate' + prodCount)) != 'undefined' &&
        (document.getElementById('product_purchase_rate' + prodCount) != null)) {
        prodPurchaseRate = document.getElementById('product_purchase_rate' + prodCount).value;
    }
    //
    if (typeof (document.getElementById('product_sale_rate' + prodCount)) != 'undefined' &&
        (document.getElementById('product_sale_rate' + prodCount) != null)) {
        prodSaleRate = document.getElementById('product_sale_rate' + prodCount).value;
    }
    //
    if (typeof (document.getElementById('product_rate_type' + prodCount)) != 'undefined' &&
        (document.getElementById('product_rate_type' + prodCount) != null) &&
        typeof (document.getElementById('product_sale_rate_type' + prodCount)) != 'undefined' &&
        (document.getElementById('product_sale_rate_type' + prodCount) != null)) {
        //
        prodRateType = document.getElementById('product_sale_rate_type' + prodCount).value = document.getElementById('product_rate_type' + prodCount).value;
        //
    } else if (typeof (document.getElementById('product_rate_type' + prodCount)) != 'undefined' &&
        (document.getElementById('product_rate_type' + prodCount) != null)) {
        //
        prodRateType = document.getElementById('product_rate_type' + prodCount).value;
        //
    } else if (typeof (document.getElementById('product_sale_rate_type' + prodCount)) != 'undefined' &&
        (document.getElementById('product_sale_rate_type' + prodCount) != null)) {
        //
        prodRateType = document.getElementById('product_sale_rate_type' + prodCount).value;
        //
    }
    //
    if (prodPurchaseRate > 0) {
        prodRate = prodPurchaseRate;
    } else if (prodSaleRate > 0) {
        prodRate = prodSaleRate;
    }
    //
    if (typeof (document.getElementById('product_qty' + prodCount)) != 'undefined' &&
        (document.getElementById('product_qty' + prodCount) != null)) {
        prodQty = document.getElementById('product_qty' + prodCount).value;
    }
    //
    if (typeof (document.getElementById('product_gs_wt' + prodCount)) != 'undefined' &&
        (document.getElementById('product_gs_wt' + prodCount) != null)) {
        prodGsWt = document.getElementById('product_gs_wt' + prodCount).value;
    }
    //
    if (typeof (document.getElementById('product_gs_wt' + prodCount)) != 'undefined' &&
        (document.getElementById('product_gs_wt' + prodCount) != null) && prodGsWt != '') {
        document.getElementById('product_gs_wt' + prodCount).value = parseFloat(prodGsWt).toFixed(3);
    }
    //
    if (typeof (document.getElementById('product_gs_wt_type' + prodCount)) != 'undefined' &&
        (document.getElementById('product_gs_wt_type' + prodCount) != null)) {
        prodGsWtType = document.getElementById('product_gs_wt_type' + prodCount).value;
    }
    //
    if (typeof (document.getElementById('product_ls_wt' + prodCount)) != 'undefined' &&
        (document.getElementById('product_ls_wt' + prodCount) != null)) {
        prodLsWt = document.getElementById('product_ls_wt' + prodCount).value;
    }
    //
    if (typeof (document.getElementById('product_stone_ls_wt' + prodCount)) != 'undefined' &&
        (document.getElementById('product_stone_ls_wt' + prodCount) != null)) {
        prodStLsWt = document.getElementById('product_stone_ls_wt' + prodCount).value;
    }
    //
    if (typeof (document.getElementById('product_nt_wt' + prodCount)) != 'undefined' &&
        (document.getElementById('product_nt_wt' + prodCount) != null)) {
        prodNtWt = document.getElementById('product_nt_wt' + prodCount).value = parseFloat(prodGsWt - prodLsWt - prodStLsWt).toFixed(3);
    }
    //
    if (typeof (document.getElementById('product_tunch' + prodCount)) != 'undefined' &&
        (document.getElementById('product_tunch' + prodCount) != null)) {
        prodTunch = document.getElementById('product_tunch' + prodCount).value;
    }
    //
    if (typeof (document.getElementById('product_fn_wt' + prodCount)) != 'undefined' &&
        (document.getElementById('product_fn_wt' + prodCount) != null)) {
        prodFnWt = document.getElementById('product_fn_wt' + prodCount).value = parseFloat((prodNtWt * prodTunch) / 100).toFixed(3);
    }
    //
    if (typeof (document.getElementById('product_wastage' + prodCount)) != 'undefined' &&
        (document.getElementById('product_wastage' + prodCount) != null)) {
        prodWs = document.getElementById('product_wastage' + prodCount).value;
    }
    //
    if (metalType != 'Stone') {
        //
        if (metalType == 'Gold') {
            gd_met_rate_per_wt_tp = document.getElementById('met_rate_per_wt_tp' + prodCount).value;
            gd_met_rate_per_wt = document.getElementById('met_rate_per_wt' + prodCount).value;
        } else if (metalType == 'Silver') {
            sl_met_rate_per_wt_tp = document.getElementById('met_rate_per_wt_tp' + prodCount).value;
            sl_met_rate_per_wt = document.getElementById('met_rate_per_wt' + prodCount).value;
        } else {
            oth_met_rate_per_wt_tp = document.getElementById('met_rate_per_wt_tp' + prodCount).value;
            oth_met_rate_per_wt = document.getElementById('met_rate_per_wt' + prodCount).value;
        }
        // 
        // alert('gd_met_rate_per_wt : ' + gd_met_rate_per_wt);
        // alert('gd_met_rate_per_wt_tp : ' + gd_met_rate_per_wt_tp);
        //
        if (gd_met_rate_per_wt_tp == '') {
            gd_met_rate_per_wt_tp = 'GM';
        }
        if (gd_met_rate_per_wt == '' && prodRate.length == 4) {
            gd_met_rate_per_wt = 1;
            gd_met_rate_per_wt_tp = 'GM';
        } else if (gd_met_rate_per_wt == '' && prodRate.length == 5) {
            gd_met_rate_per_wt = 10;
            gd_met_rate_per_wt_tp = 'GM';
        } else if (gd_met_rate_per_wt == '') {
            gd_met_rate_per_wt = 1;
        }
        //
        if (sl_met_rate_per_wt_tp == '') {
            sl_met_rate_per_wt_tp = 'KG';
        }
        if (sl_met_rate_per_wt == '' && prodRate.length == 5) {
            sl_met_rate_per_wt = 1;
            sl_met_rate_per_wt_tp = 'KG';
        } else if (sl_met_rate_per_wt == '' && prodRate.length == 2) {
            sl_met_rate_per_wt = 1;
            sl_met_rate_per_wt_tp = 'GM';
        } else if (sl_met_rate_per_wt == '' && prodRate.length == 3) {
            sl_met_rate_per_wt = 10;
            sl_met_rate_per_wt_tp = 'GM';
        } else if (sl_met_rate_per_wt == '') {
            sl_met_rate_per_wt = 1;
        }
        //
        if (oth_met_rate_per_wt_tp == '') {
            oth_met_rate_per_wt_tp = 'GM';
        }
        if (oth_met_rate_per_wt == '') {
            oth_met_rate_per_wt = 1;
        }
        //
        if (metalType == 'Gold') {
            if (gd_met_rate_per_wt_tp == 'GM') {
                gmWtInGm = gd_met_rate_per_wt;
                gmWtInKg = 1000 / gd_met_rate_per_wt;
                gmWtInMg = 1000 * gd_met_rate_per_wt;
            } else if (gd_met_rate_per_wt_tp == 'KG') {
                gmWtInGm = 1000 * gd_met_rate_per_wt;
                gmWtInKg = gd_met_rate_per_wt;
                gmWtInMg = 1000 * 1000 * gd_met_rate_per_wt;
            } else if (gd_met_rate_per_wt_tp == 'MG') {
                gmWtInGm = 1000 / gd_met_rate_per_wt;
                gmWtInKg = (1000 * 1000) / gd_met_rate_per_wt;
                gmWtInMg = gd_met_rate_per_wt;
            }
        } else if (metalType == 'Silver') {
            if (sl_met_rate_per_wt_tp == 'GM') {
                srGmWtInGm = sl_met_rate_per_wt;
                srGmWtInKg = 1000 / sl_met_rate_per_wt;
                srGmWtInMg = 1000 * sl_met_rate_per_wt;
            } else if (sl_met_rate_per_wt_tp == 'KG') {
                srGmWtInGm = sl_met_rate_per_wt * 1000;
                srGmWtInKg = sl_met_rate_per_wt;
                srGmWtInMg = sl_met_rate_per_wt * (1000 * 1000);
            } else if (sl_met_rate_per_wt_tp == 'MG') {
                srGmWtInGm = 1000 / sl_met_rate_per_wt;
                srGmWtInKg = (1000 * 1000) / sl_met_rate_per_wt;
                srGmWtInMg = sl_met_rate_per_wt;
            }
        } else {
            if (oth_met_rate_per_wt_tp == 'GM') {
                othGmWtInGm = oth_met_rate_per_wt;
                othGmWtInKg = 1000 / oth_met_rate_per_wt;
                othGmWtInMg = 1000 * oth_met_rate_per_wt;
            } else if (oth_met_rate_per_wt_tp == 'KG') {
                othGmWtInGm = oth_met_rate_per_wt * 1000;
                othGmWtInKg = oth_met_rate_per_wt;
                othGmWtInMg = oth_met_rate_per_wt * (1000 * 1000);
            } else if (oth_met_rate_per_wt_tp == 'MG') {
                othGmWtInGm = 1000 / oth_met_rate_per_wt;
                othGmWtInKg = (1000 * 1000) / oth_met_rate_per_wt;
                othGmWtInMg = oth_met_rate_per_wt;
            }
        }
    }
    //
    if (metalType == 'Gold') {
        if (prodGsWtType == 'KG') {
            prodRate = parseFloat((prodRate * gmWtInKg)).toFixed(2);
        } else if (prodGsWtType == 'GM') {
            prodRate = parseFloat((prodRate / gmWtInGm)).toFixed(2);
        } else if (prodGsWtType == 'MG') {
            prodRate = parseFloat((prodRate / gmWtInMg)).toFixed(2);
        }
    } else if (metalType == 'Silver') {
        if (prodGsWtType == 'KG') {
            prodRate = parseFloat((prodRate * srGmWtInKg)).toFixed(2);
        } else if (prodGsWtType == 'GM') {
            prodRate = parseFloat((prodRate / srGmWtInGm)).toFixed(2);
        } else if (prodGsWtType == 'MG') {
            prodRate = parseFloat((prodRate / srGmWtInMg)).toFixed(2);
        }
    } else if (metalType == 'Stone') {
        prodRate = prodRate;
    } else {
        if (prodGsWtType == 'KG') {
            prodRate = parseFloat((prodRate * othGmWtInKg)).toFixed(2);
        } else if (prodGsWtType == 'GM') {
            prodRate = parseFloat((prodRate / othGmWtInGm)).toFixed(2);
        } else if (prodGsWtType == 'MG') {
            prodRate = parseFloat((prodRate / othGmWtInMg)).toFixed(2);
        }
    }
    //
    if (metalType != 'Stone') {
        //
        if (prodWs > 0) {
            //
            if (typeof (document.getElementById('product_wastage_by' + prodCount)) != 'undefined' &&
                (document.getElementById('product_wastage_by' + prodCount) != null)) {
                prodWastageBy = document.getElementById('product_wastage_by' + prodCount).value;
            }
            //
            var prodWastageByWt;
            //
            if (prodWastageBy == 'byGrossWt') {
                prodWastageByWt = prodGsWt;
            } else if (prodWastageBy == 'byNetWt') {
                prodWastageByWt = prodNtWt;
            } else if (prodWastageBy == 'byFineWt') {
                prodWastageByWt = prodFnWt;
            } else {
                prodWastageByWt = prodNtWt;
            }
            //
            if (typeof (document.getElementById('product_wastage_wt' + prodCount)) != 'undefined' &&
                (document.getElementById('product_wastage_wt' + prodCount) != null)) {
                prodWsWt = document.getElementById('product_wastage_wt' + prodCount).value = parseFloat((prodWastageByWt * prodWs) / 100).toFixed(3);
            }
            //
        }
        //
        if (typeof (document.getElementById('product_final_wt' + prodCount)) != 'undefined' &&
            (document.getElementById('product_final_wt' + prodCount) != null)) {
            //
            if (typeof (document.getElementById('product_final_wt_by' + prodCount)) != 'undefined' &&
                (document.getElementById('product_final_wt_by' + prodCount) != null)) {
                prodFinalWtBy = document.getElementById('product_final_wt_by' + prodCount).value;
            }
            //
            var prodFinalWtByWt;
            //
            if (prodFinalWtBy == 'byGrossWt') {
                prodFinalWtByWt = prodGsWt;
            } else if (prodWastageBy == 'byNetWt') {
                prodFinalWtByWt = prodNtWt;
            } else if (prodWastageBy == 'byFineWt') {
                prodFinalWtByWt = prodFnWt;
            } else {
                prodFinalWtByWt = prodFnWt;
            }
            //
            prodFinalWt = document.getElementById('product_final_wt' + prodCount).value = parseFloat(parseFloat(prodFinalWtByWt) + parseFloat(prodWsWt)).toFixed(3);
            //  
        }
        //
        if (typeof (document.getElementById('product_lbr_chrg' + prodCount)) != 'undefined' &&
            (document.getElementById('product_lbr_chrg' + prodCount) != null)) {
            prodLbrChrg = document.getElementById('product_lbr_chrg' + prodCount).value;
        }
        //
        if (prodLbrChrg > 0) {
            //
            if (typeof (document.getElementById('product_lbr_chrg_by' + prodCount)) != 'undefined' &&
                (document.getElementById('product_lbr_chrg_by' + prodCount) != null)) {
                prodLbrBy = document.getElementById('product_lbr_chrg_by' + prodCount).value;
            }
            //
            var prodLbrByWt;
            //
            if (prodLbrBy == 'byGrossWt') {
                prodLbrByWt = prodGsWt;
            } else if (prodLbrBy == 'byNetWt') {
                prodLbrByWt = prodNtWt;
            } else if (prodLbrBy == 'byFineWt') {
                prodLbrByWt = prodFnWt;
            } else if (prodLbrBy == 'byFFineWt') {
                prodLbrByWt = prodFinalWt;
            } else {
                prodLbrByWt = prodNtWt;
            }
            //
            if (typeof (document.getElementById('product_lbr_chrg_type' + prodCount)) != 'undefined' &&
                (document.getElementById('product_lbr_chrg_type' + prodCount) != null)) {
                prodLbrChrgType = document.getElementById('product_lbr_chrg_type' + prodCount).value;
            }
            //
            if (prodLbrChrgType == 'KG') {
                //
                if (prodGsWtType == 'KG') {
                    prodLabourAmt = (prodLbrChrg * prodLbrByWt);
                } else if (prodGsWtType == 'GM') {
                    prodLabourAmt = (prodLbrChrg / 1000) * prodLbrByWt;
                } else {
                    prodLabourAmt = (prodLbrChrg / (1000 * 1000)) * prodLbrByWt;
                }
                //
            } else if (prodLbrChrgType == 'GM') {
                //
                if (prodGsWtType == 'KG') {
                    prodLabourAmt = (prodLbrChrg * 1000 * prodLbrByWt);
                } else if (prodGsWtType == 'GM') {
                    prodLabourAmt = (prodLbrChrg * prodLbrByWt);
                } else {
                    prodLabourAmt = ((prodLbrChrg / 1000) * prodLbrByWt);
                }
                //
            } else if (prodLbrChrgType == 'MG') {
                //
                if (prodGsWtType == 'KG') {
                    prodLabourAmt = (prodLbrChrg * 1000 * 1000 * prodLbrByWt);
                } else if (prodGsWtType == 'GM') {
                    prodLabourAmt = (prodLbrChrg * 1000 * prodLbrByWt);
                } else {
                    prodLabourAmt = (prodLbrChrg * prodLbrByWt);
                }
                //
            } else if (prodLbrChrgType == 'PP') {
                //
                prodLabourAmt = (prodLbrChrg * prodQty);
                //
            } else if (prodLbrChrgType == 'FIX') {
                //
                prodLabourAmt = prodLbrChrg;
                //
            } else if (prodLbrChrgType == '%') {
                //
                prodLabourAmt = (((prodLbrChrg * prodLbrByWt) / 100) * prodRate);
                //
            }
            //
            prodLabourAmt = parseFloat(prodLabourAmt).toFixed(2);
            //
            if (typeof (document.getElementById('product_lbr_amt' + prodCount)) != 'undefined' &&
                (document.getElementById('product_lbr_amt' + prodCount) != null)) {
                document.getElementById('product_lbr_amt' + prodCount).value = prodLabourAmt;
            }
            //
        }
        //
        if (typeof (document.getElementById('product_mkg_chrg' + prodCount)) != 'undefined' &&
            (document.getElementById('product_mkg_chrg' + prodCount) != null)) {
            prodMkgChrg = document.getElementById('product_mkg_chrg' + prodCount).value;
        }
        //
        if (prodMkgChrg > 0) {
            //
            if (typeof (document.getElementById('product_mkg_chrg_by' + prodCount)) != 'undefined' &&
                (document.getElementById('product_mkg_chrg_by' + prodCount) != null)) {
                prodMkgBy = document.getElementById('product_mkg_chrg_by' + prodCount).value;
            }
            //
            var prodMkgByWt;
            //
            if (prodMkgBy == 'byGrossWt') {
                prodMkgByWt = prodGsWt;
            } else if (prodMkgBy == 'byNetWt') {
                prodMkgByWt = prodNtWt;
            } else if (prodMkgBy == 'byFineWt') {
                prodMkgByWt = prodFnWt;
            } else if (prodMkgBy == 'byFFineWt') {
                prodMkgByWt = prodFinalWt;
            } else {
                prodMkgByWt = prodNtWt;
            }
            //
            if (typeof (document.getElementById('product_mkg_chrg_type' + prodCount)) != 'undefined' &&
                (document.getElementById('product_mkg_chrg_type' + prodCount) != null)) {
                prodMkgChrgType = document.getElementById('product_mkg_chrg_type' + prodCount).value;
            }
            //
            if (prodMkgChrgType == 'KG') {
                //
                if (prodGsWtType == 'KG') {
                    prodMakingAmt = (prodMkgChrg * prodMkgByWt);
                } else if (prodGsWtType == 'GM') {
                    prodMakingAmt = (prodMkgChrg / 1000) * prodMkgByWt;
                } else {
                    prodMakingAmt = (prodMkgChrg / (1000 * 1000)) * prodMkgByWt;
                }
                //
            } else if (prodMkgChrgType == 'GM') {
                //
                if (prodGsWtType == 'KG') {
                    prodMakingAmt = (prodMkgChrg * 1000 * prodMkgByWt);
                } else if (prodGsWtType == 'GM') {
                    prodMakingAmt = (prodMkgChrg * prodMkgByWt);
                } else {
                    prodMakingAmt = ((prodMkgChrg / 1000) * prodMkgByWt);
                }
                //
            } else if (prodMkgChrgType == 'MG') {
                //
                if (prodGsWtType == 'KG') {
                    prodMakingAmt = (prodMkgChrg * 1000 * 1000 * prodMkgByWt);
                } else if (prodGsWtType == 'GM') {
                    prodMakingAmt = (prodMkgChrg * 1000 * prodMkgByWt);
                } else {
                    prodMakingAmt = (prodMkgChrg * prodMkgByWt);
                }
                //
            } else if (prodMkgChrgType == 'PP') {
                //
                prodMakingAmt = (prodMkgChrg * prodQty);
                //
            } else if (prodMkgChrgType == 'FIX') {
                //
                prodMakingAmt = prodMkgChrg;
                //
            } else if (prodMkgChrgType == '%') {
                //
                prodMakingAmt = (((prodMkgChrg * prodMkgByWt) / 100) * prodRate);
                //
            }
            //
            prodMakingAmt = parseFloat(prodMakingAmt).toFixed(2);
            //
            if (typeof (document.getElementById('product_mkg_amt' + prodCount)) != 'undefined' &&
                (document.getElementById('product_mkg_amt' + prodCount) != null)) {
                document.getElementById('product_mkg_amt' + prodCount).value = prodMakingAmt;
            }
            //
        }
        //
        if (typeof (document.getElementById('product_other_chrg' + prodCount)) != 'undefined' &&
            (document.getElementById('product_other_chrg' + prodCount) != null)) {
            prodOthChrg = document.getElementById('product_other_chrg' + prodCount).value;
        }
        //
        if (prodOthChrg > 0) {
            //
            if (typeof (document.getElementById('product_other_chrg_by' + prodCount)) != 'undefined' &&
                (document.getElementById('product_other_chrg_by' + prodCount) != null)) {
                prodOtherBy = document.getElementById('product_other_chrg_by' + prodCount).value;
            }
            //
            var prodOtherByWt;
            //
            if (prodOtherBy == 'byGrossWt') {
                prodOtherByWt = prodGsWt;
            } else if (prodOtherBy == 'byNetWt') {
                prodOtherByWt = prodNtWt;
            } else if (prodOtherBy == 'byFineWt') {
                prodOtherByWt = prodFnWt;
            } else if (prodOtherBy == 'byFFineWt') {
                prodOtherByWt = prodFinalWt;
            } else {
                prodOtherByWt = prodNtWt;
            }
            //
            if (typeof (document.getElementById('product_other_chrg_type' + prodCount)) != 'undefined' &&
                (document.getElementById('product_other_chrg_type' + prodCount) != null)) {
                prodOthChrgType = document.getElementById('product_other_chrg_type' + prodCount).value;
            }
            //
            if (prodOthChrgType == 'KG') {
                //
                if (prodGsWtType == 'KG') {
                    prodOtherAmt = (prodOthChrg * prodOtherByWt);
                } else if (prodGsWtType == 'GM') {
                    prodOtherAmt = (prodOthChrg / 1000) * prodOtherByWt;
                } else {
                    prodOtherAmt = (prodOthChrg / (1000 * 1000)) * prodOtherByWt;
                }
                //
            } else if (prodOthChrgType == 'GM') {
                //
                if (prodGsWtType == 'KG') {
                    prodOtherAmt = (prodOthChrg * 1000 * prodOtherByWt);
                } else if (prodGsWtType == 'GM') {
                    prodOtherAmt = (prodOthChrg * prodOtherByWt);
                } else {
                    prodOtherAmt = ((prodOthChrg / 1000) * prodOtherByWt);
                }
                //
            } else if (prodOthChrgType == 'MG') {
                //
                if (prodGsWtType == 'KG') {
                    prodOtherAmt = (prodOthChrg * 1000 * 1000 * prodOtherByWt);
                } else if (prodGsWtType == 'GM') {
                    prodOtherAmt = (prodOthChrg * 1000 * prodOtherByWt);
                } else {
                    prodOtherAmt = (prodOthChrg * prodOtherByWt);
                }
                //
            } else if (prodOthChrgType == 'PP') {
                //
                prodOtherAmt = (prodOthChrg * prodQty);
                //
            } else if (prodOthChrgType == 'FIX') {
                //
                prodOtherAmt = prodOthChrg;
                //
            } else if (prodOthChrgType == '%') {
                //
                prodOtherAmt = (((prodOthChrg * prodOtherByWt) / 100) * prodRate);
                //
            }
            //
            prodOtherAmt = parseFloat(prodOtherAmt).toFixed(2);
            //
            if (typeof (document.getElementById('product_other_amt' + prodCount)) != 'undefined' &&
                (document.getElementById('product_other_amt' + prodCount) != null)) {
                document.getElementById('product_other_amt' + prodCount).value = prodOtherAmt;
            }
            //
        }
        //
        if (typeof (document.getElementById('product_metal_amt_by' + prodCount)) != 'undefined' &&
            (document.getElementById('product_metal_amt_by' + prodCount) != null)) {
            prodMetalAmtBy = document.getElementById('product_metal_amt_by' + prodCount).value;
        }
        //
        var prodMetalAmtByWt;
        //
        if (prodMetalAmtBy == 'byGrossWt') {
            prodMetalAmtByWt = prodGsWt;
        } else if (prodMetalAmtBy == 'byNetWt') {
            prodMetalAmtByWt = prodNtWt;
        } else if (prodMetalAmtBy == 'byFineWt') {
            prodMetalAmtByWt = prodFnWt;
        } else if (prodMetalAmtBy == 'byFFineWt') {
            prodMetalAmtByWt = prodFinalWt;
        } else {
            prodMetalAmtByWt = prodFinalWt;
        }
        //
        if (prodMetalAmtByWt > 0 && prodRate > 0) {
            //
            if (typeof (document.getElementById('product_metal_amt' + prodCount)) != 'undefined' &&
                (document.getElementById('product_metal_amt' + prodCount) != null)) {
                prodMetalAmt = document.getElementById('product_metal_amt' + prodCount).value = parseFloat((prodMetalAmtByWt * prodRate)).toFixed(2);
            }
            //
        }
        //
        if (typeof (document.getElementById('product_hallmark_amt' + prodCount)) != 'undefined' &&
            (document.getElementById('product_hallmark_amt' + prodCount) != null)) {
            prodHallmarkAmt = document.getElementById('product_hallmark_amt' + prodCount).value;
        }
        //
        if (prodMetalAmt == '' || prodMetalAmt == 'NaN') {
            prodMetalAmt = 0;
        }
        //
        if (prodHallmarkAmt == '' || prodHallmarkAmt == 'NaN') {
            prodHallmarkAmt = 0;
        }
        //
        if (prodOtherAmt == '' || prodOtherAmt == 'NaN') {
            prodOtherAmt = 0;
        }
        //
        if (prodMakingAmt == '' || prodMakingAmt == 'NaN') {
            prodMakingAmt = 0;
        }
        //
        if (prodMakingAmt == '' || prodMakingAmt == 'NaN') {
            prodMakingAmt = 0;
        }
        //
        if (typeof (document.getElementById('product_final_amt' + prodCount)) != 'undefined' &&
            (document.getElementById('product_final_amt' + prodCount) != null)) {
            if (prodTransType == 'Sale') {
                document.getElementById('product_final_amt' + prodCount).value = parseFloat(parseFloat(prodMetalAmt) + parseFloat(prodHallmarkAmt) + parseFloat(prodOtherAmt) + parseFloat(prodLabourAmt) + parseFloat(prodMakingAmt)).toFixed(2);
            } else {
                document.getElementById('product_final_amt' + prodCount).value = parseFloat(parseFloat(prodMetalAmt) + parseFloat(prodHallmarkAmt) + parseFloat(prodOtherAmt) + parseFloat(prodLabourAmt)).toFixed(2);
            }
            //
            document.getElementById('product_final_sale_amt' + prodCount).value = parseFloat(parseFloat(prodMetalAmt) + parseFloat(prodHallmarkAmt) + parseFloat(prodOtherAmt) + parseFloat(prodLabourAmt) + parseFloat(prodMakingAmt)).toFixed(2);
            //
            if (document.getElementById('product_final_amt' + prodCount).value == '' || document.getElementById('product_final_amt' + prodCount).value == 'NaN') {
                document.getElementById('product_final_amt' + prodCount).value = parseFloat(0).toFixed(2);
            }
            //
        }
        //
    } else {
        //
        var currentRate = 0;
        var currentSaleRate = 0;
        //
        if (prodRateType == 'PP') {
            prodStoneAmt = prodRate * prodQty;
            prodSellStoneAmt = prodSaleRate * prodQty;
        } else if (prodGsWtType == 'CT' && prodRateType == 'CT') {
            prodStoneAmt = prodRate * prodGsWt;
            prodSellStoneAmt = prodSaleRate * prodGsWt;
        } else if (prodGsWtType == 'CT' && prodRateType == 'GM') {
            currentRate = (prodRate * 0.2);
            prodStoneAmt = currentRate * prodGsWt;
            currentSaleRate = (prodSaleRate * 0.2);
            prodSellStoneAmt = currentRate * prodGsWt;
        } else if (prodGsWtType == 'CT' && prodRateType == 'MG') {
            currentRate = (prodRate * 0.005);
            prodStoneAmt = currentRate * prodGsWt;
            currentSaleRate = (prodSaleRate * 0.005);
            prodSellStoneAmt = currentRate * prodGsWt;
        } else if (prodGsWtType == 'CT' && prodRateType == 'KG') {
            currentRate = (prodRate * 5000);
            prodStoneAmt = currentRate * prodGsWt;
            currentSaleRate = (prodSaleRate * 5000);
            prodSellStoneAmt = currentRate * prodGsWt;
        } else if (prodGsWtType == 'GM' && prodRateType == 'CT') {
            currentRate = (prodRate * 5);
            prodStoneAmt = currentRate * prodGsWt;
            currentSaleRate = (prodSaleRate * 5);
            prodSellStoneAmt = currentRate * prodGsWt;
        } else if (prodGsWtType == 'GM' && prodRateType == 'GM') {
            prodStoneAmt = prodRate * prodGsWt;
            prodSellStoneAmt = prodSaleRate * prodGsWt;
        } else if (prodGsWtType == 'GM' && prodRateType == 'MG') {
            currentRate = (prodRate * 0.001);
            prodStoneAmt = currentRate * prodGsWt;
            currentSaleRate = (prodSaleRate * 0.001);
            prodSellStoneAmt = currentRate * prodGsWt;
        } else if (prodGsWtType == 'GM' && prodRateType == 'KG') {
            currentRate = (prodRate * 1000);
            prodStoneAmt = currentRate * prodGsWt;
            currentSaleRate = (prodSaleRate * 1000);
            prodSellStoneAmt = currentRate * prodGsWt;
        } else if (prodGsWtType == 'MG' && prodRateType == 'CT') {
            currentRate = (prodRate * 0.005);
            prodStoneAmt = currentRate * prodGsWt;
            currentSaleRate = (prodSaleRate * 0.005);
            prodSellStoneAmt = currentRate * prodGsWt;
        } else if (prodGsWtType == 'MG' && prodRateType == 'GM') {
            currentRate = (prodRate * 1000);
            prodStoneAmt = currentRate * prodGsWt;
            currentSaleRate = (prodSaleRate * 1000);
            prodSellStoneAmt = currentRate * prodGsWt;
        } else if (prodGsWtType == 'MG' && prodRateType == 'MG') {
            prodStoneAmt = prodRate * prodGsWt;
            prodSellStoneAmt = prodSaleRate * prodGsWt;
        } else if (prodGsWtType == 'MG' && prodRateType == 'KG') {
            currentRate = (prodRate * 1000000);
            prodStoneAmt = currentRate * prodGsWt;
            currentSaleRate = (prodSaleRate * 1000000);
            prodSellStoneAmt = currentRate * prodGsWt;
        } else if (prodGsWtType == 'KG' && prodRateType == 'CT') {
            currentRate = (prodRate * 0.0002);
            prodStoneAmt = currentRate * prodGsWt;
            currentSaleRate = (prodSaleRate * 0.0002);
            prodSellStoneAmt = currentRate * prodGsWt;
        } else if (prodGsWtType == 'KG' && prodRateType == 'GM') {
            currentRate = (prodRate * 0.001);
            prodStoneAmt = currentRate * prodGsWt;
            currentSaleRate = (prodSaleRate * 0.001);
            prodSellStoneAmt = currentRate * prodGsWt;
        } else if (prodGsWtType == 'KG' && prodRateType == 'MG') {
            currentRate = (prodRate * 1000000);
            prodStoneAmt = currentRate * prodGsWt;
            currentSaleRate = (prodSaleRate * 1000000);
            prodSellStoneAmt = currentRate * prodGsWt;
        } else if (prodGsWtType == 'KG' && prodRateType == 'KG') {
            prodStoneAmt = prodRate * prodGsWt;
            prodSellStoneAmt = prodSaleRate * prodGsWt;
        } else {
            prodStoneAmt = prodRate * prodGsWt;
            prodSellStoneAmt = prodSaleRate * prodGsWt;
        }
        //
        if (typeof (document.getElementById('product_final_amt' + prodCount)) != 'undefined' &&
            (document.getElementById('product_final_amt' + prodCount) != null)) {
            //
            document.getElementById('product_final_amt' + prodCount).value = parseFloat(prodStoneAmt).toFixed(2);
            document.getElementById('product_final_sale_amt' + prodCount).value = parseFloat(prodSellStoneAmt).toFixed(2);
            //
            if (document.getElementById('product_final_amt' + prodCount).value == '' || document.getElementById('product_final_amt' + prodCount).value == 'NaN') {
                document.getElementById('product_final_amt' + prodCount).value = parseFloat(0).toFixed(2);
            }
            //
        }
        //
    }
    //
    calculateFinalProductPrice();
    //
}
//
// END CODE TO ADD FUNCTION FOR PRODUCT CALCULATION @AUTHOR:MADHURI-23MARCH2023
//
//
// START CODE TO ADD FUNCTION FOR FINAL PRODUCT CALCULATION @AUTHOR:MADHURI-23MARCH2023
//
function calculateFinalProductPrice() {
    //
    if ((typeof (document.getElementById('product_final_purchase_price')) != 'undefined' &&
        (document.getElementById('product_final_purchase_price') != null)) &&
        (typeof (document.getElementById('product_final_sale_price')) != 'undefined' &&
            (document.getElementById('product_final_sale_price') != null))) {
        //
        if (typeof (document.getElementById('product_count')) != 'undefined' &&
            (document.getElementById('product_count') != null)) {
            var product_count = document.getElementById('product_count').value;
        } else {
            var product_count = 0;
        }
        //
        var product_final_purchase_price = 0;
        var product_main_final_valuation = 0;
        var product_stone_final_valuation = 0;
        var product_final_sale_price = 0;
        var product_main_sale_final_valuation = 0;
        var product_stone_sale_final_valuation = 0;
        //
        for (var p = 0; p <= product_count; p++) {
            //
            if (typeof (document.getElementById('product_final_amt' + p)) != 'undefined' &&
                (document.getElementById('product_final_amt' + p) != null)) {
                product_main_final_valuation = (parseFloat(parseFloat(product_main_final_valuation)
                    + parseFloat(document.getElementById('product_final_amt' + p).value))).toFixed(2);
            }
            //
            if (typeof (document.getElementById('product_final_sale_amt' + p)) != 'undefined' &&
                (document.getElementById('product_final_sale_amt' + p) != null)) {
                product_main_sale_final_valuation = (parseFloat(parseFloat(product_main_sale_final_valuation)
                    + parseFloat(document.getElementById('product_final_sale_amt' + p).value))).toFixed(2);
            }
            //
            if (typeof (document.getElementById('sub_product_count' + p)) != 'undefined' &&
                (document.getElementById('sub_product_count' + p) != null)) {
                var sub_product_count = document.getElementById('sub_product_count' + p).value;
            } else {
                var sub_product_count = 0;
            }
            //
            for (var s = 1; s <= sub_product_count; s++) {
                //
                if (typeof (document.getElementById('product_final_amt' + p + s)) != 'undefined' &&
                    (document.getElementById('product_final_amt' + p + s) != null)) {
                    product_stone_final_valuation = (parseFloat(parseFloat(product_stone_final_valuation)
                        + parseFloat(document.getElementById('product_final_amt' + p + s).value))).toFixed(2);
                }
                //
                if (typeof (document.getElementById('product_final_sale_amt' + p + s)) != 'undefined' &&
                    (document.getElementById('product_final_sale_amt' + p + s) != null)) {
                    product_stone_sale_final_valuation = (parseFloat(parseFloat(product_stone_sale_final_valuation)
                        + parseFloat(document.getElementById('product_final_sale_amt' + p + s).value))).toFixed(2);
                }
                //
            }
            //
            if (typeof (document.getElementById('product_count' + p)) != 'undefined' &&
                (document.getElementById('product_count' + p) != null)) {
                var sub_product_count = document.getElementById('product_count' + p).value;
            } else {
                var sub_product_count = 0;
            }
        }
        //
        product_final_purchase_price = (parseFloat(parseFloat(product_main_final_valuation)
            + parseFloat(product_stone_final_valuation))).toFixed(2);
        //
        document.getElementById('product_final_purchase_price').value = parseFloat(product_final_purchase_price).toFixed(2);
        //
        if (document.getElementById('product_final_purchase_price').value == '' ||
            document.getElementById('product_final_purchase_price').value == 'NaN') {
            document.getElementById('product_final_purchase_price').value = 0;
        }
        // 
        product_final_sale_price = (parseFloat(parseFloat(product_main_sale_final_valuation)
            + parseFloat(product_stone_sale_final_valuation))).toFixed(2);
        //
        document.getElementById('product_final_sale_price').value = parseFloat(product_final_sale_price).toFixed(2);
        //
        if (document.getElementById('product_final_sale_price').value == '' ||
            document.getElementById('product_final_sale_price').value == 'NaN') {
            document.getElementById('product_final_sale_price').value = 0;
        }
        //
    }
    //
}
//
// END CODE TO ADD FUNCTION FOR FINAL PRODUCT CALCULATION @AUTHOR:MADHURI-23MARCH2023
//
function weight_Calculation(count) {
    var scheme_deposit_paid_amt = document.getElementById('scheme_deposit_paid_amt' + count).value;
    var scheme_deposit_rate = document.getElementById('scheme_deposit_rate' + count).value;
    var scheme_deposit_total_amount = document.getElementById('scheme_deposit_total_amount' + count).value;
    if (scheme_deposit_total_amount != '') {
        var scheme_deposit_paid_amt = scheme_deposit_total_amount;
    }
    var scheme_deposit_paid_wt = scheme_deposit_paid_amt / scheme_deposit_rate;

    // document.getElementById('finalAmtDiv'+count).innerHTML=scheme_deposit_paid_wt.toFixed(2);
    // document.getElementById('scheme_deposit_paid_wt' + count).value = scheme_deposit_paid_wt.toFixed(2);
    document.getElementById('scheme_deposit_paid_wt' + count).value = scheme_deposit_paid_wt.toFixed(2);
}
//
//
//
function time_calculation(count) {
    var scheme_deposit_paid_date = document.getElementById('scheme_deposit_paid_date' + count).value;
    var scheme_deposit_end_date = document.getElementById('scheme_deposit_end_date' + count).value;
    //
    var date1 = new Date(scheme_deposit_paid_date);
    var date2 = new Date(scheme_deposit_end_date);

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    // document.getElementById('finalAmtDiv'+count).innerHTML=scheme_deposit_paid_wt.toFixed(2);
    document.getElementById('scheme_deposit_time_period' + count).value = Math.round(Difference_In_Days);
    document.getElementById('scheme_deposit_paid_amt' + count).focus();
}
//
//
function interest_amount_calculation(count) {
    var scheme_interest = document.getElementById('scheme_interest' + count).value;
    scheme_interest = (scheme_interest / 100);
    var scheme_deposit_paid_amt = document.getElementById('scheme_deposit_paid_amt' + count).value;
    var scheme_deposit_time_period = document.getElementById('scheme_deposit_time_period' + count).value;
    var scheme_deposit_time_period = (scheme_deposit_time_period / 365);

    //
    //
    var scheme_deposit_interest_amount = scheme_deposit_paid_amt * scheme_interest * scheme_deposit_time_period;

    var scheme_deposit_total_amount = parseFloat(scheme_deposit_interest_amount) + parseFloat(scheme_deposit_paid_amt);
    //
    document.getElementById('scheme_deposit_interest_amount' + count).value = scheme_deposit_interest_amount.toFixed(2);
    document.getElementById('scheme_deposit_total_amount' + count).value = scheme_deposit_total_amount.toFixed(2);
    //
    document.getElementById('scheme_deposit_total_amount' + count).focus();
}