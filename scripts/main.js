// temporary / for testing
const DATA = ["A", "B", "C", "D"];
const COLUMNS = 4;
// 

function createContent(data) {
    let content = []
    for(c of data) {
        let i = 0;
        while (i < 2) {
            content.push(c);
            i++;
        }
    }
    return content;
}

function cardHtmlToString(contentString) {
    cardHtml = 
    `
        <div class="card face-down">
            <div class="card-inner">
                <span class="content">${contentString}</span>
            </div>
        </div>
    `;
    return cardHtml;
}

function getRows(content, columns) {
    return Math.ceil(content.length / columns);
}

function displayCards(content, columns, rows) {
    for(let r = 0; r < rows; r++) {
        let rowId = `row-${r}`;
        $("#table").append(`
            <div id="${rowId}" class="row"></div>
        `);
        for(let c = 0; c < columns; c++) {
            let colId = `col-${c}`
            $(`#${rowId}`).append(`
                <div id="${colId}">
                    ${cardHtmlToString(content[c])}
                </div>
            `);
        }
    }
}

function runGame(data, columns) {
    let content = createContent(data)
    let rows = getRows(content, columns);
    displayCards(content, columns, rows)

}

$(document).ready(()=>{
    console.log("created with jQuery")
    runGame(DATA, COLUMNS);
})