class Board {
  constructor(/*no argumnets because each game will have the same amount of rows and columns, so we statically set*/) {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }


  /**
 * Generates 2D array of spaces.
 * @return  {Array}     An array of space objects
 */


 createSpaces(){
     const spaces = [];

     for (let x = 0; x < this.columns; x++){
       const column = []; /*will hold the Space objects for each column
       first column variable gets set to empty array, then we write another for loop to iterate over rows of t column*/

       for (let y = 0; y < this.rows; y++){ /*new Space objects are created*/
         const space = new Space(x, y); /*pass space constructor method values of the x and y index*/
         column.push(space); /*push newly created space to the column array, on each iteration through loop another apce is added to the column*/
      }

      spaces.push(column); /*push entire column into Spcaes array, then the x index is increased by 1 and the process continues*/
    }
     return spaces;
   }
 }
