function openJoinModal() {
    document.getElementById("joinModal").style.display = "flex";
  }
  
  function closeJoinModal() {
    document.getElementById("joinModal").style.display = "none";
  }
  
  function validateJoinForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    if (!name) {
      alert("Name is required.");
      return false;
    }
    if (!email) {
      alert("Email is required.");
      return false;
    }
    alert("Form submitted successfully!");
    closeJoinModal();
    return true;
  }
  
