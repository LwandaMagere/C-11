/**
 * HTTP Library
 * Library for making http request
 * @version 2.0.0
 * @author Dado Steven Lenssen 
 * @license MIT 
 */

// class HTTP { //// 1
//     // Make http GET Request
//     get(url) {
//         fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
//     }
// }

class HTTP {
    // Make http GET Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        });
    }

    // Make http POST Request (it has to take in data)
      post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                // body: JSON.parse(data)
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        });
    }

    // Make http PUT Request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // Make http DELETE Request
       delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'application/json'
                }
            
            })
            .then(res => res.json())
            .then(() => resolve('Resource deleted ...'))
            .catch(err => reject(err));
        });
    }


}