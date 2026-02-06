import React, { useEffect, useRef } from 'react';
import useAnimationPreferences from '../hooks/useAnimationPreferences';

/**
 * Text particle background - particles form "NEUROND ASSISTANT" text
 * Particles scatter when mouse approaches and return to text positions
 */
export default function AnimatedBackground() {
    const canvasRef = useRef(null);
    const { shouldAnimate } = useAnimationPreferences();
    const animationFrameId = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const isFormedRef = useRef(false); // Track if particles form letters

    useEffect(() => {
        if (!shouldAnimate) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Particle class
        class Particle {
            constructor(x, y, letterIndex) {
                // Letter formation position
                this.letterX = x;
                this.letterY = y;

                // Random scattered position (initial state)
                this.scatteredX = Math.random() * canvas.width;
                this.scatteredY = Math.random() * canvas.height;

                // Current position starts at scattered
                this.targetX = this.scatteredX;
                this.targetY = this.scatteredY;
                this.x = this.scatteredX + (Math.random() - 0.5) * 50;
                this.y = this.scatteredY + (Math.random() - 0.5) * 50;

                this.size = Math.random() * 0.7 + 0.5; // Smaller stars (0.5-1.2)
                this.opacity = Math.random() * 0.4 + 0.5; // Brighter
                this.baseOpacity = this.opacity;
                this.letterIndex = letterIndex; // Track which letter this belongs to
                // Gentle floating animation
                this.floatOffset = Math.random() * Math.PI * 2;
                this.floatSpeed = 0.02 + Math.random() * 0.01;
                this.floatAmplitude = 2 + Math.random() * 3;
            }

            updateTarget() {
                // Switch between scattered and letter positions
                if (isFormedRef.current) {
                    this.targetX = this.letterX;
                    this.targetY = this.letterY;
                } else {
                    this.targetX = this.scatteredX;
                    this.targetY = this.scatteredY;
                }
            }

            update() {
                // Update target based on current mode
                this.updateTarget();

                // Mouse interaction - particles scatter away from mouse
                const dx = mouseRef.current.x - this.x;
                const dy = mouseRef.current.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 8;
                    this.y -= Math.sin(angle) * force * 8;
                    this.opacity = this.baseOpacity * (1 - force * 0.5);
                } else {
                    // Faster return for quicker constellation formation
                    const returnForce = 0.15; // Balanced speed
                    const floatY = Math.sin(Date.now() * 0.001 * this.floatSpeed + this.floatOffset) * this.floatAmplitude;
                    const floatX = Math.cos(Date.now() * 0.001 * this.floatSpeed + this.floatOffset) * (this.floatAmplitude * 0.5);

                    this.x += (this.targetX + floatX - this.x) * returnForce;
                    this.y += (this.targetY + floatY - this.y) * returnForce;
                    this.opacity = this.baseOpacity;
                }
            }

            draw() {
                // Boost opacity when formed (constellation effect)
                const currentOpacity = isFormedRef.current ? this.baseOpacity * 1.5 : this.baseOpacity;
                const displayOpacity = Math.min(this.opacity * (isFormedRef.current ? 1.5 : 1), 1);

                // Glowing circle (cosmic star) - smaller size
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${displayOpacity})`); // White core
                gradient.addColorStop(0.15, `rgba(0, 180, 255, ${displayOpacity * 0.9})`); // Bright ocean blue
                gradient.addColorStop(0.4, `rgba(30, 200, 255, ${displayOpacity * 0.5})`); // Lighter blue
                gradient.addColorStop(1, `rgba(100, 220, 255, 0)`); // Fade to transparent

                ctx.fillStyle = gradient;
                ctx.shadowBlur = 6;
                ctx.shadowColor = `rgba(0, 180, 255, ${displayOpacity * 0.6})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles from individual letters scattered across screen
        const initParticles = () => {
            particlesRef.current = [];

            // Individual letters to display
            const letters = ['N', 'E', 'U', 'R', 'O', 'N', 'D', ' ', 'A', 'S', 'S', 'I', 'S', 'T', 'A', 'N', 'T'];

            // Create offscreen canvas for each letter
            const textCanvas = document.createElement('canvas');
            const textCtx = textCanvas.getContext('2d');

            // Letter size - balanced for clarity
            const fontSize = Math.min(canvas.width / 16, 50); // Balanced size
            const letterSize = fontSize * 1.8; // More space for clarity
            textCanvas.width = letterSize;
            textCanvas.height = letterSize;

            textCtx.font = `bold ${fontSize}px Arial, sans-serif`;
            textCtx.textAlign = 'center';
            textCtx.textBaseline = 'middle';

            letters.forEach((letter, letterIndex) => {
                if (letter === ' ') return; // Skip spaces

                // Well-separated positions in corners and far edges (empty areas)
                // Each zone is smaller and farther apart to avoid crowding
                const zones = [
                    // Far top-left corner
                    { x: [0.03, 0.10], y: [0.03, 0.10] },
                    // Far top-right corner
                    { x: [0.90, 0.97], y: [0.03, 0.10] },
                    // Top center (very thin strip)
                    { x: [0.40, 0.60], y: [0.02, 0.08] },
                    // Right edge (mid-high)
                    { x: [0.90, 0.97], y: [0.25, 0.40] },
                    // Right edge (mid-low)
                    { x: [0.90, 0.97], y: [0.60, 0.75] },
                    // Far bottom-right corner
                    { x: [0.90, 0.97], y: [0.90, 0.97] },
                    // Bottom center (very thin strip)
                    { x: [0.40, 0.60], y: [0.92, 0.98] },
                    // Far bottom-left corner
                    { x: [0.03, 0.10], y: [0.90, 0.97] },
                    // Left edge (mid-high)
                    { x: [0.03, 0.10], y: [0.25, 0.40] },
                    // Left edge (mid-low)
                    { x: [0.03, 0.10], y: [0.60, 0.75] }
                ];

                // Cycle through zones for letters
                const zone = zones[letterIndex % zones.length];
                const letterX = (Math.random() * (zone.x[1] - zone.x[0]) + zone.x[0]) * canvas.width;
                const letterY = (Math.random() * (zone.y[1] - zone.y[0]) + zone.y[0]) * canvas.height;

                // Draw letter to get pixels
                textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
                textCtx.fillStyle = 'white';
                textCtx.fillText(letter, letterSize / 2, letterSize / 2);

                // Get pixel data
                const imageData = textCtx.getImageData(0, 0, textCanvas.width, textCanvas.height);
                const pixels = imageData.data;

                // Create particles for this letter
                const gap = 8; // Sparse for cleaner constellation
                for (let y = 0; y < textCanvas.height; y += gap) {
                    for (let x = 0; x < textCanvas.width; x += gap) {
                        const index = (y * textCanvas.width + x) * 4;
                        const alpha = pixels[index + 3];

                        if (alpha > 128) {
                            // Position relative to letter's zone position
                            const px = letterX - letterSize / 2 + x;
                            const py = letterY - letterSize / 2 + y;
                            particlesRef.current.push(new Particle(px, py, letterIndex));
                        }
                    }
                }
            });
        };

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Mouse move handler
        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Click handler to toggle between scattered and formed
        const handleClick = () => {
            isFormedRef.current = !isFormedRef.current;
        };
        window.addEventListener('click', handleClick);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw constellation lines when formed
            if (isFormedRef.current) {
                ctx.strokeStyle = 'rgba(0, 180, 255, 0.25)'; // Slightly more transparent
                ctx.lineWidth = 0.5;

                // Group particles by letter for constellation lines
                const letterGroups = {};
                particlesRef.current.forEach(particle => {
                    if (!letterGroups[particle.letterIndex]) {
                        letterGroups[particle.letterIndex] = [];
                    }
                    letterGroups[particle.letterIndex].push(particle);
                });

                // Draw lines within each letter group - optimized for clarity
                Object.values(letterGroups).forEach(group => {
                    for (let i = 0; i < group.length; i++) {
                        let connectionCount = 0;
                        for (let j = i + 1; j < group.length; j++) {
                            if (connectionCount >= 3) break; // Max 3 connections per star

                            const p1 = group[i];
                            const p2 = group[j];
                            const distance = Math.sqrt(
                                Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
                            );

                            // Only connect very close stars (reduced from 25)
                            if (distance < 15) {
                                ctx.beginPath();
                                ctx.moveTo(p1.x, p1.y);
                                ctx.lineTo(p2.x, p2.y);
                                ctx.stroke();
                                connectionCount++;
                            }
                        }
                    }
                });
            }

            particlesRef.current.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            particlesRef.current = [];
        };
    }, [shouldAnimate]);

    if (!shouldAnimate) return null;

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: -1,
                opacity: 0.5
            }}
        />
    );
}
