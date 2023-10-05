const toggles = document.querySelectorAll('.toggle')
const bom = document.querySelector('#bom')
const cheap = document.querySelector('#barato')
const fast = document.querySelector('#rapido')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(bom.checked && cheap.checked && fast.checked) {
        if(bom === theClickedOne) {
            fast.checked = false
        }

        if(cheap === theClickedOne) {
            bom.checked = false
        }

        if(fast === theClickedOne) {
            cheap.checked = false
        }
    }
}