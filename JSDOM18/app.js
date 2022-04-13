// const headingOne = document.getElementById('jsHello');
// console.log(headingOne);
// headingOne.style.color = 'red';
// headingOne.style.fontSize = '20px';
// document.getElementsByTagName('body');
// headingOne.style.textAlign = 'center'
// headingOne.classList.add('hello');
// const headingTwo = document.querySelector('.jsDom');

// console.log(headingTwo);
// headingTwo.addEventListener('click', function(){
//     headingTwo.style.color = 'red'
//     headingTwo.classList.remove('jsDom')
//     console.log(headingTwo);
//     headingTwo.innerHTML = "remove this element";
// });

// const paragraph = document.querySelector('p');
// console.log(paragraph)

// paragraph.style.fontSize = '40px';


// const author = document.querySelectorAll('.author');
// document.body.style.backgroundColor = 'green';

// for(let i = 0; i<author.length; i++){
//     const element = author[i];
//     console.log(element)
//     element.style.color = 'red';
//     element.style.margin = '10px';
//     console.log(element.innerHTML);
//     element.innerHTML = `লেখক - ${i+1}`
// }

// const description = document.querySelector('h1');

// console.log(description);
// description.setAttribute('value', 'hello heading this is heading one')

const article = document.getElementById('first-article')
const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'This is create by Javascript'
article.appendChild(newParagraph);
