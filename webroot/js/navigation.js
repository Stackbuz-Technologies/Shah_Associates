
function shortCutKeyFun(httpHost, event) {
    var altLeft = false,    altRight = false;
    //SHORTCUT FOR ADD Dashboard-D
    // alert(event.which);
    if (event.altKey && event.which == 68) {
        var url = httpHost +'/dashboard'
        window.open(url, '_self', false)
        event.preventDefault(); 
    } else if (event.altKey && event.shiftKey && event.which == 67) {
        //SHORTCUT FOR CUSTOMER LIST-ALT+SHIFT+C
        var url = httpHost + '/customer/customerlist'
        window.open(url, '_self', false)
        event.preventDefault();        

    }else if (event.altKey && event.which == 67) {
        //SHORTCUT FOR ADD CUSTOMER-C
        var url = httpHost + '/' + 'customer'
        window.open(url, '_self', false)
        event.preventDefault(); 

    } else if (event.altKey && event.shiftKey && event.which == 87) {
        //SHORTCUT FOR SUPPLIER LIST-ALT+SHIFT+W
        var url = httpHost + '/supplier/supplierlist'
        window.open(url, '_self', false)
        event.preventDefault();        

    }else if (event.altKey && event.which == 87) {
        //SHORTCUT FOR ADD SUPPLIER-W
        var url = httpHost + '/supplier'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.altKey && event.shiftKey && event.which == 85) {
        //SHORTCUT FOR SUPPLIER LIST-ALT+SHIFT+U
        var url = httpHost + '/staff/stafflist'
        window.open(url, '_self', false)
        event.preventDefault();        

    }else if (event.altKey && event.which == 85) {
        //SHORTCUT FOR ADD STAFF-U
        var url = httpHost + '/staff'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.altKey && event.shiftKey && event.which == 81) {
        //SHORTCUT FOR ADD QUOTATION-Q LIST-ALT+SHIFT+O 
        var url = httpHost + '/quotation/list'
        window.open(url, '_self', false)
        event.preventDefault();        

    } else if (event.altKey && event.which == 81) {
        //SHORTCUT FOR ADD QUOTATION-Q
        var url = httpHost + '/quotation/add'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.altKey && event.which == 72) {
        //SHORTCUT FOR ADD HELP-H
        var url = httpHost + '/help/shortcutkey'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.altKey && event.shiftKey && event.which == 83) {
        //SHORTCUT FOR  SALELIST-S LIST-ALT+SHIFT+S 
        var url = httpHost + '/sale/salelist'
        window.open(url, '_self', false)
        event.preventDefault();        

    } else if (event.altKey && event.which == 83) {
        //SHORTCUT FOR ADD SALE-S
        var url = httpHost + '/sale'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.altKey && event.shiftKey && event.which == 80) {
        //SHORTCUT FOR  PRODUCT LIST-P LIST-ALT+SHIFT+P
        var url = httpHost + '/purchase/purchaselist'
        window.open(url, '_self', false)
        event.preventDefault();        

    } else if (event.altKey && event.which == 80) {
        //SHORTCUT FOR ADD PRODUCT-P 
        var url = httpHost + '/purchase'
        window.open(url, '_self', false)
        event.preventDefault(); 
                      
    }else if (event.altKey && event.shiftKey && event.which == 73) {
        //SHORTCUT FOR ADD PRODUCT LIST-ALT+SHIFT+I 
        var url = httpHost + '/product/productlist'
        window.open(url, '_self', false)
        event.preventDefault();        
                      
    }else if (event.altKey  && event.which == 73) {
        //SHORTCUT FOR ADD PRODUCT LIST-ALT+SHIFT+I 
        var url = httpHost + '/product'
        window.open(url, '_self', false)
        event.preventDefault();        
                      
    }else if (event.altKey && event.shiftKey && event.which == 77) {
        //SHORTCUT FOR ADD PRODUCT Transfer -SHIFT M
        var url = httpHost + '/' + 'product/transfer_product'
        window.open(url, '_self', false)
        event.preventDefault(); 
                      
    }else if (event.altKey && event.which == 77) {
        //SHORTCUT FOR ADD PRODUCT Master -M 
        var url = httpHost + '/product/master'
        window.open(url, '_self', false)
        event.preventDefault();        
                      
    }else if (event.altKey && event.which == 78) {
        //SHORTCUT FOR ADD PRODUCT Import
        var url = httpHost + '/product/import'
        window.open(url, '_self', false)
        event.preventDefault();        
                      
    }else if (event.ctrlKey && event.which == 66) {
        //SHORTCUT FOR ADD PRODUCT Barcode
        var url = httpHost + '/product/barcode'
        window.open(url, '_self', false)
        event.preventDefault();        
                      
    }else if (event.altKey && event.shiftKey && event.which == 79) {
        //SHORTCUT FOR ADD ORDER LIST-ALT+SHIFT+O
        var url = httpHost + '/order/list'
        window.open(url, '_self', false)
        event.preventDefault();        
                      
    }else if (event.altKey && event.which == 79) {
        //SHORTCUT FOR ADD ORDER-O
        var url = httpHost + '/order/add'
        window.open(url, '_self', false)
        event.preventDefault(); 
                        
    }else if (event.altKey && event.shiftKey && event.which == 82) {
        //SHORTCUT FOR SALES RETURN LIST-ALT+SHIFT+R
        var url = httpHost + '/return/salelist'
        window.open(url, '_self', false)
        event.preventDefault();        
               
    } else if (event.altKey && event.which == 82) { 
        //SHORTCUT FOR ADD SALES RETURN -R
        var url = httpHost + '/return/addsale'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.altKey && event.shiftKey && event.which == 89) { 
        //SHORTCUT FOR ADD PUCHASE RETURN -Y
        var url = httpHost + '/return/purchaselist'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.altKey && event.which == 89) { 
        //SHORTCUT FOR ADD PUCHASE RETURN -Y
        var url = httpHost + '/return/addpurchase'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.altKey && event.shiftKey && event.which == 84) {
        //SHORTCUT FOR CREDIT TRANSACTION  LIST-ALT+SHIFT+T
        var url = httpHost + '/transaction/transactionlist'
        window.open(url, '_self', false)
        event.preventDefault();        

    }     else if (event.altKey && event.which == 84) {
        //SHORTCUT FOR ADD CREDIT TRANSACTION-T
        var url = httpHost + '/transaction'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.ctrlKey && event.shiftKey && event.which == 84) {
        //SHORTCUT FOR CREDIT TRANSACTION  LIST-ALT+SHIFT+T
        var url = httpHost + '/transcation/debitlist'
        window.open(url, '_self', false)
        event.preventDefault();        

    } 
    else if (event.shiftKey && event.which == 84) {
        //SHORTCUT FOR ADD CREDIT TRANSACTION-T
        var url = httpHost + '/transcation/adddebit'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }  else if (event.altKey && event.which == 74) {
        //SHORTCUT FOR ADD CREDIT TRANSACTION-T
        var url = httpHost + '/transcation/allist'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.altKey && event.shiftKey && event.which == 75) {
        //SHORTCUT FOR scheme LIST-ALT+SHIFT+K
        var url = httpHost + '/scheme/schemelist/all'
        window.open(url, '_self', false)
        event.preventDefault();        

    } else if (event.altKey && event.which == 75) {
        //SHORTCUT FOR ADD SCHEME WITHOUT INTEREST -K
        var url = httpHost + '/scheme/scheme_without_interest'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.ctrlKey && event.shiftKey && event.which == 75) {
        //SHORTCUT FOR scheme LIST-CTRL+shift +K
        var url = httpHost + '/scheme/closed_scheme'
        window.open(url, '_self', false)
        event.preventDefault();        

    } else if (event.ctrlKey && event.which == 75) {
        //SHORTCUT FOR ADD active scheme ctrl+ K
        var url = httpHost + '/scheme/active_scheme'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.altKey && event.shiftKey && event.which == 76) {
        //SHORTCUT FOR LOAN LIST-ALT+SHIFT+L
        var url = httpHost + '/loan/loanlist'
        window.open(url, '_self', false)
        event.preventDefault();        

    } 
    else if (event.altKey && event.which == 76) {
        //SHORTCUT FOR ADD LOAN -L
        var url = httpHost + '/loan'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.altKey && event.shiftKey && event.which == 69) {
        //SHORTCUT FOR EXPENSE LIST-ALT+SHIFT+E
        var url = httpHost + '/expense/list'
        window.open(url, '_self', false)
        event.preventDefault();        

    } else if (event.altKey && event.which == 69) {
        //SHORTCUT FOR ADD EXPENSE-E
        var url = httpHost + '/expense/add'
        window.open(url, '_self', false)
        event.preventDefault(); 

    }else if (event.altKey && event.shiftKey && event.which == 65) {
        //SHORTCUT FOR balancesheet LIST-ALT+SHIFT+A
        var url = httpHost + '/account'
        window.open(url, '_self', false)
        event.preventDefault();        

    }else if (event.altKey && event.which == 105) {
        //SHORTCUT FOR balancesheet LIST-ALT+9
        var url = httpHost + '/account/profitloss'
        window.open(url, '_self', false)
        event.preventDefault();        

    } else if (event.altKey && event.which == 65) {
        //SHORTCUT FOR ADD ACCOUNT-A
        var url = httpHost + '/account/add'
        window.open(url, '_self', false)
        event.preventDefault(); 

      } else if (event.altKey && event.which == 103) {
        //SHORTCUT FOR ADD ACCOUNT-A
        var url = httpHost + '/account/trialbalance'
        window.open(url, '_self', false)
        event.preventDefault(); 

      }else if (event.altKey && event.which == 104) {
        //SHORTCUT FOR ADD ACCOUNT-A
        var url = httpHost + '/account/balancesheet'
        window.open(url, '_self', false)
        event.preventDefault(); 

      } else if (event.altKey && event.which == 88) {
            //SHORTCUT FOR ADD SETTING-X
            var url = httpHost + '/settings'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        }  else if (event.altKey && event.which == 97) {
            //SHORTCUT FOR ADD SETTING-X
            var url = httpHost + '/settings/rate'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        } else if (event.altKey && event.which == 98) {
            //SHORTCUT FOR ADD SETTING-X
            var url = httpHost + '/settings/product_setting'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        } else if (event.altKey && event.which == 99) {
            //SHORTCUT FOR ADD SETTING-X
            var url = httpHost + '/settings/common_setting'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        }else if (event.altKey &&  event.which == 112) {
            //SHORTCUT TO SEE DAYBOOK-F1
            var url = httpHost + '/reports/daybook'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        }  else if (event.altKey &&  event.which == 113) {
            //SHORTCUT TO SEE INVENTORY REPORT
            var url = httpHost + '/reports/inventoryreport'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        } else if (event.altKey && event.which == 114) {
            //SHORTCUT TO SEE SALEREPORT
            var url = httpHost + '/reports/salereport'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        } else if (event.altKey && event.which == 117) {
            //SHORTCUT TO SEE PURCHASE REPORT
            var url = httpHost + '/reports/purchasereport'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        } else if (event.altKey && event.which == 118) {
            //SHORTCUT TO SEE ORDER REPORT
            var url = httpHost + '/reports/order'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        }else if (event.altKey && event.which == 119) {
            //SHORTCUT TO SEE USER SUMMARY REPORT
            var url = httpHost + '/reports/usersummary'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        }else if (event.altKey &&  event.shiftKey && event.which == 70) {
            //SHORTCUT FOR ADD Company
            var url = httpHost + '/company/details'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        }else if (event.altKey && event.which == 70) {
            //SHORTCUT FOR ADD Company
            var url = httpHost + '/company'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        }else if (event.altKey && event.which == 90) {
            //SHORTCUT FOR profile
            var url = httpHost + '/profile'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        }else if (event.altKey &&  event.which == 96 ) {
            //SHORTCUT TO  LOGOUT
            var url = httpHost + '/login/owner_logout'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        } 
        else if (event.altKey &&  event.which == 48 ) {
            //SHORTCUT TO  LOGOUT
            var url = httpHost + '/login/owner_logout'
            window.open(url, '_self', false)
            event.preventDefault(); 
    
        } 

        
    }

