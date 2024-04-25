
window.onload = function () {
    const dn = document.querySelector('.dn')

    dn.onclick = function () {
        console.log(dn.querySelector('img').getAttribute('src'));
        if (dn.querySelector('img').getAttribute('src') == 'img/night.png') {

            // change button (.dn)
            this.querySelector('img').src = 'img/day.png';
            let mn = document.getElementsByClassName('line');
            for (let i = 0; i < mn.length; i++) {
                mn[i].style.backgroundColor = '#000';
            }

            // button all
            let btn = document.getElementsByTagName('button');
            for (let j = 0; j < btn.length; j++) {
                btn[j].style.color = '#000';
                btn[j].style.border = '2px solid #000';
            }


            document.getElementsByClassName('logo1')[0].querySelector('img').src = 'img/logo2.png';

            document.body.style.backgroundColor = '#fff';
            wrap.style.color = '#000';

            document.querySelector('html').style.setProperty("--ac", "#000");
            document.querySelector('html').style.setProperty("--bc", "#fff");

            document.getElementsByClassName('sc7')[0].style.backgroundColor = '#fffadb';


            document.getElementById('slider').querySelector('video').src = 'img/video4-2.mp4';

            // sc1
            document.getElementsByClassName('m1')[0].querySelector('img').src = 'img/img1m.jpg';
            document.getElementsByClassName('m1')[1].querySelector('img').src = 'img/img2m.jpg';
            document.getElementsByClassName('m1')[2].querySelector('img').src = 'img/img3m.jpg';

            // sc2
            document.getElementsByClassName('m2')[0].querySelector('img').src = 'img/test31.jpg';
            document.getElementsByClassName('m3')[0].querySelector('img').src = 'img/img5m.jpg';


            document.getElementsByClassName('sc3')[0].style.backgroundImage = "url('img/test27.jpg')";

            // sc5
            document.getElementsByClassName('sc5')[0].querySelector('img').src = 'img/test26.jpg';

            //sc6

            document.getElementsByClassName('m5')[0].querySelector('img').src = 'img/test33-1.jpg';

            document.getElementsByClassName('tbox7')[0].querySelector('h3').innerText = 'The Apple Market';

            document.getElementsByClassName('tbox7')[0].querySelector('p').innerText = ' Apple Market Covent Garden';

            document.getElementsByClassName('tbox7')[0].querySelector('table tr:first-child>td').innerText = '21, The Market Building, London WC2E 8RD';

            document.getElementsByClassName('tbox7')[0].querySelector('table tr:last-child>td').innerText = '-';

            document.getElementsByClassName('m5')[1].querySelector('img').src = 'img/test34.jpg';

            document.getElementsByClassName('tbox7')[1].querySelector('h3').innerText = 'Trafalgar Square';

            document.getElementsByClassName('tbox7')[1].querySelector('p').innerText = ' Trafalgar Square';

            document.getElementsByClassName('tbox7')[1].querySelector('table tr:first-child>td').innerText = 'Trafalgar Sq, London WC2N 5DS';

            document.getElementsByClassName('tbox7')[1].querySelector('table tr:last-child>td').innerText = '-';

            document.getElementsByClassName('m5')[2].querySelector('img').src = 'img/test35.jpg';

            document.getElementsByClassName('tbox7')[2].querySelector('h3').innerText = 'Big Ben';

            document.getElementsByClassName('tbox7')[2].querySelector('p').innerText = 'Big Ben';

            document.getElementsByClassName('tbox7')[2].querySelector('table tr:first-child>td').innerText = 'SW1A 0AA London';

            document.getElementsByClassName('tbox7')[2].querySelector('table tr:last-child>td').innerText = '-';

            //sc7
            let img2 = ['img/test28.jpg', 'img/test29.jpg', 'img/test30.jpg'];
            let r_name = ['The Breakfast Clup', 'Ozone Coffee Roasters', 'Half Cup'];
            let adress = ['11 Southwark St, London SE1 1RQ', '11 Leonard St, London EC2A 4AQ', '100-102 Judd St, London WC1H 9NT'];

            for (let i = 0; i < img2.length; i++) {
                document.getElementsByClassName('m6')[i].querySelector('img').src = img2[i];
                document.getElementsByClassName('b3')[i].querySelector('h3').innerText = r_name[i];
                document.getElementsByClassName('b3')[i].querySelector('p').innerText = adress[i];
            }

            //sc8
            document.getElementsByClassName('m7')[0].querySelector('img').src = 'img/test24-1.jpg';
            document.getElementsByClassName('m8')[0].querySelector('img').src = 'img/test25-1.jpg';

            //footer
            document.getElementsByClassName('logo2')[0].querySelector('img').src = 'img/logo2.png';
        }

        else {

            // change button (.dn)
            this.querySelector('img').src = 'img/night.png';
            let mn = document.getElementsByClassName('line');
            for (let i = 0; i < mn.length; i++) {
                mn[i].style.backgroundColor = '#fff';
            }

            // button all
            let btn = document.getElementsByTagName('button');
            for (let j = 0; j < btn.length; j++) {
                btn[j].style.color = '#fff';
                btn[j].style.border = '2px solid #fff';
            }

            // logo & basic
            document.getElementsByClassName('logo1')[0].querySelector('img').src = 'img/logo.png';

            document.body.style.backgroundColor = '#000';
            wrap.style.color = '#fff';

            document.querySelector('html').style.setProperty("--ac", "#fff");
            document.querySelector('html').style.setProperty("--bc", "#000");

            document.getElementsByClassName('sc7')[0].style.backgroundColor = '#500000';

            // slider
            document.getElementById('slider').querySelector('video').src = 'img/video3.mp4';

            // sc1
            document.getElementsByClassName('m1')[0].querySelector('img').src = 'img/img1.jpg';
            document.getElementsByClassName('m1')[1].querySelector('img').src = 'img/img2.jpg';
            document.getElementsByClassName('m1')[2].querySelector('img').src = 'img/img3.jpg';

            // sc2
            document.getElementsByClassName('m2')[0].querySelector('img').src = 'img/test11.jpg';
            document.getElementsByClassName('m3')[0].querySelector('img').src = 'img/img5.jpg';

            // sc3
            document.getElementsByClassName('sc3')[0].style.backgroundImage = "url('img/test22.jpg')";

            // sc5
            document.getElementsByClassName('sc5')[0].querySelector('img').src = 'img/test12.jpg';

            //sc6

            document.getElementsByClassName('m5')[0].querySelector('img').src = 'img/test10.jpg';

            document.getElementsByClassName('tbox7')[0].querySelector('h3').innerText = 'The Shard';

            document.getElementsByClassName('tbox7')[0].querySelector('p').innerText = "London's Shard, tallest in Europe, houses diverse facilities.";

            document.getElementsByClassName('tbox7')[0].querySelector('table tr:first-child>td').innerText = '32 London Bridge St, London SE1 9SG, UK';

            document.getElementsByClassName('tbox7')[0].querySelector('table tr:last-child>td').innerText = '£32';

            document.getElementsByClassName('m5')[1].querySelector('img').src = 'img/test3.jpg';

            document.getElementsByClassName('tbox7')[1].querySelector('h3').innerText = 'London EYE';

            document.getElementsByClassName('tbox7')[1].querySelector('p').innerText = 'Iconic Ferris wheel, offering panoramic city views.';

            document.getElementsByClassName('tbox7')[1].querySelector('table tr:first-child>td').innerText = 'Riverside Building, County Hall, London SE1 7PB, UK';

            document.getElementsByClassName('tbox7')[1].querySelector('table tr:last-child>td').innerText = '£30.5 ~';

            document.getElementsByClassName('m5')[2].querySelector('img').src = 'img/test13.jpg';

            document.getElementsByClassName('tbox7')[2].querySelector('h3').innerText = 'Tower Bridge';

            document.getElementsByClassName('tbox7')[2].querySelector('p').innerText = 'Symbolic historic bridge crossing the Thames.';

            document.getElementsByClassName('tbox7')[2].querySelector('table tr:first-child>td').innerText = 'Tower Bridge Rd, London SE1 2UP';

            document.getElementsByClassName('tbox7')[2].querySelector('table tr:last-child>td').innerText = '£12.30 ~';

            //sc7
            let img = ['img/test14.jpg', 'img/test15.jpg', 'img/test16.jpg'];
            let r_name = ['The Coppa Club', 'The Wolseley', 'The IVY'];
            let adress = ['3 Three Quays Walk, Lower Thames Street, London, EC3R 6AH', "160 Piccadilly, St. James's, London W1J 9EB", '1-5 West St, London WC2H 9NQ'];

            for (let i = 0; i < img.length; i++) {
                document.getElementsByClassName('m6')[i].querySelector('img').src = img[i];
                document.getElementsByClassName('b3')[i].querySelector('h3').innerText = r_name[i];
                document.getElementsByClassName('b3')[i].querySelector('p').innerText = adress[i];
            }

            //sc8
            document.getElementsByClassName('m7')[0].querySelector('img').src = 'img/test24.jpg';
            document.getElementsByClassName('m8')[0].querySelector('img').src = 'img/test25.jpg';

            //footer
            document.getElementsByClassName('logo2')[0].querySelector('img').src = 'img/logo.png';
        }
    }
}
