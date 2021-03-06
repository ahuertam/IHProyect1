/*******************************************
ENEMY TANK 
*******************************************/

function TankIA(){
  this.direction = "up";
  this.lifes=1;
  this.position=[ // ITS AN ARRAY OF OBJECTS SO WE CAN STORE MORE THAN ONE POSITION
    {row:12,column:0},//Place1
    {row:12,column:18}//Place2
  ];

  }
TankIA.prototype.turnLeft=function(){
  switch (this.direction) {
    case "up":
      this.direction = 'left';
      break;
    case "left":
      this.direction = 'down';
      break;
    case "down":
      this.direction = 'right';
      break;
    case "right":
      this.direction = 'up';
      break;
  }
};
TankIA.prototype.turnRight=function(){
  switch (this.direction) {
    case "up":
      this.direction = 'right';
      break;
    case "left":
      this.direction = 'up';
      break;
    case "down":
      this.direction = 'left';
      break;
    case "right":
      this.direction = 'down';
      break;
  }
};
TankIA.prototype.moveForward=function(i){
  var initialPos=this.position[i];
    switch (this.direction) {
      case "up"://Move upper Row
          initialPos.row -=1;
        break;
      case "down"://move down Row
        initialPos.row +=1;
        break;
      case "left":
        initialPos.column -=1;
        break;
      case "right":
        initialPos.column +=1;
        break;
  }//swich
};
TankIA.prototype.moveBack=function(i){
  var initialPos=this.position[i];
    switch (this.direction) {
      case "up"://Move upper Row
          initialPos.row +=1;
        break;
      case "down"://move down Row
        initialPos.row -=1;
        break;
      case "left":
        initialPos.column +=1;
        break;
      case "right":
        initialPos.column -=1;
        break;
    }//swich

};

TankIA.prototype.pressFire=function(direction){
  //Generate a new bullet with the direction of the tank
  console.log("FIRING A BULLET direction: "+direction);
  var tank_position = JSON.parse(JSON.stringify(this.position));//THIS ELIMINATES THE OBJECT REFERENCE
  console.log('this position',this.position);
  var bullet =new Bullet(tank_position,direction);
  //setTimeout(function () {bullet.moveForward();},1000);
  bullet.moveForward();
  return(bullet);
};
//return this.position[player].row === object.row && this.position[i].column === object.column;
TankIA.prototype.pressFireT2=function(direction){
  //Generate a new bullet with the direction of the tank
  console.log("FIRING A BULLET direction: "+direction);
  var tank2_position = JSON.parse(JSON.stringify(this.position));//THIS ELIMINATES THE OBJECT REFERENCE
  console.log('this position',this.position);
  var bullet2 =new Bullet(tank2_position,direction);
  //setTimeout(function () {bullet.moveForward();},1000);
  bullet2.moveForwardT2();
  return(bullet2);
};

TankIA.prototype.collidesWith=function(player,object){
  return this.postion[player].some(function (element){
    return element.row === object.row &&
      element.column === object.column;
    });
};
TankIA.prototype.recieveShoot=function(){
  this.lifes-=1;
  if (this.lifes>0){
    console.log("LIFES LEFT: "+this.lifes);
    return false; //aun no muere
  }
  else{ return true;}
};
