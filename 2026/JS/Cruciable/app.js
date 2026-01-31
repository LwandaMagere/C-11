document.querySelector('.button1').addEventListener('click', get);

function get() {
    fetch('test.txt').then(function(res){
         return res.text()
        console.log(res)
    })
                    .then(function(data) {
                        
                        console.log(data);
                     })
}