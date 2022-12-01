// temporary / for testing
const DATA = ["A", "B", "C", "D"];
const COLUMNS = 4;
// 

function createContent(data) {
    let content = []
    for(c of data) {
        content.push(c);
        content.push(c);
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
    let contentIndex = 0;
    for(let r = 0; r < rows; r++) {
        let rowId = `row-${r}`;
        $("#table").append(`
            <div id="${rowId}" class="row"></div>
        `);
        for(let c = 0; c < columns; c++) {
            let colId = `col-${c}`;
            $(`#${rowId}`).append(`
                <div id="${colId}">
                    ${cardHtmlToString(content[contentIndex])}
                </div>
            `);
            contentIndex++;
        }
    }
}

function flipCardToFaceUp(card) {
    $(card).removeClass("face-down");
    $(card).addClass("face-up");
}

function flipCardToFaceDown(card) {
    $(card).removeClass("face-up");
    $(card).addClass("face-down");
}

function onCardClickEventHandler() {
    $(".card").click(function () { 
        if ($(this).hasClass("face-down"))
            flipCardToFaceUp(this);
        else
            flipCardToFaceDown(this);
    });
}

function runGame(data, columns) {
    let content = createContent(data);
    // DEBUG:
    // console.log(content);
    let rows = getRows(content, columns);
    displayCards(content, columns, rows);
    onCardClickEventHandler();
}

$(document).ready(()=>{
    console.log("created with jQuery")
    runGame(DATA, COLUMNS);
})