$(document).ready(function(){
    getDatamachines();
})


// funciones para formulario de máquinas

function getDatamachines(){
    $.ajax({
        url: "http://localhost:8080/api/Machine/all", 
        type: "GET",
        datatype: "JSON",
        success: function(response){
            console.log(response);
            showDatamachines(response.items);
        }
    });
}

function showDatamachines(items){
    let myTable='<div class="container"><div class="row">' ;
    for (i=0;i<items.length;i++){
        myTable += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"> ${items[i].brand} </h5>
                    <h6 class="card-subtitle mb-2 text-muted"> ${items[i].model} </h6>
                    <h4 class="card-subtitle"> ${items[i].id} </h4>
                    <p class="card-text"> ${items[i].name} </p>
                    <button class="tbn btn-warning" onClick="deleteDatamachines(${items[i].id})"> Eliminar </button>
                </div>
            </div>
        `
    }
    myTable+="</div></div>"
    $("#resultMachine").append(myTable);
}

function saveDatamachines(){
    let myData={
        id:$("#idmachine").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#namemachine").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Machine/save",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function(response){
            $("#resultMachine").empty();
            $("#id").val();
            $("#brand").val();
            $("#model").val();
            $("#category_id").val();
            $("#name").val();
            getDatamachines();
            alert("Se ha creado la máquina.")
        }
    });
}

function editDatamachines(){
    let myData={
        id:$("#idmachine").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#namemachine").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Machine/update",
        type: "PUT",
        data: dataToSend,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function(response){
            $("#resultMachine").empty();
            $("#id").val();
            $("#brand").val();
            $("#model").val();
            $("#category_id").val();
            $("#name").val();
            getDatamachines();
            alert("Se ha actualizado información de la máquina.")
        }
    });
}

// funciones para formulario de Clientes

function getDataclient(){
    $.ajax({
        url: "https://g5c9a60c1f9cb50-retos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client", 
        type: "GET",
        datatype: "JSON",
        success: function(response){
            console.log(response);
            showDataclient(response.items);
        }
    });
}

function showDataclient(items){    
    let myTable1="<table>";
    myTable1+="<th>Id</th>";
    myTable1+="<th>Name</th>";
    myTable1+="<th>Email</th>";
    myTable1+="<th>Age</th>";
    for (i=0;i<items.length;i++){
        myTable1+="<tr>";
        myTable1+="<td>"+items[i].id+"</td>";
        myTable1+="<td>"+items[i].name+"</td>";
        myTable1+="<td>"+items[i].email+"</td>";
        myTable1+="<td>"+items[i].age+"</td>";
        myTable1+="<td> <button onclick='deleteDataclient("+items[i].id+")'>Eliminar Cliente</button>";
        myTable1+="</tr>";
    }
    myTable1+="</table>";
    $("#resultClient").append(myTable1);
}

function saveDataclient(){
    let myData={
        id:$("#idclient").val(),
        name:$("#nameclient").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData);
    $.ajax({
        url:"https://g5c9a60c1f9cb50-retos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function(response){
            $("#resultClient").empty();
            $("#id").val();
            $("#name").val();
            $("#email").val();
            $("#age").val();
            getDataclient();
            alert("Se ha creado el nuevo cliente.")
        }
    });
}

function editDataclient (){
    let myData={
        id:$("#idclient").val(),
        name:$("#nameclient").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g5c9a60c1f9cb50-retos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: dataToSend,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function(response){
            $("#resultClient").empty();
            $("#id").val();
            $("#name").val();
            $("#email").val();
            $("#age").val();
            getDataclient();
            alert("Se ha actualizado informacion del cliente.")
        }
    });
}

function deleteDataclient (idclient){
    let myData={
        id:idclient
    };
    let dataToSend=JSON.stringify(myData);
    console.log(myData);
    $.ajax({
        url:"https://g5c9a60c1f9cb50-retos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataToSend,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function(response){
            $("#resultClient").empty();
            getDataclient();
            alert("Se ha eliminado el cliente.")
        }
    });
}
//Funciones para formulario de Mensajes:

function getDatamessage(){
    $.ajax({
        url: "https://g5c9a60c1f9cb50-retos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message", 
        type: "GET",
        datatype: "JSON",
        success: function(response){
            console.log(response);
            showDatamessage(response.items);
        }
    })
}

function showDatamessage(items){
    
    let myTable="<table>";
    myTable+="<th>Id</th>";
    myTable+="<th>Message</th>";
    for (i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='deleteDatamessage("+items[i].id+")'>Eliminar Mensaje</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultMessages").append(myTable);
}

function saveDatamessage (){
    let myData={
        id:$("#idmessage").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g5c9a60c1f9cb50-retos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function(response){
            $("#resultMessages").empty();
            $("#id").val();
            $("#messagetext").val();
            getDatamessage();
            alert("Se ha creado el nuevo mensaje.")
        }
    });
}

function editDatamessage (){
    let myData={
        id:$("#idmessage").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g5c9a60c1f9cb50-retos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message", 
        type: "PUT",
        data: dataToSend,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function(response){
            $("#resultMessages").empty();
            $("#id").val();
            $("#messagetext").val();
            getDatamessage();
            alert("Se ha actualizado el mensaje.")
        }
    });
}

function deleteDatamessage (idmessage){
    let myData={
        id:idmessage
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g5c9a60c1f9cb50-retos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message", 
        type: "DELETE",
        data: dataToSend,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function(response){
            $("#resultMessages").empty();
            getDatamessage();
            alert("Se ha eliminado el mensaje.")
        }
    });
}