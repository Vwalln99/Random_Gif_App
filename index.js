function fetchData(tag){
    const pic = fetch(`https://api.giphy.com/v1/gifs/random?api_key=Euv90AdAA50FA2M0E3mwITGExBH955Qa&tag=${tag}`);
    pic.then((res)=>res.json())
    .then(res=>showData(res))
}
fetchData();

const showData=(imagesData)=>{
    const imgContainer=document.querySelector('.giphy-pic');
    imgContainer.firstChild.remove();
    const image=document.createElement('img');
    image.alt=imagesData.data.title;
    image.src=imagesData.data.images.original.url;
    imgContainer.appendChild(image);
}

const inputField=document.querySelector('#my-input');
inputField.addEventListener('keypress', (e)=>{
    if(e.key==='Enter'){
        const tag=inputField.value;
        fetchData(tag);
    }
})