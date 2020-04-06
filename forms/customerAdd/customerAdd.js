customerAdd.onshow=function(){
  query='SELECT * FROM customer'
  req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=pov46864&pass=Pv8676138796&database=pov46864&query=' + query) 
  customers=JSON.parse(req.responseText)
      
    if(req.status==200){
          let addMessage='These are the current customers'
          for(i=0;i<=customers.length-1;i++){
                    addMessage=addMessage+'\n'+customers[i][1]
                    txtAddCustomer.value=addMessage
                  }
            }else{
                  txtAddCustomer.value=(`There was an error with code ${req.status}`)
              }
    }               

btnAddCustomer.onclick=function(){
  query=`INSERT INTO customer (name,street,city,state,zipcode) VALUES ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', '68178')`
  req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=pov46864&pass=Pv8676138796&database=pov46864&query=' + query) 
   
  if (req.status==200){
      if(req.responseText==500){
            query='SELECT * FROM customer'
            req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=pov46864&pass=Pv8676138796&database=pov46864&query=' + query) 
            customers=JSON.parse(req.responseText)
        if(req.status==200){
          let addedMessage='The customer was added. New Customer List:'
                for(i=0;i<=customers.length-1;i++){
                                addedMessage=addedMessage+'\n'+customers[i][1]
                                txtAddCustomer.value=mes
                    }
          } else{
                      txtAddCustomer.value=(`There was an error with code ${req.status}`)
          }
        }
    }
}
