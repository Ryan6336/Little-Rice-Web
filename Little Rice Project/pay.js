

function switchBox() {
}

document.getElementById('payForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let payMethod = document.querySelector('input[name="payType"]:checked').value;
    
    localStorage.setItem('paymentMethod', payMethod);
    
    window.location.href = 'confirmation.html'; 
});

