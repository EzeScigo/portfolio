import React from 'react';
import ParticlesBg from 'particles-bg';

const Particles = ({ positionX, positionY, direction }) => {
  // Position must be like {x:-100,y:300,width:100,height:100}
  // force direction must be an array [x, y]
  console.log({x:positionX,y:positionY,width:100,height:100});
  let config = {
    num: [20, 40],
    rps: 0.1,
    radius: [1, 1.8],
    life: [50, 100],
    v: [0.05, 0.1],
    tha: [40, 40],
      // body: "./img/icon.png", // Whether to render pictures
    rotate: [19, 20],
    alpha: [10, 10],
    scale: [1, 2],
    position: {x:positionX,y:positionY,width:100,height:100}, // all or center or {x:1,y:1,width:100,height:100}
    color: ["random"],
    cross: "dead", // cross or bround
    random: 5,  // or null,
    g: 0,    // gravity
    f: direction, // force
    onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.arc(particle.p.x, particle.p.y, particle.radius * 1, particle.radius * 1, particle.radius * Math.PI);
        // ctx.rect(particle.p.x, particle.p.y, particle.radius * 1, particle.radius * 1);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    }
  };

  return(
    <ParticlesBg type="custom" config={config}/>
  )
};

export default Particles;