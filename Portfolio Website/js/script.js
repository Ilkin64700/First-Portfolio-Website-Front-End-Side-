const toogle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toogle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = ".2s";
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = ".2s";
    }
})

$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
        duration: 1000,
        step: function(){
            $this.attr('per', Math.floor(this.animatedValue)+'%');
        },
        complete :function(){
            $this.attr('per',Math.floor(this.animatedValue) +'%');
        }
    })
});