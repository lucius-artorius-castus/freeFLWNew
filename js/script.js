var nav = document.querySelector("nav");
var ulNav = document.querySelector("ul");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

var iconNav = document.getElementById("icon-nav");
iconNav.addEventListener("click", showUl);

function showUl() {
  const navUl = document.querySelector("ul");
  const icon = document.getElementById("icon");
  // show ul
  if (navUl.classList.contains("hidden-ul")) {
    navUl.classList.remove("hidden-ul");
    navUl.classList.add("show-ul");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    navUl.classList.remove("show-ul");
    navUl.classList.add("hidden-ul");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  }
}

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

function showFollowersPage() {
  var followersPage = document.getElementById("followers-page");
  var likesPage = document.getElementById("likes-page");
  if (followersPage.style.display === "none") {
    followersPage.style.display = "block";
    likesPage.style.display = "none";
  } else {
    followersPage.style.display = "block";
    likesPage.style.display = "none";
  }
}

function showLikesPage() {
  var followersPage = document.getElementById("followers-page");
  var likesPage = document.getElementById("likes-page");
  if (likesPage.style.display === "none") {
    likesPage.style.display = "block";
    followersPage.style.display = "none";
  } else {
    likesPage.style.display = "block";
    followersPage.style.display = "none";
  }
}

var showPopupButton = document.getElementById("showPopupButton");
showPopupButton.addEventListener("click", showProgressPopup);

function showProgressPopup() {
  var popup = document.getElementById("popup");
  var progressBar = document.getElementById("progressBar");
  var width = 0;
  var berhasil = document.getElementById("success-followers");

  popup.style.display = "block";
  berhasil.style.display = "none";

  var interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      popup.style.display = "none";
      berhasil.style.display = "block";
    } else {
      width++;
      progressBar.style.width = width + "%";
      if (progressBar.style.width == "30%") {
        var textPopup = document.getElementById("text-popup");
        textPopup.innerHTML =
          '                <i class="fa-solid fa-circle-notch fa-spin fa-spin-reverse"></i> Menyiapkan Followers';
      } else if (progressBar.style.width == "60%") {
        var textPopup = document.getElementById("text-popup");
        textPopup.innerHTML =
          '                <i class="fa-solid fa-circle-notch fa-spin fa-spin-reverse"></i> Mengirim Followers';
      }
    }
  }, 350);
}

var closeSuccessNotif = document.getElementById("closeSuccessNotif");
closeSuccessNotif.addEventListener("click", closeSuccess);

function closeSuccess() {
  var berhasil = document.getElementById("success-followers");
  berhasil.style.display = "none";
}
