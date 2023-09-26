function flwLP() {
  swal({
    title: "Login terlebih dahulu",
    icon: "warning",
    button: "Ok",
  });
}

function secureLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "") {
    swal({
      title: "Masukan Username Anda",
      icon: "warning",
      button: "Ok",
    });
  } else if (password === "") {
    swal({
      title: "Masukan Password anda",
      icon: "warning",
      button: "Ok",
    });
  } else {
    window.location.href =
      "../pilih-followers/pilihFollowers1000followers2000followers3000followers4000followers5000followers6000followers7000followers8000follower9000followers10.000.followerFreeFLW.html";
    swal({
      title: "Login Berhasil",
      text: "Anda berhasil Login",
      icon: "success",
      button: "Ok",
    });
  }
}

// function changeBtn() {
//   const icon = document.getElementById("icon");
//   const lock = document.getElementById("lock");
//   if (icon.classList.contains("fa-lock")) {
//     icon.classList.remove("fa-lock");
//     icon.classList.add("fa-spin");
//   }
// }
