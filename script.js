const heartCount = document.getElementById('heart-count');
const heartButtons = document.getElementsByClassName('heart-button');
let count = 0;
for(const btn of heartButtons)
{
    btn.addEventListener('click',function(){
        count++;
        heartCount.innerText = count;
    })
}