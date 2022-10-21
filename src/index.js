import './less/index.less'

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.target.style.color = 'pink';
    });

    element.addEventListener('pointerover', (event) => {
        event.target.style.fontSize = '2.6rem';
        event.target.style.color = '#17A2B8';
    });

    element.addEventListener('pointerout', (event) => {
        event.target.style.fontSize = '1.6rem';
        event.target.style.color = 'black';
    });
});

const mainBody = document.querySelector('body');
mainBody.addEventListener('keypress', (event) => {
    event.target.style.backgroundColor = '#84C0C6';
    event.target.style.color = 'white';
});


const bus = document.querySelector('.intro img');
bus.addEventListener('wheel', (event) => {
    event.target.src="https://images.squarespace-cdn.com/content/v1/56ba76c64d088e34b3e11c67/1536521387760-8G6NGU9G3QVU37KRM4W9/Camper+Vans+for+Rent_Vanagons.png?format=2500w";
});

const headings = document.querySelectorAll('h2');
headings.forEach((element) => {
    element.addEventListener('pointerover', (event) => {
        if(event.target.style.textAlign == 'right'){
            event.target.style.textAlign = 'left';
        } else {
            event.target.style.textAlign = 'right';
        };

        window.addEventListener('pointermove', (event) => {
            element.style.color = '#17A2B8';
        });
        
    });
});



const btn = document.querySelectorAll('.btn');
btn.forEach((element) => {
    element.addEventListener('pointerover', (event) => {
        event.target.style.fontSize = '2.4rem';
        event.target.style.backgroundColor = 'red';
        event.target.style.color = 'white';
    });
});

btn.forEach((element) => {
    element.addEventListener('pointerout', (event) => {
        event.target.style.fontSize = '1.8rem';
        event.target.style.backgroundColor = '#17A2B8';
    });
});

btn.forEach((element) => {
    element.addEventListener('dblclick', (event) => {
        let money = Math.ceil(Math.random()*10000);
        alert(`Your card has been debited $${money}. Happy travels!`);
    });
});

window.addEventListener('load', (event) => {
    alert("Welcome to fun bus!");
});

const headerMain = document.querySelector('h1');
window.addEventListener('resize', (event) => {
    headerMain.style.fontSize = "6rem";
});

const mainText = document.querySelectorAll('p');
mainText.forEach((element) => {
    element.addEventListener('copy', (event) => {
        event.preventDefault();
        event.target.style.color = "white";
    });
});