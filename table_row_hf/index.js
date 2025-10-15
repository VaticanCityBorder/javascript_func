/**
 * @type {war:string,team1:string,team1Size:number,team2?:string,team2Size?:number}
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
        team1: 'Angolok (York + Lancaster)',
        team1Size: '15.000',
    }
];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const headerRow = document.createElement("tr");

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(headerRow);
table.appendChild(tbody);

const fejlecSzoveg = ["Harc megnevezése", "Szembenálló felek", "Haderő"];

for (const elem of fejlecSzoveg) {
    const th = document.createElement("th");
    th.innerText = elem;
    headerRow.appendChild(th);
}

for (const elem of arr) {
    const tr1 = document.createElement("tr");

    const tdWar = document.createElement("td");
    const tdTeam1 = document.createElement("td");
    const tdTeam1Size = document.createElement("td");

    tdWar.innerText = elem.war;
    tdTeam1.innerText = elem.team1;
    tdTeam1Size.innerText = elem.team1Size;

    tr1.appendChild(tdWar);
    tr1.appendChild(tdTeam1);
    tr1.appendChild(tdTeam1Size);
    tbody.appendChild(tr1);

    if (elem.team2 && elem.team2Size) {
        const tr2 = document.createElement("tr");
        const tdTeam2 = document.createElement("td");
        const tdTeam2Size = document.createElement("td");

        tdTeam2.innerText = elem.team2;
        tdTeam2Size.innerText = elem.team2Size;

        tdWar.rowSpan = 2;

        tr2.appendChild(tdTeam2);
        tr2.appendChild(tdTeam2Size);
        tbody.appendChild(tr2);
    }
}