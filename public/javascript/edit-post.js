async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const contents = document.querySelector('textarea[name="post-contents"]').value.trim(); {

        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            title,
            contents
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          document.location.replace('/dashboard/');
        } else {
          alert(response.statusText);
        }
    }
}
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  