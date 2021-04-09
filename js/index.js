// variables

let buttons = document.querySelectorAll('.btns')
let boxs = document.getElementById('cov');
let xx = boxs.innerHTML;
let prv = document.getElementById('prev');
let nxt = document.getElementById('next');


let counts = 0;
let divs = '';
let nwCt;
// arr of objects
const  objs = [
   {
        img: './img/ava1.jpg',
        name: 'Tefe',
        ratings: '★★★★★',
        txt: 'Lorem ipsum dolor sit.'
    },
    {
        img: './img/ava2.jpg',
        name: 'Happy',
        ratings: '★★★',
        txt: 'Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur adipisicing.'
    },
    {
        img: './img/bk2.jpg',
        name: 'Heal',
        ratings: '★★★★',
        txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing yyftft.'
    },
    {
        img: './img/ava3.jpg',
        name: 'Snow',
        ratings: '★★★★★',
        txt: 'Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consecteturg ftft.'
    },
]



class Navigates{
   check (){
    buttons.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            if(e.target.classList.contains('prev')){
                nxt.style.visibility = 'visible'
                divs = '';
                if(counts > 1  && counts <= objs.length){
                     counts--; 
                    divs = ` 
                   <div class="box">
                   <div class="imgs">
                   <img src=${objs[counts-1].img} alt="img" id="img">
                   </div>
                   <!-- name -->
                   <h5 id="names">${objs[counts-1].name}</h5>
                   <!-- ?rating -->
                   <span id="ratings">${objs[counts-1].ratings}</span>
                   <!-- text -->
                   <div class="txt">
                   <p id="txt">${objs[counts-1].txt}</p>
                   </div>
                   <!-- quote close -->
                   <span>&ldquo;</span>
                   </div>`
                    
                    boxs.innerHTML = divs;
                    nwCt = document.querySelector('.box')
                    nwCt.style.animation = 'prev 0.6s linear'

                }
                else{
                    e.target.style.visibility = 'hidden'
                    divs = '';
                    counts = 0;
                    boxs.innerHTML = xx;
                    nwCt = document.querySelector('.box')
                    nwCt.style.animation = 'prev 0.6s linear 0.01s'
                }
            }
            else if(e.target.classList.contains('next')){
                if(counts >= 0 && counts < objs.length){
                    prv.style.visibility = 'visible'
                    divs = ` 
                    <div class="box">
                    <div class="imgs">
                    <img src=${objs[counts].img} alt="img" id="img">
                    </div>
                    <!-- name -->
                    <h5 id="names">${objs[counts].name}</h5>
                    <!-- ?rating -->
                    <span id="ratings">${objs[counts].ratings}</span>
                    <!-- text -->
                    <div class="txt">
                    <p id="txt">${objs[counts].txt}</p>
                    </div>
                    <!-- quote close -->
                    <span>&ldquo;</span>
                    </div>
                    `
                    
                    boxs.innerHTML = divs;
                    counts++;
                    nwCt = document.querySelector('.box')
                    nwCt.style.animation = 'next 0.6s linear 0.01s'
    
                }
                else if(counts === objs.length){
                    e.target.style.visibility = 'hidden'
                }
                
            }
        })
       
        
    });
   }
}

let navs = new Navigates();
navs.check();