
let btns = document.querySelectorAll('button');
let countdiv = document.getElementById('count')

let counts = 0;
    btns.forEach(function (btn){
        btn.addEventListener('click', function(){
            if(btn.id == "increase"){
                counts++;
                btn.style.backgroundColor = 'green'
                
            }
            else if (btn.id == "decrease"){
                counts--;
                btn.style.backgroundColor = 'red'


            }
        countdiv.innerText =counts
        let x = counts > 0;
        let y = counts < 0
        switch (x || y || counts){
            case y:
                countdiv.style.color = "red"
            break;
            case x:
                countdiv.style.color = "green"
            break;
           case 0:  countdiv.style.color = "white"
            break;

        }

        })
        
    
    })
    


    