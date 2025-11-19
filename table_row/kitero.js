/**
 * A JS táblázathoz szükséges adatok.
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

/**
 * A JS táblázathoz szükséges adatok.
 * @type {}
 */
const globalObj = {
    tableHeaders: ["Nemzetiség", "Szerző", "Mű"],
    formFields: [
        { id: "nemzet", label: "Nemzetiség" },
        { id: "szerzo1", label: "Szerző" },
        { id: "mu1", label: "Mű" },
        { id: "szerzo2", label: "Másik szerző" },
        { id: "mu2", label: "Mű" }
    ]
};

// JS táblázat
generateTable(globalObj.tableHeaders, "js-tbody");
renderTable(arr);

// HTML form
const htmlForm = document.getElementById("htmlform");
htmlForm.addEventListener("submit", htmlEventListener);

// JS form
const jsForm = createForm("js_form", globalObj.formFields);
document.body.appendChild(jsForm);

jsForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;

    const nemzet = form.querySelector("#nemzet");
    const szerzo1 = form.querySelector("#szerzo1");
    const mu1 = form.querySelector("#mu1");
    const szerzo2 = form.querySelector("#szerzo2");
    const mu2 = form.querySelector("#mu2");

    if (validateFields(nemzet, szerzo1, mu1, "js_form")) {

        const obj = {
            nemzet: nemzet.value,
            iro1: szerzo1.value,
            mu1: mu1.value,
            iro2: szerzo2.value !== "" ? szerzo2.value : undefined,
            mu2: mu2.value !== "" ? mu2.value : undefined
        };

        arr.push(obj);
        renderTable(arr);
        jsForm.reset();
    }
});
