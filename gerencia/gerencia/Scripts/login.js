function Login() {

    var res = validatelogin();
    if (res == false) {
        return false;
    }

    var Usuario = {
        email_usuario: $('#Iusuario').val(),
        clave_usuario: $('#Iclave').val()
    };
    $.ajax({
        url: "/Login/Logueo",
        data: JSON.stringify(Usuario),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result == "no existe") {
                swal({
                    title: "Error",
                    text: "Usuario o Contraseña invalida",
                    icon: "error",
                    button: "Aceptar",
                }).then(function (isConfirm) {
                    clearTextBox();
                })
            } else { window.location.href = "/admin/Index"; }
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}


function Add() {
    var res = validateRegistro();
    if (res == false) {
        return false;
    }
    var empObj = {
        id_usuario: $('#Icedula').val(),
        nombre_usuario: $('#Inombre').val(),
        Apellido_usuario: $('#Iapellido').val(),
        clave_usuario: $('#Iclave').val(),
        email_usuario: $('#Icorreo').val()
    };
    $.ajax({
        url: "/Login/registro",
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
                        window.location.href = "/Login/Index";
                    }
                })
            } else {
                swal("ERROR", "Usuario ya existe", "error");
                clearTextBoxRegistro();
            }
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}


function clearTextBox() {
    $('#Iusuario').val("");
    $('#Iclave').val("");
}

function clearTextBoxRegistro() {
    $('#Icedula').val("");
    $('#Inombre').val("");
    $('#Iapellido').val("");
    $('#Iclave').val("");
    $('#Icorreo').val("");
    
}

function validateRegistro() {
    var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var cedula = /^[0-9]{6,10}$/;
    var nombres = /^[a-zA-Z\s]+$/;

    var isValid = true;

    if (!cedula.test($('#Icedula').val())) {
        $('#Icedula').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Icedula').css('border-color', 'lightgrey');
    }
    if ($('#Iclave').val().trim() == "") {
        $('#Iclave').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Iclave').css('border-color', 'lightgrey');
    }
    if (!nombres.test($('#Inombre').val())) {
        $('#Inombre').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Inombre').css('border-color', 'lightgrey');
    }
    if (!nombres.test($('#Iapellido').val())) {
        $('#Iapellido').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Iapellido').css('border-color', 'lightgrey');
    }

    if (!email.test($('#Icorreo').val())) {
        $('#Icorreo').css('border-color', 'Red');
        isValid = false;
    }
    else {   
        $('#Icorreo').css('border-color', 'lightgrey');
    }

    return isValid;
}

function validatelogin() {
    var isValid = true;
    if ($('#Iusuario').val().trim() == "") {
        $('#Iusuario').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Iusuario').css('border-color', 'lightgrey');
    }
    if ($('#Iclave').val().trim() == "") {
        $('#Iclave').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Iclave').css('border-color', 'lightgrey');
    }

    return isValid;
}