const submit=document.querySelector('#submit-feedback');

submit.addEventListener("submit",(e)=>{
    fetch("https://select-antenna.herokuapp.com/contact?email="+document.querySelector('#email').value+"&text="+document.querySelector('#text').value).then((response)=>{
        alert('Thankyou for contacting us');
        location.replace("https://select-antenna.herokuapp.com/contact");
    });
})