// Fetch is a newer standard to deal with http request
document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Getting external api
function getExternal() {
  fetch('https://api.github.com/users').then(function(res) {
    // console.log(res);
    return res.json();
  }).then(function(data){
    // console.log(data);
    // console.log(JSON.stringify(data));

    let output = '';
    data.forEach(function(user){
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;

  }).catch(function(err){
    console.log(err);
  })

}


// Get local json data
function getJson() {
  fetch('posts.json').then(function(res) {
    // console.log(res);
    return res.json();
  }).then(function(data){
    // console.log(data);
    // console.log(JSON.stringify(data));

    let output = '';
    data.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;

  }).catch(function(err){
    console.log(err);
  })

}

// Get local text file data
function getText() {
  fetch('test.txt').then(function(res){
    // console.log(res);
    // console.log(res.text())
    return res.text()
  }).then(function(data){
    console.log(data);
  }).catch(function(err){
    console.log(err);
  });

}