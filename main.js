document.getElementById("btn").addEventListener("click", 
function () {
    alert('i am clicked');
});

document.getElementById('btn').addEventListener("click", function() {
    document.getElementById('btn').style.backgroundColor = 'blue';
});



document.getElementById('email-btn').addEventListener("click", 
function() {
    alert('email submitted');
});

// testing the axios API and making xhr request