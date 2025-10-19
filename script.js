
// Counting heart icon click

const heartCount = document.getElementById('heart-count');
const heartButtons = document.getElementsByClassName('heart-button');
let count = 0;
for (const btn of heartButtons) {
    btn.addEventListener('click', function () {
        count++;
        heartCount.innerText = count;
    })
}


//Function for call button 
function callSetup(id, nameId, numberId) {
    document.getElementById(id)
        .addEventListener('click', function () {
            const name = document.getElementById(nameId).innerText;
            const number = document.getElementById(numberId).innerText;
            const coin = parseInt(document.getElementById('coin').innerText);
            const updatedCoin = coin - 20;

            if (updatedCoin < 0) {
                alert('❌ Not enough coins! You need to have minimum 20 coins to make a call');
                return;
            }
            document.getElementById('coin').innerText = updatedCoin;
            alert('📞 Calling ' + name + ' ' + number + '...')


            // call history

            const timeId = new Date().toLocaleString();
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="flex justify-between items-center bg-[#fafafa] p-3 mt-3 rounded-lg">
                    <div>
                        <h1 class="font-semibold text-[17px] text-[#111111]">${name}</h1>
                        <h4 class="text-[#5c5c5c]">${number}</h4>
                    </div>
                    <p class="text-[#111111]">${timeId}</p>
                </div>
       `
            const historyContainer = document.getElementById('history-container');
            historyContainer.appendChild(div);

        })


}

// Clear button functionality

document.getElementById('clear-button')
.addEventListener('click',function(){
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerText ='';
})



//National emergency
callSetup('national-call', 'national-name', 'national-number');

//Police service
callSetup('police-call', 'police-name', 'police-number');
// Fire service
callSetup('fire-call', 'fire-name', 'fire-number');
//Ambulance
callSetup('ambulance-call', 'ambulance-name', 'ambulance-number');
// Child helpline
callSetup('child-call', 'child-name', 'child-number');
//Anti-corruption
callSetup('anti-corruption-call', 'anti-corruption-name', 'anti-corruption-number')
//Electricity
callSetup('electricity-call', 'electricity-name', 'electricity-number');
//Brac Helpline
callSetup('brac-call', 'brac-name', 'brac-number');
//Railway
callSetup('railway-call', 'railway-name', 'railway-number')
