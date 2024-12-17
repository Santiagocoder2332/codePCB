function updateResistorColors() {
    const colorMap = {
        "brown-black-red-gold": ["brown", "black", "red", "gold"],
        "red-black-orange-gold": ["red", "black", "orange", "gold"],
        "yellow-violet-brown-gold": ["yellow", "violet", "brown", "gold"],
    };

    const value = document.getElementById("resistor-value").value;
    const bands = colorMap[value];

    // Actualiza los colores de las bandas
    document.getElementById("band1").style.backgroundColor = bands[0];
    document.getElementById("band2").style.backgroundColor = bands[1];
    document.getElementById("band3").style.backgroundColor = bands[2];
    document.getElementById("band4").style.backgroundColor = bands[3];
}
