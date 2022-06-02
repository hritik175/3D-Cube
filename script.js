
// Scenery 
const scene = new THREE.Scene();

// Creating a mesh with material    
const geometry = new THREE.BoxGeometry(1,1,1)      // here BoxGeometry(height, width, depth)
const material = new THREE.MeshBasicMaterial({color : 'red'})
const cube = new THREE.Mesh(geometry,material)

// Adding Mesh to the Scene
scene.add(cube)

//Camera
const size ={
    width : 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75,size.width/size.height)
scene.add(camera)

// Position the Camera
camera.position.z = 4;   // Changing the Camera position to make the object visible on the canvas.
camera.position.x = 0;
camera.position.y = 1;


//Render
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(size.width,size.height)
renderer.render(scene,camera)