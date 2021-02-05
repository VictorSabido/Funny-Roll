const characters = {
    "Garnet": "#2050e5",
    "Drakal": "#2050e5",
    "Raaka": "#8eb360",
    "Lastwisp": "#b01c35",
    "Bayio": "#8eb360",
    "Kosta": "#5eb7d8",
    "Durnack": "#8eb360",
    "Sormagik": "#288b6c",
    "Shiro": "#288b6c",
    "Miniaso": "#e5e5e5",
    "Idrayx": "#8777b6",
    "Antapex": "#5eb7d8",
    "Rektum": "#e5e5e5",
    "Kore": "#e7720b",
    "Minitito": "#8eb360",
    "Enrish": "#942db6",
}

const lottery = [];

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const fillTable = (shuffledChars) => {
    console.log(characters);
    
    let delay = 1;
    shuffledChars.forEach( (pj) => {
        let tr_1 = document.getElementsByClassName("row-1")[0]
        let tr_2 = document.getElementsByClassName("row-2")[0]

        let color = characters[pj];
        
        if(document.querySelector(".row-1").childElementCount > document.querySelector(".row-2").childElementCount) {
            tr_2 = tr_2.insertCell(-1);
            td = tr_2
            
        } else {
            tr_1 = tr_1.insertCell(-1);
            td = tr_1
        }

        td.innerHTML = pj;
        td.style.backgroundColor = color;
        td.classList.add('animate__animated', 'animate__backInUp', 'animate__delay-'+delay+'s')
        delay++
    })
}

const clearTable = () => {
    var node = document.querySelectorAll("td");
    console.log(node);
    node.forEach((e) => {
        e.remove()
    })
}

document.getElementById('roll').addEventListener("click", function() {
    clearTable();
    shuffledChars = shuffle(Object.keys(characters))
    fillTable(shuffledChars)
});

document.getElementById('remove').addEventListener("click", function() {
    clearTable();
});



