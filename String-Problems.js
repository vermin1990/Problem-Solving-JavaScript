// Super Reduced String
function superReducedString(s) {

    let reducedStr = s; 
        
        
        for(let i = 0 ; i < reducedStr.length ; i ++){           

            if(reducedStr[i] === reducedStr[i+1]){

                reducedStr = reducedStr.substring(0,i) + reducedStr.substring((i+2),                        reducedStr.length);

                //Reset for loop
                //It needs to assess the string again!
                i=-1;               
            }
        }        
    
    if(reducedStr==="")
        return "Empty String";
        
    return reducedStr;
}