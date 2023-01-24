async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
  
    if (username !== "" && password !== "") {
      
    if (username && password) {
        const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
      }
    } else {
  
      if (username === "" && password === "") {
        alert("Please enter a username and password, then submit")
      } else if (username === "") {
        alert("Please enter a username, then submit")
      } else if (password === "") {
        alert("Please enter a password, then submit")
      } else {
        }
    }
}
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);