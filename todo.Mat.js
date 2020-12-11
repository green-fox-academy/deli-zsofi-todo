import minimist from 'minimist';

//minimist egy függvény aminek a process.argv-t kell átadni
const args = minimist( process.argv );

console.log( process.argv.slice(2) );
console.log( args);

/*
Milyen fájlok kellenek?
- minden feature külön fájlban 
- .txt fájl, amiben tároljuk az adatokat, a todokat

Milyen function-ok kellenek?
- kiírja a lista tartalmát
- hozzáad a listához
- töröl a listáról
- feladat teljesítése, pipa
- argumentum ellenőrző => index.js-ben? -onnan hívja meg a feature-okat
  - - l:kiírés
  - -
* hibakezelés

Classook
- Todo: csinálja a szövegeket
- Todos: lista, ami tartalmazza a todokat

példa: Fleet of Thing
*/

class Todo {

    content; //szöveg
    status; //kész van vagy nincs;
}

class Todos {

    list ; //egy tömbben tartalmazza a todo-kat
    
    // ezek a metódusok tuti kellennek
    getStatus(todo) {};
    setStatus(index) {};
    add(/*új todo példány*/) {};
    delete(/* index alapján */) {};
}

const todoList = new Todos();
//létre kell hoznom új todokat
// -manuálisan is

//fájlból be kell tölteni az adatokat
//'fs' modul
//fájlkezelés => hibakezelés is

//fájl todo-it hozzá kell adni a listához

//ha -l akkor listázza ki
//=> végig kell mennünk a listánkon és minden egyes elemet kiiratni
// forEach.csel
// sorszámot adni
// vagy printList() vagy console.log( getList())????

//message.eket kirakni külön fájlba
// kapcsoló nélkül meghívott fájlnál a hosszú szöveget külön fájlba rakjuk és úgy iratjuk ki
