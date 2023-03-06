/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 100;
const enemiesArray = [];


class Enemy{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 100;
        this.height = 100;
    }
    update(){
        this.x++;
        this.y++;
    }
    draw(){
        ctx.fillRect(this.x,this.y,this.width, this.height);
    }
};
for(let i = 0; i < numberOfEnemies; i++){
    enemiesArray.push(new Enemy());
}
console.log(enemiesArray);
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // enemy1.update();
    // enemy1.draw();
    requestAnimationFrame(animate);
}

animate();