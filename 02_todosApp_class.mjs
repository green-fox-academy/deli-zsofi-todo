import minimist from 'minimist';
import fs from 'fs';
import { TodoElement } from './01_todoElement_class.mjs';

const args = minimist( process.argv.slice(2) );

export class TodosApp {
  todoElementArray = [];


// argumentum nélkül megjeleníti a használatot
    withInvalidArgument() {
      if(args._.length > 0 || !Object.keys( args ).every( arg => ['_', 'l', 'a', 'r', 'c'].includes(arg) ) ) {
        console.log('invalid option');
      }    
    }

// argumentum nélkül megjeleníti a használatot
    withoutArgument() {
      if(Object.keys( args ).length === 1  && args._.length === 0 ) {
        console.log( 
          `Parancssori Todo applikáció
          =============================
          
          Parancssori argumentumok:
              -l   Kilistázza a feladatokat
              -a   Új feladatot ad hozzá
              -r   Eltávolít egy feladatot
              -c   Teljesít egy feladatot`) 
      }
    };

// -a argumentummal új todot add hozzá a todoList.txt-fájlomba és a todoElementArray tömbbe
    addNewTodo( ) { 
      if(typeof args.a === 'string' ) {
        fs.appendFileSync('./todoList.txt', `${ args.a } \n`);
        this.todoElementArray.push(new TodoElement( this.todoElementArray.length + 1 , false , args.a ) )
        console.log(this.todoElementArray)
      } else if(typeof args.a !== 'string' && args.a !==undefined) {
        console.log( 'Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!')
      };
    };

// -l argumentummal kiírja az összes tennivalót a státusszal együtt
    listingTodos() {
      if( args.l ) {
        if(this.todoElementArray.length === 0) {
          console.log('Nincs mára tennivalód! :) ')
        } else (
        this.todoElementArray.forEach(element => {
          console.log( element.listing() )
          })
         );
      }
    };

// -r 2 argumentummal Tennivalo eltavolitasa, 
// Hibakezelés 1 nincs szám akkor kiírja...
// Hibakezelés 2 túlindexelés  akkor kiírja...
// Hibakezelés 1 nincs szám akkor kiírja...

    removeTodoElement() {
      if( typeof args.r === 'number') {
        if( todoElementArray.length <  args.r  ){
          console.log( 'Nem lehetséges az eltávolítás: túlindexelési probléma adódott!')
        } else(
        todoElementArray.splice( Number(args.r) - 1 , 1) //kitöröl a todoElementArray tömbből, egy számmá alakított indexű elemet, 1-et töröl ki
        )
      } else if( typeof args.r === 'string') { 
        console.log( 'Nem lehetséges az eltávolítás: a megadott index nem szám!')
      } 
       else if( args.r ) {
        console.log( `Nem lehetséges az eltávolítás: nem adott meg indexet! `)
      }
    }
// -c 2 argumentummal Tennivalo elvégzése
    getStatus() {
      if( typeof args.c === 'number') {
        if( this.todoElementArray.length <  args.c ) {
          console.log( 'Nem lehetséges az eltávolítás: túlindexelési probléma adódott!')
        } else {
          this.todoElementArray[args.c - 1].status = true;
        }
      } else if( typeof args.c === 'string') {
        console.log( `Nem lehetséges a feladat végrehajtása: a megadott index nem szám`)
      } else if( args.c ) {
        console.log( `Nem lehetséges a feladat végrehajtása: nem adtál meg indexet`)
      }

    }
}


let Todo1 = new TodosApp();
Todo1.withInvalidArgument()
Todo1.withoutArgument();
Todo1.addNewTodo();
Todo1.listingTodos();
Todo1.getStatus();

