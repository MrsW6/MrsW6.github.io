!function(){window.onload=function(){function n(){e.clearRect(0,0,o,r);for(var n=0;n<d.length;n++){var a=d[n];e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(a.x+a.l*a.xs,a.y+a.l*a.ys),e.stroke()}t()}function t(){for(var n=0;n<d.length;n++){var t=d[n];t.x+=t.xs,t.y+=t.ys,(t.x>o||t.y>r)&&(t.x=Math.random()*o,t.y=-20)}}var a=document.getElementsByTagName("canvas")[0];if(a){a.width=window.innerWidth,a.height=window.innerHeight;var e=a.getContext("2d"),o=a.width,r=a.height;e.strokeStyle="rgba(233, 233, 233, 0.8)",e.lineWidth=1,e.lineCap="round";for(var i=[],h=0;h<1e3;h++)i.push({x:Math.random()*o,y:Math.random()*r,l:1*Math.random(),xs:4*Math.random()-4+2,ys:10*Math.random()+10});for(var d=[],l=0;l<1e3;l++)d[l]=i[l];setInterval(n,100)}}}();