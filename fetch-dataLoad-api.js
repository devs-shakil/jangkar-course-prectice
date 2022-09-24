 const dataLoad = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayData(data))

 }

 dataLoad();

 const displayData = (data) =>{
    const ul = document.querySelector('#ul');
    for(let i = 0; i<data.length; i++){
        const user = data[i];
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }

 };


 