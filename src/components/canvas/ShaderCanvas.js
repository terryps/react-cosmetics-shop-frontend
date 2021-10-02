import React, { useEffect, useRef } from 'react';
import GlslCanvas from "glslCanvas";
import styles from "./ShaderCanvas.module.css";

function ShaderCanvas(props) {
    const canvasRef = useRef();
    const containerRef = useRef();

    const resizer = (node, container) => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        const dpi = window.devicePixelRatio;
        node.width = w * dpi;
        node.height = h * dpi;
        node.style.width = w + "px";
        node.style.height = h + "px";
    };

    useEffect(() => {
        const container = containerRef.current;
        const node = canvasRef.current;
        const sandbox = new GlslCanvas(node);
        for(let k in props.setUniforms) {
            sandbox.setUniform(k, props.setUniforms[k]);
        }
        resizer(node, container);
        sandbox.load(props.frag);

        const handler = () => {
            if(
                node.clientWidth !== container.clientWidth ||
                node.clientHeight !== container.clientHeight
            ) {
                resizer(canvasRef.current, containerRef.current);
            }
        };

        window.addEventListener("resize", handler, false);

        return () => {
            window.removeEventListener("resize", handler, false);
        };
    }, []);

    return (
        <div className={styles.container} ref={containerRef}>
            <canvas ref={canvasRef} />
        </div>
    );
}

export default ShaderCanvas;