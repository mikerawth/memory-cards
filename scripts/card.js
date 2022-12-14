class Card {
    constructor(value,face) {
        // value is used for comparing cards
        this.value = value;
        // face determines if a card is face-down or face-up on the board
        // stored as a BOOLEAN:
        // TRUE = face-up
        // FALSE = face-down
        this.face = face;
    }

    getValue() {
        return this.value;
    }

    getFace() {
        return this.face;
    }

    displayCard(face){
        if (face == True) {
            // display card face-up
        }
        else {
            // display card face-down
        }
    }
}