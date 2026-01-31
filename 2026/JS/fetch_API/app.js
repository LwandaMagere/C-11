document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);


// Get local text file data
function getText() {
    fetch('test.txt').then(function(res){
        // console.log(res);
        return res.text(); // returns a promise
    }).then(function(data) {
        console.log(data); // returns the text
        document.getElementById('output').innerHTML = data
    }).catch(function(err) {
        console.log(err);
    })
}

// Get local json data
function getJson() {
    fetch('posts.json').then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log(data);
        let output = '';
        data.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        })
        document.getElementById('output').innerHTML = output;
    }).catch(function(err) {
        console.log(err);
    })
}

function getExternal() {
    fetch('https://api.github.com/users').then(function(res){
        // console.log(res);
        return res.json();
    }).then(function(data){
        console.log(data)
        let output = '';
        data.forEach(function(user) {
            output += `<li>${user.login}</li>`;
        })
    }).catch(function(err) {
        console.log(err);
    })
}
////////////////////////////  END

const http = new EasyHTTP;

// Get users
// http.get('https://jsonplaceholder.typicode.com/users');

http.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data))
                                                      .catch(err => console.log(err));



