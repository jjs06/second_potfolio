
window.onload =function(){
    const dn = document.querySelector('.dn')

dn.onclick =function(){
    this.querySelector('img').src='img/day.png';
    let mn = document.getElementsByClassName('line');
    for(var i = 0; i< mn.length; i++){
        mn[i].style.backgroundColor = '#000';
    }

    this.querySelector('img').src='img/day.png';

    let btn = document.getElementsByTagName('button');
    for(var j = 0; j< btn.length; j++){
        btn[j].style.color = '#000';
        btn[j].style.border= '2px solid #000'; 
    }

    document.getElementsByClassName('logo1')[0].querySelector('img').src='img/logo2.png';

    document.body.style.backgroundColor='#fff';
    wrap.style.color='#000';

    document.querySelector('html').style.setProperty("--ac", "#000");
    document.querySelector('html').style.setProperty("--bc", "#fff");

    document.getElementsByClassName('sc7')[0].style.backgroundColor = '#fffadb';

    document.getElementById('slider').querySelector('video').src='img/video4.mp4';

    document.getElementsByClassName('m1')[1].querySelector('img').src='img/img2m.jpg';

    document.getElementsByClassName('m3')[0].querySelector('img').src='img/img5m.jpg';

    document.getElementsByClassName('sc3')[0].style.backgroundImage='url(../img/test27.jpg)';

    document.getElementsByClassName('sc5')[0].querySelector('img').src='img/test26.jpg';

    document.getElementsByClassName('m6')[0].querySelector('img').src='img/test28.jpg';
    document.getElementsByClassName('b3')[0].querySelector('h3').innerText = 'The Breakfast Clup'



    document.getElementsByClassName('m7')[0].querySelector('img').src='img/test24-1.jpg';
    document.getElementsByClassName('m8')[0].querySelector('img').src='img/test25-1.jpg';

    document.getElementsByClassName('logo2')[0].querySelector('img').src='img/logo2.png';
}
}
