const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];


// PART ONE ////////////////////////////////////////////
// function createPosts(post) {
//     setTimeout(function(){
//         posts.push(post);

//     }, 2000);
// }

// function getPosts() {

//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`    
//         });
//         document.getElementById('sasa').innerHTML = output;

//     }, 1000);

      
// }

// createPosts({title: 'Post three', body: 'This is post threee'});

// getPosts();


// PART TWO --  With call back
// function createPosts(post, callback) {
//     setTimeout(function(){
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// function getPosts() {

//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`    
//         });
//         document.getElementById('sasa').innerHTML = output;

//     }, 1000);     
// }

// createPosts({title: 'Post three', body: 'This is post threee'}, getPosts);



// PART THREE Alternative to handle asychronous operation
function createPosts(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            posts.push(post);  
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong ...');
            }
            
        }, 2000);
    });

}

function getPosts() {

    setTimeout(function(){
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`    
        });
        document.getElementById('sasa').innerHTML = output;

    }, 1000);     
}

createPosts({title: 'Post three', body: 'This is post threee'})
.then(getPosts)
.catch(function(err){
console.log(err);
                                                               
});