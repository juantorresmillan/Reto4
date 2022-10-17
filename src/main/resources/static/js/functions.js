// funciones para formulario de máquinas
function getDatamachines(){
    $.ajax({
        url: "https://g5c9a60c1f9cb50-retos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/gym/gym", 
        type: "GET",
        datatype: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            showDatamachines(respuesta.items);
        }
    });
}

function showDatamachines(items){
    let myTable="<table>";
    myTable+="<th>Id</th>";
    myTable+="<th>Brand</th>";
    myTable+="<th>Model</th>";
    myTable+="<th>Category</th>";
    myTable+="<th>Name</th>";
    for (i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td><button onclick='deleteDatamachines("+items[i].id+")'>Eliminar máquina</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultMaquinas").append(myTable);
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
        url: "https://g5c9a60c1f9cb50-retos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/gym/gym",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function(respuesta){
            $("#resultMaquinas").empty();
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
        url: "https://g5c9a60c1f9cb50-retos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/gym/gym",
        type: "PUT",
        data: dataToSend,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function(respuesta){
            $("#resultMaquinas").empty();
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

function deleteDatamachines(idmachines){
    let myData={
        id:idmachines
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g5c9a60c1f9cb50-retos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/gym/gym",
        type: "DELETE",
        data: dataToSend,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function(respuesta){
            $("#resultMaquinas").empty();
            getDatamachines();
            alert("Se ha eliminado la máquina.")
        }
    });
}

// funciones para formulario de Clientes

function getDataclient(){
    $.ajax({
        url: "https://g5c9a60c1f9cb50-retos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client", 
        type: "GET",
        datatype: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            showDataclient(respuesta.items);
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
    $("#resultClientes").append(myTable1);
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
        success: function(respuesta){
            $("#resultClientes").empty();
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
        success: function(respuesta){
            $("#resultClientes").empty();
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
        success: function(respuesta){
            $("#resultClientes").empty();
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
        success: function(respuesta){
            console.log(respuesta);
            showDatamessage(respuesta.items);
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
    $("#result").append(myTable);
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
        success: function(respuesta){
            $("#result").empty();
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
        success: function(respuesta){
            $("#result").empty();
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
        success: function(respuesta){
            $("#result").empty();
            getDatamessage();
            alert("Se ha eliminado el mensaje.")
        }
    });
}