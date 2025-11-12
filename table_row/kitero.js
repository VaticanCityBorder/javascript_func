/**
 * @type {nemzet:string,iro1:string,mu1:string,iro2?:string,mu2?:string}
 */
const arr = [
    {
        nemzet: 'Orosz',
        iro1: 'Gogol',
        mu1: 'A köpönyeg',
        iro2: 'Csehov',
        mu2: 'A csinovnyik halála',
    },
    {
        nemzet: 'Cseh',
        iro1: 'Franz Kafka',
        mu1: 'Az átváltozás',
    },
    {
        nemzet: 'Magyar',
        iro1: 'Örkény István',
        mu1: 'Egyperces Novellák',
        iro2: 'József Attila',
        mu2: 'Klárisok',
    },
    {
        nemzet: 'Svájc',
        iro1: 'Friedrich Dürrenmatt',
        mu1: 'A fizikusok',
    }
];

const table2 = document.createElement("table");
const thead2 = document.createElement("thead");
const tbody2 = document.createElement("tbody");
tbody2.id = "js-tbody";

const fejlecSor2 = document.createElement("tr");
const fejlecSzoveg2 = ["Nemzetiség", "Szerző", "Mű"];

for (const elem of fejlecSzoveg2) {
    const th = document.createElement("th");
    th.innerText = elem;
    fejlecSor2.appendChild(th);
}

thead2.appendChild(fejlecSor2);
table2.appendChild(thead2);
table2.appendChild(tbody2);

document.body.appendChild(table2);

/**
 * Kitölti a JS-es táblázatot a megadott array alapján
 * @param {Array{nemzet:string, iro1:string, mu1:string, iro2?:string, mu2?:string}} data
 */
function renderTableBody(data) {
    const tbody = document.getElementById("js-tbody");
    tbody.innerHTML = "";

    for (const elem of data) {
        const tr1 = document.createElement("tr");

        const tdNemzet = document.createElement("td");
        const tdIro1 = document.createElement("td");
        const tdMu1 = document.createElement("td");

        tdNemzet.innerText = elem.nemzet;
        tdIro1.innerText = elem.iro1;
        tdMu1.innerText = elem.mu1;

        tr1.appendChild(tdNemzet);
        tr1.appendChild(tdIro1);
        tr1.appendChild(tdMu1);
        tbody.appendChild(tr1);

        tdNemzet.addEventListener("click", (e) => {
            e.target.classList.add("marked");
        });

        if (elem.iro2 && elem.mu2) {
            const tr2 = document.createElement("tr");
            const tdIro2 = document.createElement("td");
            const tdMu2 = document.createElement("td");

            tdIro2.innerText = elem.iro2;
            tdMu2.innerText = elem.mu2;

            tdNemzet.rowSpan = 2;

            tr2.appendChild(tdIro2);
            tr2.appendChild(tdMu2);
            tbody.appendChild(tr2);
        }
    }
}

renderTableBody(arr);

const form = document.getElementById("htmlform");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nemzetisegValue = form.querySelector("#nemzetiseg").value;
    const szerzo1Value = form.querySelector("#szerzo1").value;
    const mu1Value = form.querySelector("#mu1").value;
    const szerzo2Value = form.querySelector("#szerzo2").value;
    const mu2Value = form.querySelector("#mu2").value;

    const obj = {
        nemzet: nemzetisegValue,
        iro1: szerzo1Value,
        mu1: mu1Value,
    };

    if (szerzo2Value && mu2Value) {
        obj.iro2 = szerzo2Value;
        obj.mu2 = mu2Value;
    }

    arr.push(obj);
    renderTableBody(arr);
});
