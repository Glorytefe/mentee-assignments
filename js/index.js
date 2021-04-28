let joke;
let jkhold = document.getElementById('jk');
// let jkmain = document.getElementById('main');


class getJokes {
async jokes() {
    try {
      let chuckno = await fetch("https://api.chucknorris.io/jokes/random");
      let data = await chuckno.json();
      joke = data.value
      return joke;
    } catch (error) {
      console.log(error);
    }
  }

  ui () {
   if(joke){   
    jkhold.textContent = joke;
   }
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
    const jk = new getJokes();
    
    document.getElementById('btn').addEventListener('click', ()=>{
        jk.jokes().then(()=>{
            jk.ui()
    });


})
})
