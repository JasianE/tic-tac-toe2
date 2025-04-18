/** 
Creates the gameboard object that will be used in main.js for the logic of the game, includes the tile object as well

@return gameboard object with methods for logic
*/
function gameboard(){
    /**
     * Factory function that creates a tile object for populating the gameboard
     * 
     * @param {row} - The row that the tile is in
     * @param {column} - The column that the tile is in
     * 
     * @returns {typeOfCheck} - whether the value is an X or an O or empty
     * @returns {changeCheck} - method that changes the checked type and indicates that the tile has already been checked
     * @returns {location} - array that indicates the row in index 0, and column in index 1
     */
    function tileCreator(row, column, key){ //create a constructor for the tiles that will populate the gameboard
        let typeOfCheck = 'empty';
        let location = [row,column]
        function changeCheck(type){ //input will be either "cross" or "circle" type and will populate the gameboard
            typeOfCheck=type;
        }
        function getCheck(){
            return typeOfCheck;
        }
        function getLocation(){
            return location;
        }
        return(
            {
                getCheck,
                changeCheck,
                getLocation,
                key
            }
        )
    }
    //IIFE that creates a gameboard object that will be returned
    let gameboard = (() => { //iife thats creates a gameboard object instantly
        let board =[[], [], []] //this will be a 3x3 matrix
        let counter = 0;
        for(let i = 0; i< 3; i++){
            for(let j =0; j<3; j++){
                board[i][j] = tileCreator(i, j, counter) //populates the board with tiles
                counter++;
            }
        }
        return board
    })()

    return gameboard
}

export default gameboard;