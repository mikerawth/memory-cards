// temporary / for testing
const CONTENT = ["A", "B", "C", "D"];
const COLUMNS = 4;
// 

// make into function and call
function createContent() {
    let content = []
    for(c of CONTENT) {
        let i = 0;
        while (i < 2) {
            content.push(c);
            i++;
        }
    }
    return content;
}
//



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

function createCards(content) {
    let rowAmount = 2;
    let colAmount = 4;
    for(let r = 0; r < rowAmount; r++) {
        let rowId = `row-${r}`;
        $("#table").append(`
            <div id="${rowId}" class="row"></div>
        `);
        for(let c = 0; c < colAmount; c++) {
            let colId = `col-${c}`
            $(`#${rowId}`).append(`
                <div id="${colId}">
                    ${cardHtmlToString(content[c])}
                </div>
            `);
        }
    }
}



function displayCards(content, columns) {
    createCards(content);

}

$(document).ready(()=>{
    console.log("created with jQuery")
    displayCards(CONTENT, COLUMNS);
})