window.onload = function () {
    setTimeout(() => {
      document.getElementById('popup').style.display = 'block';
    }, 2000);
  };
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  