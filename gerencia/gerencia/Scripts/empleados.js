//$(document).ready(function () {
//    loadData();
//});


//Load Data function
function loadData() {
    $.ajax({
        url: "/admin/Empleado",
        type: "GET",
        //contentType: "application/json;charset=utf-8",
        dataType: "html",
        success: function (result) {
            $(".tbod").html(result);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}


//Add Data Function
function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var empObj = {
        EmpleadoID: $('#EmployeeID').val(),
        Nombre: $('#Name').val(),
        Edad: $('#Age').val(),
        Estado: $('#State').val(),
        Pais: $('#Country').val()
    };
    $('#myModal').modal('hide');
    $.ajax({
        url: "/admin/Add",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result == "Save") {
                swal({
                    title: "Registro",
                    text: "Exitoso",
                    icon: "success",
                    button: "Aceptar",
                }).then(function (isConfirm) {
                    if (isConfirm) {
                        loadData();      
                    }
                })
            } else {
                swal("ERROR", "empleado ya existe", "error");   
            }
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

//Function for getting the Data Based upon Employee ID
function getbyID(EmpID) {
    $('#Name').css('border-color', 'lightgrey');
    $('#Age').css('border-color', 'lightgrey');
    $('#State').css('border-color', 'lightgrey');
    $('#Country').css('border-color', 'lightgrey');
    $.ajax({
        url: "/admin/getbyID/" + EmpID,
        type: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#EmployeeID').val(result.EmpleadoID);
            $('#Name').val(result.Nombre);
            $('#Age').val(result.Edad);
            $('#State').val(result.Estado);
            $('#Country').val(result.Pais);
            $('#myModal').modal('show');
            $('#btnUpdate').show();
            $('#btnAdd').hide();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}

//function for updating employee's record
function Update() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var empObj = {
        EmpleadoID: $('#EmployeeID').val(),
        Nombre: $('#Name').val(),
        Edad: $('#Age').val(),
        Estado: $('#State').val(),
        Pais: $('#Country').val(),
    };
    $.ajax({
        url: "/admin/Update",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('hide');
            $('#EmployeeID').val("");
            $('#Name').val("");
            $('#Age').val("");
            $('#State').val("");
            $('#Country').val("");
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

//function for deleting employee's record
function Delele(ID) {
    swal({
        title: "Estas seguro de eliminar?",
        text: "Esta accion sera irreversible!",
        icon: "warning",
        buttons: [
            'Cancelar!',
            'Eliminar!'
        ],
        dangerMode: true,
    }).then(function (isConfirm) {
        if (isConfirm) {
            $.ajax({
                url: "/admin/Delete/" + ID,
                type: "POST",
                contentType: "application/json;charset=UTF-8",
                dataType: "json",
                success: function (result) {
                    loadData();
                },
                error: function (errormessage) {
                    alert(errormessage.responseText);
                }
            });
        } //else {
        //    swal("Cancelado", "Empleado no eliminado", "error");
        //}
    });
}

//Function for clearing the textboxes
function clearTextBox() {
    $('#EmployeeID').val("");
    $('#Name').val("");
    $('#Age').val("");
    $('#State').val("");
    $('#Country').val("");
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#Name').css('border-color', 'lightgrey');
    $('#Age').css('border-color', 'lightgrey');
    $('#State').css('border-color', 'lightgrey');
    $('#Country').css('border-color', 'lightgrey');
}


function validate() {
    var isValid = true;
    if ($('#EmployeeID').val().trim() == "") {
        $('#EmployeeID').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#EmployeeID').css('border-color', 'lightgrey');
    }

    if ($('#Name').val().trim() == "") {
        $('#Name').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Name').css('border-color', 'lightgrey');
    }
    if ($('#Age').val().trim() == "") {
        $('#Age').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Age').css('border-color', 'lightgrey');
    }
    if ($('#State').val().trim() == "") {
        $('#State').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#State').css('border-color', 'lightgrey');
    }
    if ($('#Country').val().trim() == "") {
        $('#Country').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Country').css('border-color', 'lightgrey');
    }
    return isValid;
}
