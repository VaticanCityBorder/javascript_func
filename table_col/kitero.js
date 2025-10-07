// console.log("Lóg a konzol!");

// /**
//  * A világ legjobb száma
//  * @type {int}
//  */
// let number = 6;

// console.log(number + number);


// /**
//  * A világ legjobb listája
//  */
// const array = ["ő", "lő", "elő", "velő", "évelő", "névelő"];

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);    
// }

// for (const item of array) {
//     console.log(item)
// }

// for (const key in array) {
//     console.log(key + ":" + array[key]);
// }

// for (const key in array) {
// console.log(`${key}:${array[key]}`);
// }

// /**
//  * A világ legjobb objektuma
//  * @type {{firstName:string, lastName:string, age:int}}
//  */
// const object = {
//     firstName : "Abdul",
//     lastName : "Allah",
//     age : 75
// };

// for (const key in object) {
//     console.log(object[key]);
// }


// --------------------------------------------------------------------------------


/**
 * @type {{name:string,era:string,love:string,love2?:string}[]}
 */
const arr = [
    {
        name: 'Balassy Bálint',
        era: 'reformáció',
        love: 'Losonczy Anna',
        love2: 'Dobó Krisztina'
    },
    {
        name: 'Csokonai Vitéz Mihály',
        era: 'felvilágosodás',
        love: 'Vajda Juliána',
    },
    {
        name: 'Petőfi Sándor',
        era: 'magyar romantika',
        love: 'Mednyánszky Berta',
        love2: 'Szendrey Júlia'
    },
    {
        name: 'Ady Endre',
        era: '20. század',
        love: 'Léda',
        love2: 'Csinszka'
    }
];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

const trHead = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");

th1.innerText = "Szerző neve";
th2.innerText = "Korszak";
th3.innerText = "Szerelmek";
th3.colSpan = 2;

trHead.appendChild(th1);
trHead.appendChild(th2);
trHead.appendChild(th3);
thead.appendChild(trHead);

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

for (let i = 0; i < arr.length; i++) {
    const jelenlegiSor = arr[i];
    const tr = document.createElement("tr");

    const tdname = document.createElement("td");
    tdname.innerText = jelenlegiSor.name;
    tr.appendChild(tdname);

    const tdTime = document.createElement("td");
    tdTime.innerText = jelenlegiSor.era;
    tr.appendChild(tdTime);

    const tdLove = document.createElement("td");
    tdLove.innerText = jelenlegiSor.love;

    if (jelenlegiSor.love2 === undefined) {
        tdLove.colSpan = 2; 
        tr.appendChild(tdLove);
    } else {
        tr.appendChild(tdLove);
        
        const tdLove2 = document.createElement("td");
        tdLove2.innerText = jelenlegiSor.love2;
        tr.appendChild(tdLove2);
    }

    tbody.appendChild(tr);
}
