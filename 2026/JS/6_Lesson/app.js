const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

function createPost(post) {
    setTimeout(function() {
        posts.push(post);
    }, 2000);
}

function  getPost() {
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`; 
        });

        document.body.innerHTML = output;

    }, 1000)
}