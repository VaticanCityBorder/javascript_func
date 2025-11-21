/**
 * @typedef {{nemzet:string,iro1:string,mu1:string,iro2?:string,mu2?:string}[]} CountryWriters
 */

/**
 * Kitölti a JS-es táblázatot a megadott array alapján.
 * @param {} data
 */
function renderTable(data) {
    const tbody = document.getElementById("js-tbody");
    tbody.innerHTML = "";

    for (const elem of data) {
        renderTableRow(elem, tbody);
    }
}

/**
 * Létrehoz egy sort a megadott táblázatban a megadott array elem alapján.
 * @param {Object} elem
 * @param {HTMLElement} tbody 
 */
function renderTableRow(elem, tbody) {
    const tr = document.createElement("tr");

    const tdNemzet = CreateTableCell("td", elem.nemzet, tr);
    CreateTableCell("td", elem.iro1, tr);
    CreateTableCell("td", elem.mu1, tr);

    tbody.appendChild(tr);
    tdNemzet.addEventListener("click", (e) => {
    e.target.classList.add("marked");
    });

    // Ha van iro2 és mu2:

    if (elem.iro2 && elem.mu2) {
        const tr2 = document.createElement("tr");
        
        CreateTableCell("td", elem.iro2, tr2);
        CreateTableCell("td", elem.mu2, tr2);

        tbody.appendChild(tr2);
        tdNemzet.rowSpan = 2;
    }
}

/**
 * Létrehoz egy cellát a megadott típussal, a megadott szöveggel és beilleszti a megadott sorba.
 * @param {"th"|"td"} cellType
 * @param {string} cellContent
 * @param {HTMLTableRowElement} parentRow
 * @returns {HTMLTableCellElement}
 */
function CreateTableCell(cellType, cellContent, parentRow) {
    const cell = document.createElement(cellType);
    cell.innerText = cellContent;
    parentRow.appendChild(cell);

    return cell;
}

/**
 * Elkészíti a fejlécet a megadott adatokból és a megadott táblázathoz fűzi.
 * @param {HTMLTableElement} table 
 * @param {string[]} headerList 
 */
function generateHeader(table, headerList) {
    const headerRow = document.createElement("tr");

    for (const elem of headerList) {
        const headerCell = document.createElement("th");
        headerCell.innerText = elem;
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
}

/**
 * Csinál egy formot a megadott adatok alapján.
 * @param {*} formId 
 * @param {*} list 
 * @returns {}
 */
function createForm(formId, list) {
    const form = document.createElement("form");
    form.id = formId;

    document.body.appendChild(form);

    for (const item of list) {
        createField(form, item.id, item.label);
    }

    const btn = document.createElement("button");
    btn.type = "submit";
    btn.innerText = "Hozzáadás";

    form.appendChild(document.createElement("br"));
    form.appendChild(btn);

    return form;
}

/**
 * Létrehozza a táblázatot a megadott headerrel és a megadott id-val.
 * @param {string[]} headerArray A fejléc címei
 * @param {string} id A tbody id-ja
 */
function generateTable(headerArray, id) {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    tbody.id = id;

    document.body.appendChild(table);
    generateHeader(table, headerArray);
    table.appendChild(tbody);
}

/**
 * Létrehoz egy input field-et a megadott form-ba a megadott id-val és a megadott szöveggel.
 * @param {*} form 
 * @param {*} id 
 * @param {string} labelText 
 */
function createField(form, id, labelText) {
    const div = document.createElement("div");

    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = labelText;

    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.name = id;

    const span = document.createElement("span");
    span.classList.add("error");

    div.appendChild(label);
    div.appendChild(document.createElement("br"));
    div.appendChild(input);
    div.appendChild(document.createElement("br"));
    div.appendChild(span);

    form.appendChild(div);
}

function htmlEventListener(e) {
    e.preventDefault();

    const form = e.target;

    const nemzet = form.querySelector("#nemzet");
    const szerzo1 = form.querySelector("#szerzo1");
    const mu1 = form.querySelector("#mu1");
    const szerzo2 = form.querySelector("#szerzo2");
    const mu2 = form.querySelector("#mu2");

    if (validateFields(nemzet, szerzo1, mu1, "htmlform")) {

        const obj = {
            nemzet: nemzet.value,
            iro1: szerzo1.value,
            mu1: mu1.value,
            iro2: szerzo2.value !== "" ? szerzo2.value : undefined,
            mu2: mu2.value !== "" ? mu2.value : undefined
        };

        const jsTbody = document.getElementById("js-tbody");
        renderTableRow(jsTbody, obj);

        form.reset();
    }
}

/**
 * Validálja a három megadott inputot az id-val megadott formban.
 * @param {*} input1 
 * @param {*} input2 
 * @param {*} input3 
 * @param {*} formId 
 * @returns 
 */
function validateFields(input1, input2, input3, formId) {
    let ok = true;

    const form = document.getElementById(formId);

    const spans = form.querySelectorAll(".error");
    spans.forEach(s => s.innerText = "");

    if (!validateField(input1, "A mező kitöltése kötelező")) ok = false;
    if (!validateField(input2, "A mező kitöltése kötelező")) ok = false;
    if (!validateField(input3, "A mező kitöltése kötelező")) ok = false;

    return ok;
}

/**
 * Validál egy darab megadott inputot.
 * @param {*} input 
 * @param {*} msg 
 * @returns 
 */
function validateField(input, msg) {
    if (input.value.trim() == "") {
        const span = input.parentElement.querySelector(".error");
        span.innerText = msg;
        return false;
    }
    return true;
}
