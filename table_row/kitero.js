/**
 * @type CountryWriters[]
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
tbody.id = "js-tbody";

const fejlecSzoveg = ["Nemzetiség", "Szerző", "Mű"];
generateHeader(table, fejlecSzoveg);

table.appendChild(tbody);
document.body.appendChild(table);

renderTable(arr);

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
    renderTable(arr);
});
