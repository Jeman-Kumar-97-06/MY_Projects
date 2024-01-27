const form = document.querySelector('.create_form');

const createPost = async (e) => {
    e.preventDefault();
    const doc = {
        title : form.title.value,
        body  : form.body.value,
        likes : 0
    }
    await fetch('https://localhost:3000/posts',{
        method:'post',
        body  :JSON.stringify(doc),
        headers:{'Content-Type': 'application/json'}
    });
    window.location.replace('/index.html')
}

form.addEventListener('submit',createPost);