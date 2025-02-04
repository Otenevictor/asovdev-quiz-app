document.getElementById("infoQuiz").addEventListener("click", function() {
    document.getElementById("quizPopup").style.display = "block";
  });
  
  document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("quizPopup").style.display = "none";
  });
  
  // Close modal if user clicks outside of it
  window.onclick = function(event) {
    let modal = document.getElementById("quizPopup");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };