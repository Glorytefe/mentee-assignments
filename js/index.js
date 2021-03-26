let containerDiv = document.getElementById("container");
let btns = document.getElementById('colors');

const arraycol = ['blue', 'red', 'green', 'purple', 'aliceblue', 'aqua', 'azure', 'yellow', 'bisque']

btns.addEventListener('click', function(){
    let bkColor = Math.floor(Math.random() * arraycol.length)
    containerDiv.style.backgroundColor = arraycol[bkColor]
})
