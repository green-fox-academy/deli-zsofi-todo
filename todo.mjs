import minimist from 'minimist';

//Fájlkezelés
//létrehozás
//olvasás
//írás


const args = minimist( process.argv)

if(args.l) {
    console.log("Kilistázza a feladatokat")
} else if(args.a ) {
    console.log(`Új feladatot ad hozzá.`)
} else if(args.r === 'almafa') {
    console.log("locsol")
}else if(args.c === 'almafa') {
    console.log("locsol")
} else {
    console.log(`
    Parancssori Todo applikáció
    =============================
    
    Parancssori argumentumok:
        -l   Kilistázza a feladatokat
        -a   Új feladatot ad hozzá
        -r   Eltávolít egy feladatot
        -c   Teljesít egy feladatot
        `)
}
