"use client";
import { JSX, useEffect, useRef, useState } from "react";

interface Dimensions {
  width: number;
  height: number;
}

class Node {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocityX: number;
  velocityY: number;
  originalX: number;
  originalY: number;
  displacement: number;
  phase: number;
  amplitude: number;
  frequency: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    canvasWidth: number,
    canvasHeight: number
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    // Increase initial velocity range for faster movement
    this.velocityX = Math.random() * 0.7 - 0.25;
    this.velocityY = Math.random() * 0.7 - 0.25;
    this.originalX = x;
    this.originalY = y;

    this.displacement = Math.random() * 30 + 30;

    this.phase = Math.random() * Math.PI * 2;
    // Increase amplitude for more pronounced movement
    this.amplitude = Math.random() * 0.6 + 0.3;
    // Increase frequency for faster oscillation
    this.frequency = Math.random() * 0.01 + 0.004;
  }

  update(): void {
    const time = Date.now() * 0.001;

    const padding = this.radius + 5;

    if (this.x < padding) {
      this.velocityX += 0.1;
    } else if (this.x > this.canvasWidth - padding) {
      this.velocityX -= 0.1;
    }

    if (this.y < padding) {
      this.velocityY += 0.1;
    } else if (this.y > this.canvasHeight - padding) {
      this.velocityY -= 0.1;
    }

    const dx = this.x - this.originalX;
    const dy = this.y - this.originalY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > this.displacement) {
      const angle = Math.atan2(dy, dx);
      this.velocityX -= Math.cos(angle) * 0.03;
      this.velocityY -= Math.sin(angle) * 0.03;
    }

    // Increase oscillation effect
    this.velocityX +=
      Math.sin(time * this.frequency + this.phase) * 0.02 * this.amplitude;
    this.velocityY +=
      Math.cos(time * this.frequency + this.phase) * 0.02 * this.amplitude;

    this.x += this.velocityX;
    this.y += this.velocityY;

    // Reduce damping to maintain more momentum
    this.velocityX *= 1;
    this.velocityY *= 1;

    // Increase max velocity
    const maxVelocity = 2.0;
    const currentVelocity = Math.sqrt(
      this.velocityX * this.velocityX + this.velocityY * this.velocityY
    );
    if (currentVelocity > maxVelocity) {
      const scale = maxVelocity / currentVelocity;
      this.velocityX *= scale;
      this.velocityY *= scale;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export default function NeuralNetworkBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const lastFrameTime = useRef<number>(0);
  const [isClient, setIsClient] = useState(false);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  const initialize = () => {
    if (!canvasRef.current || typeof window === "undefined") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    setDimensions({
      width,
      height,
    });

    const nodeCount = Math.min(75, Math.floor((width * height) / 30000));
    const nodes: Node[] = [];

    const gridCols = Math.ceil(Math.sqrt(nodeCount));
    const gridRows = Math.ceil(nodeCount / gridCols);

    const colSpacing = width / gridCols;
    const rowSpacing = height / gridRows;

    for (let i = 0; i < nodeCount; i++) {
      const col = i % gridCols;
      const row = Math.floor(i / gridCols);

      const x = col * colSpacing + Math.random() * colSpacing;
      const y = row * rowSpacing + Math.random() * rowSpacing;

      const radius = Math.random() * 2 + 1;
      const color =
        Math.random() > 0.7 ? "rgba(255,255,255,0.8)" : "rgba(200,200,200,0.7)";

      nodes.push(new Node(x, y, radius, color, width, height));
    }

    nodesRef.current = nodes;
  };

  const animate = (timestamp: number) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (timestamp - lastFrameTime.current < 1000 / 30) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    lastFrameTime.current = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const nodes = nodesRef.current;
    const connectionDistance = Math.min(canvas.width, canvas.height) / 5;

    nodes.forEach((node) => {
      node.update();
      node.draw(ctx);
    });

    const time = Date.now() * 0.001;
    for (let i = 0; i < nodes.length; i++) {
      const checkInterval = nodes.length > 50 ? 2 : 1;
      for (let j = i + checkInterval; j < nodes.length; j += checkInterval) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;

        const distSquared = dx * dx + dy * dy;
        const connectionDistSquared = connectionDistance * connectionDistance;

        if (distSquared < connectionDistSquared) {
          const distance = Math.sqrt(distSquared);
          // Increase base opacity by making the starting opacity higher
          let opacity = Math.min(0.9, 1.2 - distance / connectionDistance);

          const pulseSpeed = 0.5;
          const pulseAmount = 0.3;
          const pulse =
            (Math.sin(time * pulseSpeed + i * 0.1) * pulseAmount + 1) * opacity;

          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);

          // Increase the opacity multiplier from 0.5 to 0.8
          ctx.strokeStyle = `rgba(255, 255, 255, ${pulse * 0.8})`;
          ctx.lineWidth = Math.min(1, opacity * 1.2); // Slightly increased line width
          ctx.stroke();
        }
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    setIsClient(true);

    const initTimer = setTimeout(() => {
      initialize();
      animationRef.current = requestAnimationFrame(animate);
    }, 100);

    let resizeTimeout: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      resizeTimeout = setTimeout(() => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }

        initialize();
        animationRef.current = requestAnimationFrame(animate);
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(initTimer);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isClient) {
    return <></>;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: "transparent",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
