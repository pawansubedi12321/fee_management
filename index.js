const studentname=document.getElementById('studentname');
const amounts=document.getElementById('amounts');
const addBtn=document.getElementsByClassName('add');
const notice=document.getElementById('notice');
const table=document.getElementById('table');
const search=document.getElementById('search');
const search_btn=document.getElementById('search_btn');
let data=[];
let totalamount=45000

function studentlist_amount(){
        //The below function print the student names and Amounts
       
        const name_value={
        names:studentname.value,
        amountsvalue:parseInt(amounts.value),
        
       }
        
        data.push(name_value);//this name_value obj is stored in data 
        console.log(data);
       
   
      /*-------------------------------------------------------------------------*/
       
        if(name_value.names==""){
        notice.innerHTML='<h1>Please enter student name </h1>'
      
        } else{
        notice.innerHTML='';
        }
          sort();
          mains() ;
          console.log(name_value.names)
         // console.log(data[0].names)
           
}
   

function mains(){
        table.innerHTML=`<tr>
        <th><strong>NAME OF STUDENTS</strong></th>
        <th><strong>TOTAL AMOUNT</strong></th>
        <th><strong> PAID AMOUNTS</strong></th>
        <th><strong>REMAINING AMOUNT</strong></th>
        </tr>`
        data.forEach(element => {
             
        const div_for_main=document.createElement('tr');

        div_for_main.innerHTML=`
        <td><h1><strong>${element.names}</strong></td>
        <td><strong>${totalamount}</strong></td>
        <td><strong>${element.amountsvalue}</strong></td>
        <td><strong>${element.amountsvalue-totalamount}</strong></h1></td>
        `;
        table.appendChild(div_for_main)
        console.log(table)
        if(element.amountsvalue-totalamount>0){
                console.log('greater')
                div_for_main.classList.add('remainingamountingreen');
        }
        else if(element.amountsvalue-totalamount==0){
                div_for_main.classList.add('amountblack');
        }
        else{
                console.log('lower')
               div_for_main.classList.add('remainingamountinred');
        }
        
      
});
        
}

function sort(){
        data=data.sort((a,b)=>b.amountsvalue-a.amountsvalue);
}

function search_name(){
        var input,filter,tr,td,txtValue,ts,tbody,b
        input=document.getElementById('search');  
        filter=input.value.toUpperCase(); 
        tr=table.getElementsByTagName("td");

        for(i=0;i<tr.length;i++){
            
           td=tr[i].getElementsByTagName('h1')[0];
           
           if(td){
                txtValue= td.textContent||td.innerHTML;
           }
          

           if(txtValue.toUpperCase().indexOf(filter)>-1){
                  tr[i].style.display='';
                  
           }else{ 
                  
                  tr[i].style.display='none';
           }
        }
       
  }



addBtn[0].addEventListener('click',studentlist_amount);