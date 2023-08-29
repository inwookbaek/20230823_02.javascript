function ex_random(number) {
    return Math.floor(Math.random() * 255);
}

function ex_bgChange() {
    const sampleColor = 'rgb(' + ex_random(255)+ ',' + ex_random(255) + ',' + ex_random(255)+ ')';
    document.body.style.backgroundColor = sampleColor;
}   