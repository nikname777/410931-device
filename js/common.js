  var writePopupOpen = document.querySelector(".js-open-write-us");
  var writePopup = document.querySelector(".write-us");
  var writeClose = writePopup.querySelector(".modal-content-close");
  var login = writePopup.querySelector("[name=name]");

  var mapOpen = document.querySelector(".js-open-map");
  var mapPopup = document.querySelector(".modal-content-map");
  var mapClose = mapPopup.querySelector(".modal-content-close");

  var form = writePopup.querySelector("form");
  var nameWriteUs = writePopup.querySelector("[name=name]");
  var emailWriteUs = writePopup.querySelector("[name=email]"); 

  writePopupOpen.addEventListener("click", function(event) {
    event.preventDefault();
    writePopup.classList.add("modal-content-show");
    nameWriteUs.focus();
  });

  writeClose.addEventListener("click", function(event) {
    event.preventDefault();
    writePopup.classList.remove("modal-content-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (writePopup.classList.contains("modal-content-show")) {
        writePopup.classList.remove("modal-content-show");
      }
    }
  });

  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
  });

  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("modal-content-show")) {
        mapPopup.classList.remove("modal-content-show");
      }
    }
  });
