function moving(e, self) {
    let _card = self
    
    x = ((e.clientX) - (_card.offsetLeft)) - 280
    y = ((e.clientY) - (_card.offsetTop)) - 200

    console.log('x is : ' + x + "y is :" + y)

    _card.style.transform='rotateY('+x / 2+'deg)rotateX('+ y / 8 +'deg)'
}

let _card = document.querySelectorAll('.card')

for(let i = 0; i < _card.length; i++) {
    _card[i].addEventListener('mouseleave', function() {
        _card[i].style.transform = 'rotateY(0deg)rotateX(0deg)'
    })
}

