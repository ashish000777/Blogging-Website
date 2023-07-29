const blogForm = document.getElementById('blog-form')
const titleInput = document.getElementById('title')
const contentInput = document.getElementById('content')

blogForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(validateForm())
    {
        submitForm();
    }
});

function validateForm()
{
    let isValid = true;
    if(titleInput.value.trim() === '')
    {
        titleInput.classList.add('error');
        isValid = false;
    }
    else{
        titleInput.classList.remove('error');
    }

    if(contentInput.value.trim() === '')
    {
        contentInput.classList.add('error');
        isValid = false;
    }
    else{
        contentInput.classList.remove('error');
    }
}

function submitForm()
{
    // Submit form data to server
}