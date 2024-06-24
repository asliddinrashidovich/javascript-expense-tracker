// adder transaction

const labelOne = document.getElementById('label1-css');
const labelTwo = document.getElementById('label2-css');

labelOne.addEventListener('click', ()=> {
    labelOne.style.background = '#fff'
    labelTwo.style.background = '#cdcbcb'
    console.log('asloiddin')
})
labelTwo.addEventListener('click', ()=> {
    labelOne.style.background = '#cdcbcb'
    labelTwo.style.background = '#fff'
    console.log('two')
})
