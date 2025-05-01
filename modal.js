function openModal() {
    document.getElementById("orderModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("orderModal").style.display = "none";
  }
  
  // Закрыть модальное окно при клике вне его
  window.onclick = function(event) {
    if (event.target == document.getElementById("orderModal")) {
      closeModal();
    }
  }
  
  