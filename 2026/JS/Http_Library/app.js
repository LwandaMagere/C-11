const http  = new HTTP;

// Get user
// http.get('posts2.json');

// Get user
// http.get('posts2.json')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// User Data
const data = {
    name: 'John Doe',
    username: 'Bret',
    email: 'stevendado@gmail.com'
}

// Create a user
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));

