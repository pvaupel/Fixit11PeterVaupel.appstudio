let req= ''
let query= ''
let customers= ''
let customerData=[]

customerSelect.onshow=function(){
  query='SELECT * FROM customer'
  req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=pov46864&pass=Pv8676138796&database=pov46864&query=' + query) 

  if(req.status==200) {
    customers=JSON.parse(req.responseText)
    customerData=customers
    
          if(customers.length==0){
                  NSB.MsgBox("There are no customers.")
            } else{
                    let message= ''
                    for(i=0;i<=customers.length-1;i++){
                            drpCustomers.addItem(customers[i][1])
                      }
                  }
          } else {
                NSB.MsgBox(`Error code: ${req.status}.`)
            }
  }


drpCustomers.onclick=function(choice){
  let customerName= ''
  let state = ''
  let foundNames=[]
  
  if (typeof(choice)=='object'){
          return
      } else {
              drpCustomers.value=choice
              customerName=drpCustomers.selection
              for(i=0;i<=customerData.length-1;i++){
                      if(customerName==customerData[i][1]){
                                state=customerData[i][4]
                                break
                          }
                      }
              for(i=0;i<=customerData.length-1;i++){
                    if(state==customerData[i][4]){
                          foundNames.push(customerData[i][1])
                            }
                      }
    
    query=`SELECT name FROM customer WHERE state='${state}'`
    
    req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=pov46864&pass=Pv8676138796&database=pov46864&query=' + query)
    
      if(req.status==200){
            customers=JSON.parse(req.responseText)
            if(customers.length==0){
                    NSB.MsgBox('There are no customers')
              } else {
                    let alertMessage=''
                    for(i=0;i<=foundNames.length-1;i++){
                              alertMessage=alertMessage+foundNames[i]+'\n'
                              txtCustomerStateAll.value=alertMessage
                          }
                        } 
                }else{
                            NSB.MsgBox(`Error code: ${req.status}.`)
                          }
                    }
}

btnDelete.onclick=function(){
  ChangeForm(customerDelete)
}
