const id = new URLSearchParams(windows.location.search).get('id');
const cn = document.querySelector('.details');
const renderDetails = async () => {
    const res = await fetch('https://localhost:3000/posts/'+id);
    const ps  = await res.json();
    let   tem = `
        <h1>${ps.title}</h1>
        <p>${ps.body}</p>
    `;
    cn.innerHTML = tem;
}
window.addEventListener('DOMContentLoaded',()=>renderDetails());