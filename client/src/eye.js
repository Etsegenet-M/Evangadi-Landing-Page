
document.getElementById('togglePassword').addEventListener('click', function () {
  let passwordInput = document.getElementById('id_password');
  let eyeIcon = document.getElementById('togglePassword');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.textContent = '🙈'; // Change to a different icon or text to indicate password is visible
  } else {
    passwordInput.type = 'password';
    eyeIcon.textContent = '👁️'; // Change back to the eye icon to indicate password is hidden
  }
});
