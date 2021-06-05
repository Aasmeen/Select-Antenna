if(document.URL.search('/about')!==-1){
    document.querySelector('#about').style.color="rgb(64, 189, 164)";
}
else if(document.URL.search('/products')!==-1){
    document.querySelector('#products').style.color="rgb(64, 189, 164)";
}
else if(document.URL.search('/contact')!==-1){
    document.querySelector('#contact').style.color="rgb(64, 189, 164)";
}
else if(document.URL.search('/mission')!==-1){
    document.querySelector('#mv').style.color="rgb(64, 189, 164)";
}
else{
    document.querySelector('#home').style.color="rgb(64, 189, 164)";
}