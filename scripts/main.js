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
                    <div class="card face-down">
                        <div class="card-inner">
                            <span class="content">A</span>
                        </div>
                    </div>
                </div>
            `);
        }
    }
    // DISPLAY: i # of cards
    for(let i = 0; i < 8; i++) {
        // $("#table").append(`<img class="card" id="${i}" src="images/card-back-red.png" alt="Playing card's back, red" />`)
    }

    // FUNCTION / DEBUG: click on card
    $(".card").click(function(){
        console.log(`You clicked on a card!`)
        console.log(this.id)
    })

})