
// ASYNCHRONOUS PROGRAMMING

// document.querySelector('.get-jokes').addEventListener('click', getJokes);

// function getJokes(e) {
//     const number = document.querySelector('input[type="number"]').value;

//    const xhr = new XMLHttpRequest();

//    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

//    xhr.onload = function () {
//       if(this.status === 200) {
//         const response = JSON.parse(this.responseText);
        
//         // console.log(response);

//         let output = '';

//         if (response.type === 'success') {
//             response.value.forEach(function(joke){
//                 output += `<li>${joke.joke}</li>`;
//             })
//         } else {
//             output += '<li>Something went wrong</li>';
//         }

//         document.querySelector('.jokes').innerHTML = output;

//       }
//    }

//    XHR.send();

//     e.preventDefault();
// }

/// PART 2

// document.getElementById('button').addEventListener('click', loadData);

// function loadData() {
//     // Create and XHR object
//     const xhr = new XMLHttpRequest();

//     // Open, put true coz we wnt it to be asynchronous
//     xhr.open('GET', 'data.txt', true);

    // console.log('READY STATE', xhr.readyState);

    // Optional - used for spinner and loaders
    // xhr.onprogress = function () {
    //     console.log('READY STATE', this.readyState)
    // }

    // xhr.onload = function() {
    //     console.log('READY STATE', xhr.readyState);
    //     if(this.status === 200) {
    //         // console.log(this.responseText);
    //         document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    //     }
        
    // }

    // Old syntax
    // xhr.onreadystatechange = function() {
    //     console.log('READY STATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    // xhr.onerror = function () {
    //     console.log('Error');
    // }

    // xhr.send();

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response ready

    // HTTP STATUS
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not found"
// }

// PART 3
// document.getElementById('button1').addEventListener('click', loadCustomer);

// document.getElementById('button2').addEventListener('click', loadCustomers);



// // Load single customers
// function loadCustomer (e) {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET','customers.json', true);

//     xhr.onload = function() {
//         if(this.status === 200) {
//             // console.log(this.responseText);
//             const customer = JSON.parse(this.responseText);

//             const output = `
//                 <ul>
//                  <li>ID: ${customer.id}</li>
//                  <li>Name: ${customer.name}</li>
//                  <li>Company: ${customer.company}</li>
//                  <li>Phone: ${customer.phone}</li>
//                 </ul>
            
//             `
//             document.getElementById('customer').innerHTML = output;
//         }

//     }

//     xhr.send();
//     e.preventDefault();
// }

// Load Customers
// function loadCustomers(e) {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET','customers.json', true);

//      xhr.onload = function() {
//         if(this.status === 200) {
//             // console.log(this.responseText);
//             const customers = JSON.parse(this.responseText);

//             let output = '';

//             customers.forEach(function(customer) {
//                  output += `
//                 <ul>
//                  <li>ID: ${customer.id}</li>
//                  <li>Name: ${customer.name}</li>
//                  <li>Company: ${customer.company}</li>
//                  <li>Phone: ${customer.phone}</li>
//                 </ul>
            
//             `
//             });

            
//             document.getElementById('customers').innerHTML = output;
//         }

//     }

//     xhr.send();
//     e.preventDefault();
// }

// document.getElementById('button1').addEventListener('click', loadCustomer);

// function loadCustomer() {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'customer.json', true);

//     xhr.onload = function () {
//         if(this.status === 200) {
//             const customer = JSON.parse(this.responseText);

            // const output = `
            // <ul>
            //     <li>ID:${customer.id}</li>
            //     <li>Name:${customer.name}</li>
            //     <li>Company:${customer.company}</li>
            //     <li>Phone:${customer.phone}</li>
            // </ul>

            // `

//             document.getElementById('customer').innerHTML = output;
//         }
//     }

//     xhr.send();
// }






















// CRUCIABLE
document.getElementById('button1').addEventListener('click', addCustomer);

function addCustomer() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);
     

    xhr.onload = function() {
        if(this.status === 200) {
           const customers = JSON.parse(this.responseText);

            const output = `
            <ul>
                <li>ID:${customer.id}</li>
                <li>Name:${customer.name}</li>
                <li>Company:${customer.company}</li>
                <li>Phone:${customer.phone}</li>
            </ul>

            `;

            document.getElementById('customer').innerHTML = output;
            
        }
    }

    xhr.send();
}

// Customers
document.getElementById('button2').addEventListener('click', addCustomers);

function addCustomers() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const customers = JSON.parse(this.responseText);

            let output = '';
            customers.forEach(function(customer){

                output += `
               <ul>
                   <li>ID:${customer.id}</li>
                   <li>Name:${customer.name}</li>
                   <li>Company:${customer.company}</li>
                   <li>Phone:${customer.phone}</li>
               </ul>
    
               `;

            })


            document.getElementById('customers').innerHTML = output;
            
        }
    }

    xhr.send();
}

