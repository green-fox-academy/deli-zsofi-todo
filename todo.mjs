import minimist from 'minimist';
import fs from 'fs';



if(typeof args.r === 'numebr') {
    console.log( `Remove ${ arg.r}. todo`)
}
else if ( args.l === true) {
    console.log( 'List Todos')
}

/*
Miylen fájlok kellennek?
- minden feature külön fájlbba
- .txt fésjl, amiben tároljuk az adatot, a todokat
- táblázatot txt
    1 Kutyát sétáltatni    true
    2 ...                   false
- .cvs
*/
// ha -a hozzáad
// todoList.add
// a

const args = minimist( process.argv);

if(args.l) {
    try {
        console.log( fs.readFileSync('./todoList.txt').toString() );
    }
    catch( err ) {
        console.log( 'FILE ERROR: ', 'Unable to read file: todoList.txt' );
    
    }
} else if(args.a ) {
    console.log(`Új feladatot ad hozzá.`)
} else if(args.r ) {
    console.log(`Eltávolít egy feladatot.`)
} else if(args.c ) {
    console.log(`Teljesít egy feladatot.`)
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
