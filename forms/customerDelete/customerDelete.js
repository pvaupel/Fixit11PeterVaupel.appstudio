customerDelete.onshow=function(){
  query='SELECT * FROM customer'
  req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=pov46864&pass=Pv8676138796&database=pov46864&query=' + query) 

  if(req.status==200) {
    customers=JSON.parse(req.responseText)
    customerData=customers
    
    if(customers.length==0){
      NSB.MsgBox("There are no customers.")
    } else{
      for(i=0;i<=customers.length-1;i++){
              drpDeleteCustomer.addItem(customers[i][1])
            }
      }
    } else {
          NSB.MsgBox(`Error code: ${req.status}.`)
          }
}


drpDeleteCustomer.onclick=function(choice){
    if (typeof(choice)=='object'){
            return
      } else {
                  drpDeleteCustomer.value=choice
                  company=drpDeleteCustomer.selection
            }
    query=`DELETE FROM customer WHERE name='${company}'`
    req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=pov46864&pass=Pv8676138796&database=pov46864&query=' + query)
    
   if(req.status==200){
      if(req.responseText==500){
        query='SELECT * FROM customer'
        req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=pov46864&pass=Pv8676138796&database=pov46864&query=' + query) 
          customers=JSON.parse(req.responseText)
          if(req.status==200){
                  let deleteMessage='The customer has been deleted Remaing Customers:'
                  for(i=0;i<=customers.length-1;i++){
                            deleteMessage=deleteMessage+'\n'+customers[i][1]
                            txtDelete.value=deleteMessage
                    }
          }else{
                        txtDelete.value= (`ERROR WITH CODE ${req.status}`)
            }
      }
    }
}

btnAdd.onclick=function(){
  ChangeForm(customerAdd)
}
