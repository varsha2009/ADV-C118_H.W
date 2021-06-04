function preload(){
};
function setup(){
    canvas = createCanvas(300,300);
    canvas.position(535,250);
    camera = createCapture(VIDEO);
    camera.hide();
}
function draw(){
    image(camera,10,10,280,280);
}