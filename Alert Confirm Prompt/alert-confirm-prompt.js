console.log('i am here');

/*
//Without button modal
alert('Ma is coming!!');
*/

/*
//With button modal
const maComing = () => {
    alert('Ammu is coming. Open the book.');
}
*/

/*
//With confirm
const askPicnic = () => {
    const response = confirm('Are you ready for picnic?');
    console.log(response);
    if (response === true) {
        alert('Amake free te bkash kore de');
    }
    else {
        console.log('dure giye mor.');
    }
}
*/

//Prompt
const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
}