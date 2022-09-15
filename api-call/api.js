fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displayUser(json));

  const displayUser = (users) =>{
    // const userNames = users.map(user => user.username);
    // console.log(userNames);

    // const names = users.map(name => name.name);
    // console.log(names);

    // const ids = users.map(id =>id.id);
    // console.log(ids);

    // const emails = users.map(email => email.email);
    // console.log(emails);

    // const address = users.map(address => address.address);
    // console.log(address)

    // const streets = users.map(onestreet => onestreet.address.street);
    // console.log(streets);

    // const city = users.map(cityName => cityName.address.city);
    // console.log(city);

/*
    const ul= document.querySelector('#userName');

     for(let i = 0; i<userNames.length; i++){
        const user = userNames[i];
        const li = document.createElement('li');
        li.innerText = user;
        ul.appendChild(li)
    } */
     

   /*  const names = users.map(name => name.name);
    for(let i = 0; i<names.length; i++){
      const name = names[i];
      const li = document.createElement('li');
      li.innerText = name;
      ul.appendChild(li);
    }
 */

    /* const ulForEmail = document.querySelector('#email');
    const emails = users.map(email => email.email);
    for(let i =0; i<emails.length; i++){
      const email = emails[i];
      const li = document.createElement('li');
      li.innerText = email;
      ulForEmail.appendChild(li);

    } */


    

  }