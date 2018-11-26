let bandNumber = 1;

function bandOrder (bandName) {
    console.log(`${bandName} ${bandNumber}`);
    bandNumber = bandNumber + 1;
}

bandOrder ("Galactic Scum");