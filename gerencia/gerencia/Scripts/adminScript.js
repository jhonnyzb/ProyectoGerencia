$(document).ready(function () {
    loadData();
});


function loadData() {
    $.ajax({
        url: "/admin/Empleados",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "html",
        success: function (result) {
            $(".tbody").html(result);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
