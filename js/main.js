let mainBody = document.querySelector("#main-body");
let editBody = document.querySelector("#edit-body");

let accBtn = document.querySelector('#accBtn');
let addBtn = document.querySelector('#addBtn');
let editBtn = document.querySelector('#editBtn');
let saveBtn = document.querySelector('#saveBtn');
let updateBtn = document.querySelector('#updateBtn');
let deleteBtn = document.querySelector('#deleteBtn');


let accView = document.querySelector('#accView');
let addView = document.querySelector('#addView');
let editView = document.querySelector('#editView');
let updateView = document.querySelector('#updateView');


let inputName = document.querySelector('[name="name"]');
let inputDeposit = document.querySelector('[name="deposit"]');
let inputCard = document.querySelector('[name="credit_card"]');


let inputNameUpdated = document.querySelector('[name="nameUpdate"]');
let inputDepositUpdated = document.querySelector('[name="depositUpdate"]');
let inputCardUpdated = document.querySelector('[name="credit_cardUpdate"]');
let inputId = document.querySelector('[name="id"]');





DB.getAll().then((data)=>{
createTable(data);
createEditView(data);
}, (err)=>{
    console.log(err);

})

editBtn.addEventListener('click', displayEditView);
addBtn.addEventListener('click', displayAddView);
accBtn.addEventListener('click', displayAccView);
saveBtn.addEventListener('click', addNewAccount);
updateBtn.addEventListener('click', updateAccount);

function displayEditView(){

    addView.style.display = "none";
    accView.style.display = "none";
    updateView.style.display = "none";
    editView.style.display = "block";

}



function addNewAccount(){
    //validacija forme obavezna

    let newAcc= {

       name: inputName.value,
       deposit: inputDeposit.value,
       credit_card: inputCard.value
    };
    DB.save(newAcc).then((res)=>{
        DB.getAll().then((data)=>{
            createTable(data);
            displayAccView();
            }, (err)=>{
                console.log(err);
            
            })
    }, (err)=>{
        console.log(err);
    })

}

function deleteAccount(id)
{
    let deleteAcc= {
        id: id
     };
    DB.delete(deleteAcc).then((res)=>{
        DB.getAll().then((data)=>{
            createTable(data);
            displayAccView();
            }, (err)=>{
                console.log(err);
            
            })
    }, (err)=>{
        console.log(err);
    })
}

function updateAccount(){
    //validacija forme obavezna
    let udpdateAcc= {

       name: inputNameUpdated.value,
       deposit: inputDepositUpdated.value,
       id: inputId.value,
       credit_card: inputCardUpdated.value
    };
    DB.update(udpdateAcc).then((res)=>{
        DB.getAll().then((data)=>{
            createTable(data);
            displayAccView();
            }, (err)=>{
                console.log(err);
            
            })
    }, (err)=>{
        console.log(err);
    })

}

function displayAddView(){
    addView.style.display =  "block";
    accView.style.display = "none";
    editView.style.display = "none";
    updateView.style.display = "none";

}



function displayAccView(){
    addView.style.display =  "none";
    accView.style.display = "block";
    editView.style.display = "none";
    updateView.style.display = "none";

}



function createTable(data){


    let text = ``;

    for (let i = 0; i < data.length; i++) {
        text+= `

                                    <tr>
                                    <td>${data[i].id}</td>
                                    <td>${data[i].name}</td>
                                    <td>${data[i].deposit}</td>
                                    <td>${data[i].credit_card}</td>
                                    </tr>
        
        `;
        
    }
   mainBody.innerHTML = text;
}

function createUpdateView(id, name, deposit, card)
{

    inputNameUpdated.setAttribute('value',name);
    inputDepositUpdated.setAttribute('value',deposit);
    inputCardUpdated.setAttribute('value',card);
    inputId.setAttribute('value',id);

    addView.style.display = "none";
    accView.style.display = "none";
    editView.style.display = "none";
    updateView.style.display = "block";

    
}



function createEditView(data){


    let text = ``;

    for (let i = 0; i < data.length; i++) {

        let editAcc= {
            id: data[i].id,
            name: data[i].name,
            deposit: data[i].deposit,
            credit_card: data[i].credit_card
         };
        
        text+= `
        
                                    <tr>
                                    <td>${editAcc.id}</td>
                                    <td>${editAcc.name}</td>
                                    <td>${editAcc.deposit}</td>
                                    <td>${editAcc.credit_card}</td>
                                    <td><button onclick="createUpdateView(${editAcc.id}, '${editAcc.name}', ${editAcc.deposit}, '${editAcc.credit_card}')" id="updateBtn" class="btn btn-primary">Edit</button></td>
                                    <td><button onclick="deleteAccount(${editAcc.id})" id="deleteBtn" class="btn btn-primary">Delete</button></td>
                                    </tr>
        
        `;
         
        editBody.innerHTML = text;

        
    }
   


}



   