//Select and get data from combobox
$(document).ready(function () {
    $("#pengguna_ahliwaris1").on('change', function(){
        var id_pengguna = $(this).val();
        var alamat = $(this).attr('at');
        if(id_proyek == '')
        {
              $('#nama1').html('');
              $('#username1').html('');
              $('#password1').html('');
        }else{
              $.ajax({
                    url:alamat,
                    type:"post",
                    data:{id_pengguna:id_pengguna},
                    dataType:'json',
                    success:function(data){
                         $('#nama1').html(data.filternama);
                         $('#username1').html(data.filterusername);
                         $('#password1').html(data.filterpassword);
                    },
                    error:function(){
                          alert('error');
                    }
              });
        }
    });
});
function goBack() {
    window.history.go(-1);
}
function LihatPassword() {
    var x = document.getElementById("Password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function LihatPasswordBaru() {
    var x = document.getElementById("PasswordBaru");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
    