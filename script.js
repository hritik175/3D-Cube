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
    width : 900,
    height: 700
}
const camera = new THREE.PerspectiveCamera(75,size.width/size.height)
scene.add(camera)

//Render
const canvas = document.querySelector('canvas.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
