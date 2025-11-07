// const objektum = {}

// const szam = 13;

// if (szam > 5) {
//     objektum.name = "Abdul Allah";
// }
// else {
//     objektum["name"] = "Diddy";
// }

// console.log(objektum.name);


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

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const fejlecSor = document.createElement("tr");

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(fejlecSor);
table.appendChild(tbody);

const fejlecSzoveg = ["Nemzetiség", "Szerző", "Mű"];

for (const elem of fejlecSzoveg) {
    const th = document.createElement("th");
    th.innerText = elem;
    fejlecSor.appendChild(th);
}

for (const elem of arr) {
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

    tdNemzet.addEventListener("click",
        function (e) {
            const target1 = e.target;
            target1.classList.add("marked")
        }
    );

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

/**
 * @type {HTMLElement}
 */
const elem = document.getElementById("htmlform");
elem.addEventListener("submit",
    function (e) {
        e.preventDefault();
        const formTarget = e.target;

        /**
         * @type {HTMLInputElement}
         */
        const nemzetiseg = formTarget.querySelector("#nemzetiseg");
        /**
         * @type {string}
         */
        const nemzetisegValue = nemzetiseg.value;

        /**
         * @type {HTMLInputElement}
         */
        const szerzo1 = formTarget.querySelector("#szerzo1");
        /**
         * @type {string}
         */
        const szerzo1Value = szerzo1.value;

        /**
         * @type {HTMLInputElement}
         */
        const mu1 = formTarget.querySelector("#mu1");
        /**
         * @type {string}
         */
        const mu1Value = mu1.value;

        /**
         * @type {HTMLInputElement}
         */
        const szerzo2 = formTarget.querySelector("#szerzo2");
        /**
         * @type {string}
         */
        const szerzo2Value = szerzo2.value;

        /**
         * @type {HTMLInputElement}
         */
        const mu2 = formTarget.querySelector("#mu2");
        /**
         * @type {string}
         */
        const mu2Value = mu2.value;

        /**
         * @type {nemzet:string,iro1:string,mu1:string,iro2?:string,mu2?:string}
         */
        const obj = {}

        obj.nemzet = nemzetisegValue;
        obj.iro1 = szerzo1Value;
        obj.mu1 = mu1Value;
        obj.iro2 = szerzo2Value;
        obj.mu2 = mu2Value;

        const tbodyId = document.getElementById("tbody");

        const tr1 = document.createElement("tr");

        const tdNemzet = document.createElement("td");
        const tdIro1 = document.createElement("td");
        const tdMu1 = document.createElement("td");

        tdNemzet.innerText = obj.nemzet;
        tdIro1.innerText = obj.iro1;
        tdMu1.innerText = obj.mu1;

        tr1.appendChild(tdNemzet);
        tr1.appendChild(tdIro1);
        tr1.appendChild(tdMu1);
        tbodyId.appendChild(tr1);

        tdNemzet.addEventListener("click",
            function (e) {
                const target1 = e.target;
                target1.classList.add("marked")
            }
        );

        if (obj.iro2 && obj.mu2) {
            const tr2 = document.createElement("tr");
            const tdIro2 = document.createElement("td");
            const tdMu2 = document.createElement("td");

            tdIro2.innerText = obj.iro2;
            tdMu2.innerText = obj.mu2;

            tdNemzet.rowSpan = 2;

            tr2.appendChild(tdIro2);
            tr2.appendChild(tdMu2);
            tbodyId.appendChild(tr2);
        }

    }
)
