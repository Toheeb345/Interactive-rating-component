const keys = document.querySelectorAll(".rate");
const output = document.querySelector(".output")
const btn = document.querySelector(".btn")
const back = document.querySelector(".back")
const result = document.querySelector(".result")
const rating = document.querySelector(".rating")

// --------using a for-loop-------- //
for( let key of keys){
    const value = key.dataset.key 

    key.addEventListener('click', () => {
        // key.style.backgroundColor = '#fb7413';
        key.classList.toggle('active')
        output.innerHTML = `You selected ${value} out of 5`;
        setInterval(() => {
        key.classList.remove('active')
        },3000)
    })
}


// ------navigating between RATING and RESULT------- //
btn.addEventListener("click", () => {
    result.classList.remove('hidden');
    rating.classList.add('hidden');
})
back.addEventListener("click", () => {
    result.classList.add('hidden');
    rating.classList.remove('hidden');
})
