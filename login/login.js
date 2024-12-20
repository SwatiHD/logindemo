document.querySelector('form').addEventListener('submit', (event)=>{
    event.preventDefault();
     const username = document.querySelector('#username').value;
     const password = document.querySelector('#password').value;

     if(username === 'swati' && password==='12345'){
        alert("success");
     }else{
        alert("incorrect")
        alert("hiiiii");
     }
})
