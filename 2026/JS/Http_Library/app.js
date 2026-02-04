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
// http.post('posts2.json', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Update Post
// http.put('posts2.json', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Delete user
http.delete('posts2.json')
.then(data => console.log(data))
.catch(err => console.log(err));

