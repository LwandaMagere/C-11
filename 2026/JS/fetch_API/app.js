// --- Fetch is the newer standard for dealing with http request, it returns promises

document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
    fetch('test.txt')
    .then(function(res) {
        // console.log(res); // show the returned promise
        // console.log(res.text());
        return res.text();
    }).then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = data;
    }).catch(function(err) {
        console.log(err);
    })
}


function getJson() {
    fetch('posts.json')
    .then(function(res) {
        return res.json();
    }).then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(post) {
            output += `<li>${post.title}</li>`
        })
        document.getElementById('output').innerHTML = output;
    }).catch(function(err) {
        console.log(err);
    })
}

function getExternal() {
    fetch('posts2.json')
    .then(function(res) {
        return res.json();
    }).then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(post) {
            output += `<li>${post.login}</li>`
        })
        document.getElementById('output').innerHTML = output;
    }).catch(function(err) {
        console.log(err);
    })
}




























                                                








