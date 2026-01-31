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

}
