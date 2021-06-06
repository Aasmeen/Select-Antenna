const submit=document.querySelector('#submit-feedback');

submit.addEventListener("submit",(e)=>{
    fetch(document.URL+"?email="+document.querySelector('#email').value+"&text="+document.querySelector('#text').value).then((response)=>{
        console.log(response);
        alert('Thankyou for contacting us');
    });
})