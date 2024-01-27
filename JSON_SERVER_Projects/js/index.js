//js for index.html
const container = document.querySelector('.blogs')
const renderPosts = async () => {
    let uri = 'https://localhost:3000/posts';
    const res = await fetch(uri);
    const pst = await res.json();
    let temp  = '';
    pst.forEach(post=>{
        temp += `
        <div class='post'>
            <h2>${post.title}</h2>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body.slice(0,50)}</p>
            <a href='/details.html?id=${post.id}'>read more ...</a>
        </div>
        `
    })
    container.innerHTML = temp;
}
window.addEventListener('DOMContentLoaded',()=>renderPosts());
