/* ── PARTICLES (light mode) — capped at 30 fps ────────── */
(function(){
  var canvas=document.createElement('canvas');
  canvas.style.cssText='position:fixed;inset:0;z-index:2;pointer-events:none;opacity:.35';
  document.body.appendChild(canvas);
  var ctx=canvas.getContext('2d');
  var W,H,pts=[];
  var resize=function(){W=canvas.width=innerWidth;H=canvas.height=innerHeight;};
  resize();window.addEventListener('resize',resize,{passive:true});
  var colors=['rgba(255,107,74,','rgba(124,92,231,','rgba(0,135,90,','rgba(232,168,0,'];
  for(var i=0;i<40;i++)pts.push({x:Math.random()*1920,y:Math.random()*1080,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2,r:Math.random()*1.2+.3,c:colors[Math.floor(Math.random()*colors.length)],o:Math.random()*.3+.08});
  var lastFrame=0;
  var INTERVAL=1000/30; /* 30 fps cap */
  (function draw(now){
    requestAnimationFrame(draw);
    if(now-lastFrame<INTERVAL)return;
    lastFrame=now;
    ctx.clearRect(0,0,W,H);
    for(var j=0;j<pts.length;j++){
      var p=pts[j];
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;
      if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.c+p.o+')';ctx.fill();
    }
  })(0);
})();
