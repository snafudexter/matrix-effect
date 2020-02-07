const TILE_SIZE = 20;
const TRAIL = 25;
const DIV = 1 / TRAIL
const particles = [];
function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    const particlesLength = Math.min(Math.floor(window.innerWidth / 1), 100);
    frameRate(12)
    for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(10);

    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });
}

class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(0, random(0, 1));
        this.trail = []
    }

    update() {

        this.pos.y += this.vel.y * TILE_SIZE
        if (this.pos.y >= window.innerHeight) {
            this.pos = createVector(random(width), 0);
        }
        this.trail.push({
            char: String.fromCharCode(parseInt(random(33, 126))),
            pos: { ...this.pos },
        })
        var max = random(2, TRAIL)
        if (this.trail.length > max)
            this.trail.splice(0, 1)
    }

    draw() {
        noStroke();

        textStyle(BOLD);
        textSize(this.vel.y * TILE_SIZE)

        for (var i = 0; i < this.trail.length; i++) {
            let cParticle = this.trail[i]
            let alpha = ((DIV * i) * 255)
            
            fill(color(50, (255), 50, alpha))
            if (i == this.trail.length - 1) {
                fill(`rgba(200, 255, 200, ${alpha})`);
            }
            text(cParticle.char, cParticle.pos.x, cParticle.pos.y)
        }
    }
}