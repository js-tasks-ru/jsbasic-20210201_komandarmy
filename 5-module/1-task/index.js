function hideSelf() {
  let hiddenButton = document.querySelector('button');
  hiddenButton.onclick = function() {
    hiddenButton.setAttribute('hidden',true);
  }
}
