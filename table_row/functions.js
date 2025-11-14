/**
 * @typedef {{nemzet:string,iro1:string,mu1:string,iro2?:string,mu2?:string}[]} CountryWriters
 */

/**
 * Kitölti a JS-es táblázatot a megadott array alapján
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
 * I don't even know at this point...
 * @param {Event} e 
 */
function htmlEventListener(e) {
    // Ide kéne a kód.
}
