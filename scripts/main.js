// temporary / for testing
const DATA = ["A", "B", "C", "D"];
const COLUMNS = 4;


// credit to this code is from: 
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}


// takes in the data being used for the card values
// duplicates each values
// and then randomizes the order through shuffle()
function createContent(data) {
    let content = []
    for(c of data) {
        content.push(c);
        content.push(c);
    }
    content = shuffle(content);
    // DEBUG:
    console.log(`content after shuffle()\n ${content}`)
    return content;
}

// function for all of the html of the card
// check style.css for information
// the classes card, face-down, face-up and content 
//   are all being used
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

// # of columns should be consistent
// # of rows will depend upon the amount of content
function getRows(content, columns) {
    return Math.ceil(content.length / columns);
}

// create a map of cards to be used for displayCards()
// return map of each card's value and their indexed value
function createCardMap(content) {
    let map = new Map();
    for (let c = 0; c < content.length; c++) {
        map.set(c, content[c]);
    }
    return map;
}

// will display all of the cards on the table
function displayCards(content, columns, rows) {
    let contentIndex = 0;
    for(let r = 0; r < rows; r++) {
        let rowId = `row-${r}`;
        $("#table").append(`
            <div id="${rowId}" class="row"></div>
        `);
        for(let c = 0; c < columns; c++) {
            let rowcolId = `${rowId}-col-${c}`;
            $(`#${rowId}`).append(`
                <div id="${rowcolId}">
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
        // DEBUG:
        // console.log(this);
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
    let cardMap = createCardMap(content);
    displayCards(content, columns, rows);
    onCardClickEventHandler();
}

$(document).ready(()=>{
    console.log("created with jQuery")
    runGame(DATA, COLUMNS);
})