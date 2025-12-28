function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request ---- Retrieve data from a specified resource

// easyHTTP.prototype.get = function(url) {
//     this.http.open('GET', url, true);

//     const self = this;

//     this.http.onload = function() {
//         if(self.http.status === 200) {
//             console.log(self.http.responseText);
//         }
//     }

//     this.http.send();
// }

// Now with a call back for it to be Asynchronous part 2
// easyHTTP.prototype.get = function(url, callback) {

//     this.http.open('GET', url, true);

//     const self = this;
    
//     this.http.onload = function() {
//         if (self.http.status === 200) {
//             callback(self.http.responseText);
//         }
//     }

//     this.http.send();
// }

// Now with an error part 3
// easyHTTP.prototype.get = function(url, callback) {
//     this.http.open('GET',url, true);

//     const self = this;

//     this.http.onload = function(url) {
//         if(self.http.status === 200) {
//             callback(null, self.http.responseText)
//         } else {
//             callback('WEWE! ' + self.http.status)
//         }
//     }

//     this.http.send();
// }


// Make a HTTP POST Request ----Submit data to be processed to a specified resource
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);

    this.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText)
    }
    
    this.http.send(JSON.stringify(data));

}

// Make an HTTP PUT Request ---- Update a specified resource
easyHTTP.prototype.put = function() {
    this.http.open('PUT', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }



    this.http.send(JSON.stringify(data))
}

// Make an HTTP DELETE Request --- Delete a specified resource
easyHTTP.prototype.delete = function(ulr, callback) {
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function() {
        if(self.http === 200) {
            callback(null, 'Post deleted');
        }else {
            callback('Error '+ self.http.status);
        }
    }

    this.http.send()
}