let status = " ";

function mazeRunner(maze, directions) {
  // Code here
  let start = [];
  //searching for i and j 
  for(let i = 0; i < maze.length; i++) {
    for(let j = 0; j < maze.length; j++) {
        if(maze[i][j] === 2){
          start.push(i,j);
        }
    }
  }
   //calling the function
   mazeAWay(start[0],start[1], maze, directions, 0);
   return status
}


    function mazeAWay( i, j, maze, directions , dirIndex) {
        if(i < 0 || i >= maze.length || j < 0 || j >= maze[i].length || maze[i][j] === 1) {
          return status = "Dead";
        }
        if(dirIndex >= directions.length && maze[i][j] != 3 ) {
          return status = "Lost";
        }
        if(maze[i][j] === 3) {
            return  status = "Finish";
        }
        if(directions[dirIndex] === "N") {
          mazeAWay(i-1 , j, maze, directions, dirIndex+1);
        }
        if(directions[dirIndex] === "S") {
          mazeAWay(i+1 , j, maze, directions, dirIndex+1);
        }
        if(directions[dirIndex] === "E") {
           mazeAWay(i, j+1, maze, directions, dirIndex+1);
        }
        if(directions[dirIndex] === "W") {
          mazeAWay(i , j-1, maze, directions, dirIndex+1);
        }
  }


console.log(mazeRunner([[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]]
            , ["N","N","N","N","N","E","E","E","E","E"]));

