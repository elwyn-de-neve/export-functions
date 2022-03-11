import fetchData from './functions/fetchDataFunction'

const input = document.getElementById('user-input-field');
const form = document.getElementById('on-submit');


form.addEventListener('submit', ( e ) => {

    e.preventDefault();

    fetchData( input.value ).then();

})

