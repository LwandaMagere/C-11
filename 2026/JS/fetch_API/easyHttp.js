/**
 * Easy Http Library
 * 
 * @version 2.0.0
 * @author  Dado Steven Lenssen
 * @license MIT
 * 
 */

class EasyHTTP {
      // Make an HTTP GET Request /////////
    //   get(url) {
    //     fetch(url).then(res => res.json)
    //               .then(data => console.log(data))
    //               .catch(err => console.log(err));
    //   }

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(res => resolve.json())
                      .then(data => resolve(data))
                      .catch(err => reject(err));
        })
    }

    // Make an HTTP POST Request
    post(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'POST',
          header: {
            'Content-type':'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json)
          .then(data => resolve(data))
          .catch(err => reject(err));

      })
    }

    // Make an HTTP PUT Request
    put(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'PUT',
          header: {
            'Content-type':'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json)
          .then(data => resolve(data))
          .catch(err => reject(err));

      })
    }

    // Make an HTTP DELETE Request
    delete(url) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'DELETE',
          header: {
            'Content-type':'application/json'
          },
         
        }).then(res => res.json)
          .then(() => resolve('resource deleted ...'))
          .catch(err => reject(err));

      })
    }





}






