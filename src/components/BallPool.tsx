import { useEffect, useRef } from "react";
import Matter, {
  Common,
  Composite,
  Composites,
  Mouse,
  MouseConstraint,
} from "matter-js";
import { generatePastelColor } from "../utils/utilsFunc";

export default function BallPool() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;

    let engine = Engine.create();

    let render = Render.create({
      element: containerRef.current!,
      engine: engine,
      canvas: canvasRef.current!,
      options: {
        width: 270,
        height: 170,
        background: "transparent",
        wireframes: false,
      },
    });

    // const floor = Bodies.rectangle(150, 300, 300, 10, {
    //   isStatic: true,
    //   render: {
    //     fillStyle: "#99dd33",
    //   },
    // });

    // const ball = Bodies.circle(150, 0, 30, {
    //   restitution: 0.9,
    // });

    // Composite.add(engine.world, [floor, ball]);

    // add bodies
    Composite.add(engine.world, [
      Bodies.rectangle(135, 170, 540, 5, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
    ]);

    const walls = [
      Bodies.rectangle(0, 270, 70, 540, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
      Bodies.rectangle(270, 270, 70, 540, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
    ];

    // Composite.add(engine.world, [
    //   Bodies.rectangle(135, 270, 540, 2, {
    //     isStatic: true,
    //     render: { fillStyle: "transparent" },
    //   }),
    // ]);

    const recArr: Matter.Body[] = [];

    const recGenerator = (count: number) => {
      for (let i = 0; i < count; i++) {
        const rectangle = Bodies.rectangle(
          Math.random() * 270 + 23,
          Math.random() * 270 - 23,
          23,
          23,
          {
            restitution: 0.5,
            friction: 1,
            render: {
              opacity: 0.3,
              fillStyle: generatePastelColor(),
            },
            chamfer: {
              radius: [3, 3, 3, 3],
            },
          }
        );
        recArr.push(rectangle);
      }
    };

    recGenerator(49);

    Composite.add(engine.world, [...walls, ...recArr]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(engine.world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    Matter.Runner.run(engine);
    Render.run(render);
  }, []);

  return (
    <div
      className="absolute top-0 inset-x-0 z-50"
      ref={containerRef}
      style={{
        width: 270,
        height: 170,
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
