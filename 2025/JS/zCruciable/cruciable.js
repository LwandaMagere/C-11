document.querySelector('.luanda').addEventListener('click', clickMe);

function clickMe(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'cruciable.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const cruciable = JSON.parse(this.responseText);

            let output = `
                <ul>
                    <li>Name: ${cruciable.name}</li>
                    <li>National ID: ${cruciable.id}</li>
                    <li>Phone Number: ${cruciable.phone}</li>
                    <li>Company: ${cruciable.company}</li>
                </ul>
              
            `;

         document.querySelector('.lwanda').innerHTML = output; //1

            // console.log(cruciable); // 2
        }
    }

    xhr.send();
}

document.querySelector('.luanda2').addEventListener('click', clickMe2);

function clickMe2(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'crucs.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const crucs = JSON.parse(this.responseText);

            let output = '';

            crucs.forEach(function(cruc){
               output +=  `
                            <ul>
                                <li>Name: ${cruc.name}</li>
                                <li>National ID: ${cruc.id}</li>
                                <li>Phone Number: ${cruc.phone}</li>
                                <li>Company: ${cruc.company}</li>
                            </ul>

                            
                        `
            })

            document.querySelector('.lwanda2').innerHTML = output; // 1


            // console.log(crucs); 2
        } 
    }

    xhr.send();

    
}


