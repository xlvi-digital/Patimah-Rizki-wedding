window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Terima Kasih Atas Ucapan & Doanya ",
        showConfirmButton: false,
        timer: 2000,
      });
    });
  });
});
