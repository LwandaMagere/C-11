const http = new easyHTTP();

// Get post
// http.get('./easy.json');

// Get post part 2
// http.get('./easy.json', function(post){
//     console.log(post);
// })

// Get post part 3
// http.get('./easy.json', function(e,k){
//     if(e) {
//         console.log(e);
//     } else {

//         console.log(k);
//     }
// });

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/post',data, function(error, post){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }

// })

// Update post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post){
    if(error) {
        console.log(error);
    } else {
        console.log(post);
    }
});

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts', function(error, post) {
    if(error) {
        console.log(error);
    } else {
        console.log(posts);
    }
})