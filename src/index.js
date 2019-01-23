
import 'normalize.css/normalize.css'
import './styles/index.scss'
import { SceneManager } from './scene-manager'

const canvas = document.querySelector("#canvas")
const sceneManager = new SceneManager(canvas)

window.setTimeout(() => {
    bindEventListeners()
    resizeCanvas()
    render()
}, 10)

function bindEventListeners() {
	window.onresize = resizeCanvas
	resizeCanvas()
}

function resizeCanvas() {
	canvas.style.width = '100%'
	canvas.style.height= '100%'
	
	canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    
    sceneManager.onWindowResize()
}

function render() {
    requestAnimationFrame(render)
    sceneManager.update()
}