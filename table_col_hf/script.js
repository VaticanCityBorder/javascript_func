/**
 * @type {{theme:string,time:string,scientist1:string,scientist2?:string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. század',
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
];

// Táblázat létrehozása
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Fejléc
const trHead = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");

th1.innerText = "Fizika területe";
th2.innerText = "Időszak";
th3.innerText = "Képviselők";
th3.colSpan = 2;

trHead.appendChild(th1);
trHead.appendChild(th2);
trHead.appendChild(th3);
thead.appendChild(trHead);

// Összerakjuk a táblázatot
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

// Létrehozzuk a sorokat az arr alapján
for (let i = 0; i < arr.length; i++) {
    const jelenlegiSor = arr[i];
    const tr = document.createElement("tr");

    // Első cella
    const tdTheme = document.createElement("td");
    tdTheme.innerText = jelenlegiSor.theme;
    tr.appendChild(tdTheme);

    // Második cella (az előző blokk copy-paste-elve)
    const tdTime = document.createElement("td");
    tdTime.innerText = jelenlegiSor.time;
    tr.appendChild(tdTime);

    // Harmdaik cella
    const tdScientist1 = document.createElement("td");
    tdScientist1.innerText = jelenlegiSor.scientist1;

    // Nincs scientist2 → colSpan = 2
    if (jelenlegiSor.scientist2 === undefined) {
        tdScientist1.colSpan = 2; 
        tr.appendChild(tdScientist1);
    } else {
        tr.appendChild(tdScientist1);

        // Ha van scientist akkor nyilván kell mégegy cella
        const tdScientist2 = document.createElement("td");
        tdScientist2.innerText = jelenlegiSor.scientist2;
        tr.appendChild(tdScientist2);
    }

    // Hozzáadjuk a létrehozott sort
    tbody.appendChild(tr);
}
