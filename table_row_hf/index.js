/**
 * @type {war:string,team1:string,team1Size:number,team2:string,team2Size:number}
 */
const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const tr = document.createElement("tr");

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);
table.appendChild(tbody);

const fejlecSzoveg = ["Harc megnevezése", "Szembenálló felek", "Haderő"]

for (const elem of fejlecSzoveg) {
    const th = document.createElement("th");
    th.innerText = elem;
    tr.appendChild(th);
}

for (let i = 0; i < arr.length; i++) {
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const tr = document.createElement("tr");

    tbody.appendChild(tr);

    td1.innerText = arr[i].war;
    td2.innerText = arr[i].team1;
    td3.innerText = arr[i].team1Size;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    // if (elem.team2 && elem.team2Size) {
    //     const tr = document.createElement("tr");

    // }
}
