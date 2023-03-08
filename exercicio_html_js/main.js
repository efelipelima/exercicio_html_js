const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
event.preventDefault();

    const fieldA = parseInt(document.querySelector('#fieldA').value);
    const fieldB = parseInt(document.querySelector('#fieldB').value);

        if (fieldB > fieldA) 
{
    alert('Tudo certo!');


}
        else {
    alert('Ops! Algo deu errado');
}
});

console.log(form);