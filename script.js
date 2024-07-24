function openGift() {
    document.querySelector('.lid').style.top = '-200px';
    setTimeout(function() {
        document.querySelector('.box').style.top = '250px';
    }, 500);
    setTimeout(function() {
        document.getElementById('message').style.display = 'block';
    }, 1000);
}
