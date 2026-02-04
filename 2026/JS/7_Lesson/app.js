// Call back server demonstration
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
]

function createPost(post) {
    setTimeout(function(){
        posts.push(post);
    }, 2000)
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        // console.log(output);
        document.getElementById('test').innerHTML = output;
    }, 1000);
}

getPosts();

createPost({title: 'Post Three', body: 'This is post three'});

