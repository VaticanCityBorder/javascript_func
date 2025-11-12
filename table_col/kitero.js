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

createCell("th", "Szerző neve", trHead);
createCell("th", "Korszak", trHead);
const cella = createCell("th", "Szerelmek", trHead);
cella.colSpan = 2;

thead.appendChild(trHead);

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

for (let i = 0; i < arr.length; i++) {
    const jelenlegiSor = arr[i];
    const tr = document.createElement("tr");

    createCell("td", jelenlegiSor.name, tr)
    createCell("td", jelenlegiSor.era, tr);

    const tdLove = document.createElement("td");
    tdLove.innerText = jelenlegiSor.love;

    if (jelenlegiSor.love2 === undefined) {
        tdLove.colSpan = 2; 
        tr.appendChild(tdLove);
    } else {
        tr.appendChild(tdLove);
        
        createCell("td", jelenlegiSor.love2, tr)
    }

    tbody.appendChild(tr);
}

/**
 * Hozzáad egy cellát egy adott sorhoz.
 * @param {string} cellType Lehet `"th"` vagy `"td"`.
 * @param {string} cellContent A cella szöveges tartalma.
 * @param {HTMLTableRowElement} parentRow A sor amihez hozzáadjuk.
 * @returns {HTMLTableCellElement}
 */
function createCell(cellType, cellContent, parentRow) {
    const cell = document.createElement(cellType);
    cell.innerText = cellContent;
    parentRow.appendChild(cell);
    return cell;
};

const form = document.createElement("form");
form.id = "form_js";

const h2 = document.createElement("h2");
h2.innerText = "Javascript űrlap";
form.appendChild(h2);

function createInput(labelText, inputId) {
    const label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.innerText = labelText;

    const input = document.createElement("input");
    input.type = "text";
    input.id = inputId;
    input.name = inputId;

    form.appendChild(label);
    form.appendChild(document.createElement("br"));
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
}

createInput("Költő neve:", "kolto_nev");
createInput("Korszak:", "korszak");
createInput("Szerelme:", "szerelem1");
createInput("Szerelme:", "szerelem2");

const button = document.createElement("button");
button.innerText = "Hozzáadás";
form.appendChild(button);

document.body.appendChild(form);
