const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
  // console.log(btn)
  btn.addEventListener('click', function(e){
    // console.log(e)
    console.log(e.target)
    if(e.target.id === 'yellow'){
      document.body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'red'){
      document.body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      document.body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'green'){
      document.body.style.backgroundColor = e.target.id;
    }
  })
})