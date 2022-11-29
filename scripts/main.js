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