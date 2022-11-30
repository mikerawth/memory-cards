// temporary / for testing
const CONTENT = ["A", "B", "C", "D"];
// 

// var we use to duplicate values and add to #table
let content = []
// 

// make into function and call
for(c of CONTENT) {
    let i = 0;
    while (i < 2) {
        content.push(c);
        i++;
    }
}
console.log(content);
//

// CREATE way of putting content into created cards from cardHtmlToString

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

$(document).ready(()=>{
    console.log("created with jQuery")
    

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
                    ${cardHtmlToString("A")}
                </div>
            `);
        }
    }


    // FUNCTION / DEBUG: click on card
    $(".card").click(function(){
        console.log(`You clicked on a card!`)
        console.log(this.id)
    })

})