"use client";

import { useEffect, useRef } from "react";

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const imageLoadedRef = useRef<boolean>(false);
  const initialNodesRef = useRef<{ x: number; y: number; radius: number }[]>(
    []
  );
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();

    // Neural network nodes
    let nodes: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      originalX?: number;
      originalY?: number;
      initializing?: boolean;
    }[] = [];

    // Load Gura image and extract outline points
    const loadGuraImage = () => {
      if (imageLoadedRef.current) return;

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = "/Gawr_Gura_3D_Model.png";

      img.onload = () => {
        // Create a temporary canvas to process the image
        const tempCanvas = document.createElement("canvas");
        const aspectRatio = img.width / img.height;

        // Set reasonable dimensions for processing
        const processWidth = 200;
        const processHeight = processWidth / aspectRatio;

        tempCanvas.width = processWidth;
        tempCanvas.height = processHeight;

        const tempCtx = tempCanvas.getContext("2d");
        if (!tempCtx) return;

        // Draw and process the image
        tempCtx.drawImage(img, 0, 0, processWidth, processHeight);
        const imageData = tempCtx.getImageData(
          0,
          0,
          processWidth,
          processHeight
        );
        const data = imageData.data;

        // Find edge points by looking for non-transparent pixels with transparent neighbors
        const edgePoints: { x: number; y: number }[] = [];
        const sampleRate = 1; // Sample rate to control point density

        for (let y = 0; y < processHeight; y += sampleRate) {
          for (let x = 0; x < processWidth; x += sampleRate) {
            const idx = (y * processWidth + x) * 4;

            // If this pixel is not fully transparent (has some visibility)
            if (data[idx + 3] > 100) {
              // Check if any neighboring pixel is transparent (indicating an edge)
              let isEdge = false;

              // Check neighboring pixels
              for (let ny = -1; ny <= 1; ny++) {
                for (let nx = -1; nx <= 1; nx++) {
                  if (nx === 0 && ny === 0) continue;

                  const neighborX = x + nx;
                  const neighborY = y + ny;

                  if (
                    neighborX >= 0 &&
                    neighborX < processWidth &&
                    neighborY >= 0 &&
                    neighborY < processHeight
                  ) {
                    const neighborIdx =
                      (neighborY * processWidth + neighborX) * 4;
                    if (data[neighborIdx + 3] < 50) {
                      isEdge = true;
                      break;
                    }
                  }
                }
                if (isEdge) break;
              }

              if (isEdge) {
                edgePoints.push({ x, y });
              }
            }
          }
        }

        // Sample a subset of edge points to create a reasonable number of nodes
        const nodeCount = Math.min(
          Math.floor((window.innerWidth * window.innerHeight) / 15000),
          100
        );

        // Select points from the edge points array evenly
        const selectedPoints: { x: number; y: number; radius: number }[] = [];
        const step = Math.max(1, Math.floor(edgePoints.length / nodeCount));

        for (
          let i = 0;
          i < edgePoints.length && selectedPoints.length < nodeCount;
          i += step
        ) {
          selectedPoints.push({
            x: edgePoints[i].x,
            y: edgePoints[i].y,
            radius: Math.random() * 2 + 1,
          });
        }

        // Scale and position the points to center the image on the canvas
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const scale =
          Math.min(canvas.width / processWidth, canvas.height / processHeight) *
          1.1; // Increased from 0.6 to 0.9 to make the outline larger

        selectedPoints.forEach((point) => {
          point.x = centerX + (point.x - processWidth / 2) * scale;
          point.y = centerY + (point.y - processHeight / 2) * scale;
        });

        initialNodesRef.current = selectedPoints;
        imageLoadedRef.current = true;

        // Initialize nodes with the Gura outline positions
        initNodes();
      };
    };

    // Initialize nodes
    const initNodes = () => {
      nodes = [];
      const nodeCount = Math.min(
        Math.floor((window.innerWidth * window.innerHeight) / 15000),
        100
      );

      // Check if we have outline points
      if (imageLoadedRef.current && initialNodesRef.current.length > 0) {
        // Start with Gura outline
        for (
          let i = 0;
          i < initialNodesRef.current.length && i < nodeCount;
          i++
        ) {
          const point = initialNodesRef.current[i];
          nodes.push({
            x: point.x,
            y: point.y,
            originalX: point.x,
            originalY: point.y,
            radius: point.radius,
            vx: 0,
            vy: 0,
            initializing: true,
          });
        }

        // Fill the rest with random nodes if needed
        for (let i = initialNodesRef.current.length; i < nodeCount; i++) {
          nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
          });
        }
      } else {
        // Normal initialization when no image is loaded yet
        for (let i = 0; i < nodeCount; i++) {
          nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
          });
        }
      }
    };

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", setCanvasDimensions);
    window.addEventListener("mousemove", handleMouseMove);

    // Load the Gura image
    loadGuraImage();

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Increment time
      timeRef.current++;
      const transitionStart = 50; // Reduced from 100 to start transition earlier
      const transitionDuration = 100; // Reduced from 200 to complete transition faster
      const transitionProgress = Math.min(
        Math.max(timeRef.current - transitionStart, 0) / transitionDuration,
        1
      );

      // Constants for cursor influence
      const cursorInfluence = 0.1;
      const maxDistance = 300;
      const maxVelocity = 0.7;

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // If node is part of initial formation and we're in transition period
        if (
          node.initializing &&
          node.originalX !== undefined &&
          node.originalY !== undefined
        ) {
          // Gradually release nodes from their original positions
          if (transitionProgress > 0) {
            // Add random velocity as transition progresses
            if (Math.random() < transitionProgress * 0.1) {
              node.vx = (Math.random() - 0.5) * transitionProgress * 2;
              node.vy = (Math.random() - 0.5) * transitionProgress * 2;

              // Once fully transitioned, mark as no longer initializing
              if (transitionProgress >= 0.8) {
                node.initializing = false;
              }
            }
          }
        }

        // Apply cursor influence for nodes that are not fixed
        const { x: mouseX, y: mouseY } = mouseRef.current;
        if (
          (mouseX !== 0 || mouseY !== 0) &&
          (!node.initializing || transitionProgress > 0.5)
        ) {
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const influence = cursorInfluence * (1 - distance / maxDistance);
            node.vx += (dx / distance) * influence;
            node.vy += (dy / distance) * influence;
          }
        }

        // Apply minimal friction
        node.vx *= 1;
        node.vy *= 1;

        // Limit maximum velocity for nodes that are not fixed
        if (!node.initializing || transitionProgress > 0) {
          const currentVelocity = Math.sqrt(
            node.vx * node.vx + node.vy * node.vy
          );
          if (currentVelocity > maxVelocity) {
            node.vx = (node.vx / currentVelocity) * maxVelocity;
            node.vy = (node.vy / currentVelocity) * maxVelocity;
          }
        }

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Ensure nodes stay within boundaries
        if (node.x < node.radius) {
          node.x = node.radius;
          node.vx *= -1;
        } else if (node.x > canvas.width - node.radius) {
          node.x = canvas.width - node.radius;
          node.vx *= -1;
        }

        if (node.y < node.radius) {
          node.y = node.radius;
          node.vy *= -1;
        } else if (node.y > canvas.height - node.radius) {
          node.y = canvas.height - node.radius;
          node.vy *= -1;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#33739d"; // Primary blue from palette
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j];
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Draw connections with closer ones for the outline
          const connectionDistance = node.initializing ? 40 : 180;

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(147, 169, 201, ${
              0.4 * (1 - distance / connectionDistance)
            })`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-palette-blue/10 via-background to-palette-blueGray/10 neural-background"
    />
  );
}
