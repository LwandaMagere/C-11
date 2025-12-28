const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post);
//     }, 2000)
// }

// function getPost() {
//     setTimeout(function() {
//         let output = '';

//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000); // The time is important aspect
// }

// createPost({title: 'Post three', body: 'This is post three'});


// getPost();     // part 1


// function createPost(post, callback) {
//     setTimeout(function(){
//         posts.push(post);
//         callback();
//     }, 2000)
// }

// function getPost() {
//     setTimeout(function() {
//         let output = '';

//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000); // The time is important aspect
// }

// createPost({title: 'Post three', body: 'This is post three'}, getPost);

// PROMISE

function createPost(post) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);

            const error = true;
            if(!error) {
                resolve();

            } else {
                reject('Something went wrong!');
            }

        }, 2000)
    })
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000); // The time is important aspect
}

createPost({title:'Post Three', body: 'This is post three'}).then(getPosts).catch(function(err){
    console.log(err)
});
