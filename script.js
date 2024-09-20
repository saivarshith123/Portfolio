var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");
togglebtn.addEventListener
(
    "click", function()
    {
        this.classList.toggle("click");
        nav.classList.toggle("open");
    }
)
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzhGmbQ-S7s7WG2XMKAn4-TIjkCjlIE3hEzhq0EwE0OyJ-NdmW7o9tN8vUg36UxBFTP6A/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

function Kottu()
{
    alert("Thank you for giving the feedback");
}