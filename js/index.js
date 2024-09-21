function gettingEl(id) {
    const el = document.getElementById(id);
    return el;
}
const selectedSeatEl = gettingEl('selected-seat');
const totalBookedEl = gettingEl('total-booked');
const availableSeatEl = gettingEl('available-seat');
const noSeat = gettingEl('no-seat');
const totalPriceEl = gettingEl('total-price');
const couponInput = gettingEl('coupon-field')
const couponBtn = gettingEl('coupon-btn');
const grandPriceEl = gettingEl('grand-price');
const couponApply = gettingEl('coupon-apply');
const phoneNumber = gettingEl('phone-number');
const nextBtn = gettingEl('next-btn');


let selectedSeat = [];
let totalPrice = 0;
function handler(event) {
    const value = event.innerText;
    if(selectedSeat.includes(value)) {
        return alert('Seat Already Booked')
    }
    else if(selectedSeat.length < 4) {
        noSeat.classList.add('hidden')
        event.classList.add('bg-primary');
        event.classList.add('text-white');
        selectedSeat.push(event.innerText);
        totalBookedEl.innerText = selectedSeat.length;
        const availableSeat = parseFloat(availableSeatEl.innerText);
        const newAvailableSeat = availableSeat - 1;
        availableSeatEl.innerText = newAvailableSeat
        selectedSeatEl.innerHTML += `
        <li class = 'text-base font-normal flex justify-between'>
            <span> ${event.innerText} </span>
            <span>Economy</span>
            <span>550</span>
        </li>
        `
        totalPrice += 550;
        totalPriceEl.innerText = totalPrice.toFixed(2);
    
        if(selectedSeat.length > 3) {
            couponInput.removeAttribute('disabled');
            couponBtn.removeAttribute('disabled');
        }    
    }
    else {
        return alert('Maximum Seat (4) Booked')
    }
}

couponBtn.addEventListener('click', function() {
    let couponSave = 0;
    if(couponInput.value === 'NEW50') {
        couponSave =  totalPrice * .15;
    }
    else if(couponInput.value === 'Couple 20') {
        couponSave = totalPrice * .20;
    }
    else {
        return alert('Your Provided Coupon Code Is Not Valid 😕')
    }
    const grandPrice = totalPrice - couponSave;
    grandPriceEl.innerText = grandPrice.toFixed(2);
    couponApply.classList.add('flex');
    couponApply.classList.add('justify-between');
    couponApply.innerHTML = `
    <p class = 'capitalize text-lg font-bold'>Discount</p>
    <p class = 'text-right text-lg font-bold'>- BDT: ${couponSave.toFixed(2)}
    `
})

phoneNumber.addEventListener('input', function(e) {
    const phoneValue = e.target.value;
    if(phoneValue.length >= 11) {
        nextBtn.removeAttribute('disabled')
    }
})

document.getElementById('btn-continue').addEventListener('click', function() {
    window.location.reload();
})

//programming hero code link
//https://github.com/ismailjosim/dublin-bus-with-js-dom/tree/main