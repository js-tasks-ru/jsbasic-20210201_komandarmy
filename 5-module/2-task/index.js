function toggleText() {
  let hiddenText = document.getElementById('text')
  let hiddenButton = document.querySelector('button');
  hiddenText.getAttribute('hidden');
  hiddenButton.onclick = function() {
    
    if (!hiddenText.hidden) {
      
      hiddenText.hidden = true;
    } else {
      hiddenText.hidden = false;
    }
  }
}
