
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => User(json))


function User (users){

    console.log(users)
    const usernames =users.map(user=> user.username)

    const ul =document.getElementById("list");

    console.log(usernames);

    for ( let i = 0; i<usernames.length; i++){

    var  username =usernames[i]
    console.log(username);
    
    const li =document.createElement('li');

    li.innerText = username;

    ul.appendChild(li)
    }

}