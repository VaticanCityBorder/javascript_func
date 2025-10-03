/**
 * @type {{theme:string,time:string,scientist1:string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table = document.createElement("table");
const thead = document.createElement("thead");
const th = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const tr = document.createElement("tr");
const td = document.createElement("td");
const tbody = document.createElement("tbody");

/* Táblázat */
document.body.appendChild(table);

/* Fejléc */
table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th);
tr.appendChild(th2);
tr.appendChild(th3);

th.innerText = "Fizika területe";
th2.innerText = "Időszak";
th3.innerText = "Képviselők";

/* Táblázat */
table.appendChild(tbody);

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
}
