 function adicionaItem(event){
    event.preventDefault()
     const main = document.getElementById('container');
     const novoArticle = document.createElement('article');
     novoArticle.classList.add('item')
     novoArticle.innerHTML = 'olá'
    
     main.appendChild(novoArticle);
     novoArticle.insertAdjacentElement('beforeend')
}
function removeItem(event){
    event.target.remove()
}
