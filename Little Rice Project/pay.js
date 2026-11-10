function switchBox() {
    const payType = document.querySelector('input[name="payType"]:checked').value;
    const cardFields = document.getElementById('cardFields');
    if(cardFields) {
        cardFields.style.display = (payType === 'card') ? 'block' : 'none';
    }
}

document.addEventListener('DOMContentLoaded', switchBox);

const form = document.getElementById('payForm');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();   

        const payType = document.querySelector('input[name="payType"]:checked').value;
        let url = 'Confirmation.html?payType=' + payType;

        if(payType === 'card') {
            const name   = document.getElementById('cardholder-name').value.trim();
            const number = document.getElementById('card-number').value.trim();
            const expiry = document.getElementById('expiry-date').value.trim();
            const cvv    = document.getElementById('cvv').value.trim();

            if(!name || !number || !expiry || !cvv) {
                alert('Please fill in all card details.');
                return;
            }

            url += '&cardholder-name=' + encodeURIComponent(name);
            url += '&card-number=' + encodeURIComponent(number);
            url += '&expiry-date=' + encodeURIComponent(expiry);
            url += '&cvv=' + encodeURIComponent(cvv);
        }

        window.location.href = url;
    });
}

window.onload = function() {
    let params = new URLSearchParams(window.location.search);
    let payType = params.get('payType');
    
    let methodDisplay = document.getElementById('payMethodDisplay');
    let bankBox = document.getElementById('bankDetailsBox');

    if (methodDisplay) {
        if (payType === 'bank') {
            methodDisplay.innerText = "Bank Transfer"; 

            if (bankBox) {
                bankBox.style.display = "block";
            }
            
        } else if (payType === 'cash') {
            methodDisplay.innerText = "Cash";
            if (bankBox) bankBox.style.display = "none"; 
            
        } else {
            methodDisplay.innerText = "Not Selected";
            if (bankBox) bankBox.style.display = "none";
        }
    }
};

