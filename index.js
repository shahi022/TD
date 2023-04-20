// Get the buttons and dropdowns
const boldButton = document.querySelector('.bold-button');
const italicButton = document.querySelector('.italic-button');
const underlineButton = document.querySelector('.underline-button');
const resetDesignButton = document.querySelector('.reset-design-button');
const colorButton = document.querySelector('.color-button');
const colorDropdown = document.querySelector('.color-dropdown');
const dropdownButtons = document.querySelectorAll('.dropdown-button');
const copyPictureButton = document.querySelector('.copy-picture-button');

// Add event listeners to the buttons and dropdowns
boldButton.addEventListener('click', toggleBold);
italicButton.addEventListener('click', toggleItalic);
underlineButton.addEventListener('click', toggleUnderline);
resetDesignButton.addEventListener('click', resetDesign);
colorButton.addEventListener('click', toggleColorDropdown);
dropdownButtons.forEach(button => button.addEventListener('click', changeTextColor));
copyPictureButton.addEventListener('click', copyPicture);

// Function to toggle bold font style
function toggleBold() {
  document.execCommand('bold', false, null);
}

// Function to toggle italic font style
function toggleItalic() {
  document.execCommand('italic', false, null);
}

// Function to toggle underline font style
function toggleUnderline() {
  document.execCommand('underline', false, null);
}

// Function to reset all font styles
function resetDesign() {
  document.execCommand('removeFormat', false, null);
}

// Function to toggle the color dropdown
function toggleColorDropdown() {
  colorDropdown.classList.toggle('show');
}

// Function to change the text color
function changeTextColor(event) {
  const color = event.target.innerText.toLowerCase();
  document.execCommand('foreColor', false, color);
}

// Function to copy the text box as a picture
function copyPicture() {
  const textArea = document.querySelector('textarea');
  const range = document.createRange();
  range.selectNode(textArea);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  selection.removeAllRanges();
}
