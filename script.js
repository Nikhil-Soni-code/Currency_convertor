const select = document.querySelectorAll('select')
const button = document.querySelector("button")
const display = document.querySelector("#msg")

for(let input of select){
    for (let i in countryList) {
        const option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        input.appendChild(option);
    }
}
for(let input of select){
    input.addEventListener("change",function(e){
        const code = e.target.value
        const newsrc = `https://flagsapi.com/${countryList[code]}/flat/64.png`
        const img = input.parentElement.querySelector("img")
        img.src = newsrc;
    })
}
button.addEventListener("click",async function(e){
    const input = document.getElementById('input');
    const value = input.value
    if(value==''||value<0){
        input.value = 100;
        value = 100
    }
    const from = document.getElementById("from").value
    const to = document.getElementById("to").value
    const url = `https://v6.exchangerate-api.com/v6/6cf696a0b35aa3d12aeafb95/latest/${from}`
    const response = await fetch(url);
    const data = await response.json();
    const rate = data.conversion_rates[to]
    display.innerHTML = `${value} ${from} = ${value*rate} ${to} `;
    console.log(rate)
})