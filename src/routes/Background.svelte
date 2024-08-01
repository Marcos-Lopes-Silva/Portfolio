<script lang="ts">
    import { onMount } from 'svelte';
    import type Star from '../types/index';
   
    function createStars(): Star[] {
        const stars: Star[] = [];
        const numStars = 100;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                top: Math.random() * 100,
                left: Math.random() * 100,
                speed: Math.random() * 10
            });
        }
        return stars;
    }

    let stars: Star[] = [];
    const starRef = new WeakMap<Star, HTMLDivElement>();

    onMount(() => {
        stars = createStars();
        document.addEventListener('mousemove', handleMouseMove);
        requestAnimationFrame(updateStars);
    });


    function handleMouseMove(e: MouseEvent) {
        const elements = document.querySelectorAll<HTMLDivElement>('.star');
        const { clientX, clientY } = e; 
        elements.forEach(star => {
            const rect = star.getBoundingClientRect();
            const starX = rect.left + rect.width / 2;
            const starY = rect.top + rect.height / 2;

            const distance = Math.hypot(clientX - starX, clientY - starY);

            if (distance < 400) { 
                const speed = parseFloat(star.dataset.speed || '0');
                const x = (window.innerWidth / 2 - clientX) * speed / 200;
                const y = (window.innerHeight / 2 - clientY) * speed / 200;

                star.style.transform = `translate(${x}px, ${y}px)`;
            } else {
                star.style.transform = 'translate(0, 0)'; 
            }
        });
    }

    function updateStars() {
        stars.forEach(star => {
            const starElement = starRef.get(star);
            if (starElement) {
                starElement.style.transform = `translate(0, ${star.speed}px)`;
                if (star.top > 100) {
                    star.top = 0;
                }
            }
        });
        requestAnimationFrame(updateStars);
    }

    
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="background">
    {#each stars as star}
        <div class="star" style="top: {star.top}%; left: {star.left}%" data-speed={star.speed}></div>
    {/each}
</div>

<style>
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        z-index: -1;
        overflow: hidden;
    }

    .star {
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgb(255, 233, 39);
        border-radius: 50%;
        opacity: 0.8;
        animation: twinkle 2s infinite alternate;
        transition: transform 0.2s ease-out;
    }

    @keyframes twinkle {
        0% { opacity: 0.3; }
        100% { opacity: 1; }
    }
</style>

