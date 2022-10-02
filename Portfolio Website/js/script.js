const toogle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toogle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high')){
        body.style.background = 'white';
        body.style.color = 'black';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        
    }
})