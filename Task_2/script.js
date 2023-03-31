
let divs = document.querySelectorAll('div');
for (let div of divs) { 
    if (div.textContent.includes('1') ||
    div.textContent.includes('2') ||
    div.textContent.includes('3')) 
      { div.style.color = 'red'
    }
    else {
        div.style.color = 'green'
    }
}
