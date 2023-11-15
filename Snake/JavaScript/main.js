                //ARRAYS
// let prices = [5, 10, 15, 20, 25];
// for(let i = 0; i < prices.length; i+=1){
//     console.log(prices[i])
// }
// for(let i of prices){
//     console.log(i);
// }
// for(let i = prices.length - 1; i >= 0; i-=1){
//     console.log(prices[i])
// }

                //SORT AN ARRAY OF STRINGS
// let fruits = ["vashli", "bali", "atami","marwkvi"];
// // fruits = fruits.sort(); 
// fruits = fruits.sort().reverse();
// for(fruit of fruits){
//     console.log(fruit)
// }

                //LOOP THROUGH THE ARRAYS 
// let fruits [2] = "coconut"   //ეს ცვლის მითითებულ ელემენტს ახლად მინიჭებული ელემენტით
// // fruits.push("lemon");      //ეს ამატებს ელემენტს მასივის ბოლოში
// // fruits.pop();              //ეს შლის ელემენტს მასივის ბოლოდან
// // fruits.unshift("banani"); //ეს ამატებს ელემენტს მასივის დასაწყისში
// // fruits.shift();           //ეს შლის ელემენტს მასივის დასაწყისიდან

// console.log(fruits);= ["vashli", "bali", "atami"];
//     // fruits

                //2D ARRAYS
// let fruits = ["bananas", "apples", "strawberries"];
// let vegetables = ["potatoes", "cucumber", "tyemali"];
// let meats = ["dzroxis", "cxvris", "mwvadi"];

// let groceryList = [fruits, vegetables, meats];

// for(let list of groceryList ){
//     for(let chamonatvali of list){
//         console.log(chamonatvali)
//     }
// }

                //SPREAD OPERATORS = ელემენტების ინდივიდებად გამოტანა
// let numbers = [1,2,3,4,5,6,7,8,9];   // ამ შემთხვევაში შეიქმნა მასივი რიცხვებისგან რომელთაგან 
//                                      //გამოვიტანე კონსოლში მაქსიმუმი ...numbers _ის საშუალებით
// let maximum = Math.max(...numbers);  //რომელიც შლის ელემენტების ერთობლიობას და აცალკევებს ერთმანეთისგან
// console.log(maximum);

// let class1 = ["giorgi", "gia", "gialo"];
// let class2 = ["natali", "nato", "natuka"];
// class1.push(...class2);
// console.log(...class1)

                //REST PARAMETERS = ეს გამოგვიტანს ჯამს
// let a = 1;
// let b = 2; 
// let c = 3;
// let d = 4;
// let e = 5;
// let x = 10;

// console.log(sum(a,b,c,d,e,x));

// function sum(...numbers){
//     let total = 0;
//     for (let number of numbers){
//         total +=number ;
//     }
    
//     return total;
// }

                //ARRAY.forEach() = ეს მასივის ელემენტებს აქცევს ინდივიდებად თანაც შეგიძლია მიანიჭო რაღაც ფუნქცია
// let students = ["heizenberg", "giorgi", "muxrani"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);  
// }

// function print(element){
//     console.log(element);
// }

                //filter() = ამ ობიექტით შეგვიძლია ელემენტები გამოვყოთ რაიმე სხვაობით
// let ages = [18, 19, 17, 20, 90];
// let adults = ages.filter(checkAge);
// adults.forEach(print);

// function checkAge(element){
//     return element >= 18
// }
// function print(element){
//     console.log(element);
// }

                //SORT AN ARRAY OF NUMBERS = ალაგებს ზრდის/კლებადობის მიხედვით
// let grades = [100, 50, 90, 60, 80, 70];
// grades = grades.sort(descendingSort);
// grades = grades.forEach(print);

// function descendingSort(x,y){
//     return y - x;
// }
// function ascendingSort(x,y){
//     return x - y
// }
// function print(element){
//     console.log(element)
// }

                //ARROW FUNCTION 
// let grades = [50, 60, 70, 80, 90, 100];

// grades.sort((x, y) => y - x);
// grades.forEach((element) => console.log(element))

                //MAP = ამით შეგვიძლია შევქმნათ მასივი ერთდროულად სტრინგებითაც და რიცხვებითაც
// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10],
//     ["underwear", 50]
// ]);

// let shoppingCart = 0;

// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("socks");
// console.log(`$${shoppingCart}`);

// store.get("t-shirt");
// store.set("hat", 40);
// store.delete("socks");
// console.log(store.has("jeans"))     //this will be true
// console.log(store.size)

// store.forEach((value,key) => console.log(`${key} $${value}`));


                //OBJECT = A group of properties and methods
// const car1 = {
//     model:"Mustang",
//     color:"Dark black",
//     year:1968,

//     drive : function(){
//         console.log("you drive the car");
//     },
//     brake : function(){
//         console.log("you step on the brakes");
//     }
// }
// const car2 = {
//     model:"corvette",
//     color:"blue",
//     year:2024,

//     drive : function(){
//         console.log("you drive the car");
//     },
//     brake : function(){
//         console.log("you step on the brakes");
//     }
// }


                //this = reference to a particular object the object depends on the immediate context
// this.name = "myLove";       //ეს დალოგე და ნახავ ყველაფერს რო გიწერს 

// console.log(this.name);


                //class
// class Player{
//     score = 0;

//     pause(){
//         console.log("you paused the game")
//     }
//     exit(){
//         console.log("you exited from game")
//     }
// }

// const player1 = new Player();

// player1.score += 1;

// console.log(player1.score);

// player1.pause();


                //constructor = a special method of a class,
                //              accepts arguments and assigns properties

// class Student{

// constructor(name,age,gpa){
//     this.name = name;
//     this.age = age;
//     this.gpa = gpa;
//     }
// study(){
//     console.log(`${this.name} is studying`);
// }
//                 }
// const student1 = new Student("spongebob",30,3.2);
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();


// SNAKE !!!!!!!!!!!!!!!!!!

const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "rgb(46, 46, 46)";
const snakeColor = "lightgreen";
const snakeBorder = "green";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();


function gameStart(){
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};
function nextTick(){
    if(running){
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 170);
    }
    else{
        displayGameOver();
    }
};
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};
function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum
    };
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);
};
function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake(){
    const head = {x: snake[0].x + xVelocity,
                  y: snake[0].y + yVelocity};

    snake.unshift(head);
    if(snake[0].x == foodX && snake[0].y == foodY){
        score += 1;
        scoreText.textContent = score;
        createFood();
    }else{
        snake.pop();
    }
};
function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
};
function changeDirection(event){
    const keyPressed = event.keyCode;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;
    const LEFT = 37;

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingRight = (xVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);

    switch(true){
        case(keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
        break;
        case(keyPressed == UP && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
        break;
        case(keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
        break;
        case(keyPressed == DOWN && !goingUp):
        xVelocity = 0;
        yVelocity = unitSize;
        break;
    }
};
function checkGameOver(){
    switch(true){
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
            running = false;
            break;
    }
    for(let i = 1; i < snake.length; i += 1){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }
};
function displayGameOver(){
    ctx.font = "50px MV Boli";
    ctx.fillStyle = "purple";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER",gameWidth / 2,gameHeight / 2)
    running = false;
};
function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0} 
    ];
    gameStart();
};
