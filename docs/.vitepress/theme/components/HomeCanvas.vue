<template>
  <canvas ref="canvasRef" class="home-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationFrameId: number

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

const points: Point[] = []
const POINT_COUNT = 60
const CONNECTION_DISTANCE = 150

const initCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  ctx = canvas.getContext('2d')
  if (!ctx) return

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  
  window.addEventListener('resize', resize)
  resize()

  // Initialize points
  for (let i = 0; i < POINT_COUNT; i++) {
    points.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1
    })
  }
}

const animate = () => {
  const canvas = canvasRef.value
  if (!canvas || !ctx) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  // Update and draw points
  points.forEach(point => {
    point.x += point.vx
    point.y += point.vy

    // Bounce off edges
    if (point.x < 0 || point.x > canvas.width) point.vx *= -1
    if (point.y < 0 || point.y > canvas.height) point.vy *= -1

    // Draw point
    ctx!.beginPath()
    ctx!.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
    ctx!.fillStyle = 'rgba(99, 102, 241, 0.5)' // Primary color with opacity
    ctx!.fill()
  })

  // Draw connections
  points.forEach((p1, i) => {
    points.slice(i + 1).forEach(p2 => {
      const dx = p1.x - p2.x
      const dy = p1.y - p2.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < CONNECTION_DISTANCE) {
        ctx!.beginPath()
        ctx!.moveTo(p1.x, p1.y)
        ctx!.lineTo(p2.x, p2.y)
        const opacity = 1 - distance / CONNECTION_DISTANCE
        ctx!.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.2})`
        ctx!.stroke()
      }
    })
  })

  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  initCanvas()
  animate()
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  window.removeEventListener('resize', initCanvas)
})
</script>

<style scoped>
.home-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  opacity: 0.6;
}
</style>
