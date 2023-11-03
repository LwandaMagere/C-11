// EVENT BUBBLING - The bubbling up of events through the DOM..Bubbling up to it's parent
// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });
//...................................................................

// EVENT DELAGATION -- opposite of event bubbling, put the event listener on the parent then we go down

const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    // console.log(e.target);

    // if (e.target.className === 'fa fa-remove') {
    //     console.log('delete item');
    // }

    // if (e.target.parentElement.className == 'delete-item secondary-content') {
    //     console.log('delete item');
    // }

    // if (e.target.parentElement.classList.contains('delete-item')) {
    //     console.log('delete item');
    // }

    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        e.target.parentElement.parentElement.remove()
    }
}










