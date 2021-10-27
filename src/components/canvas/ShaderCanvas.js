import React, { useEffect, useRef } from 'react';
import GlslCanvas from "glslCanvas";
import styles from "./ShaderCanvas.module.css";

function ShaderCanvas(props) {
    const {
        frag,
        setUniforms
    } = props;

    const canvasRef = useRef();
    const containerRef = useRef();

    const resizer = (node, container) => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        const dpi = window.devicePixelRatio;
        // node.width = w * dpi;
        // node.height = h * dpi;
        node.width = w * 0.5;
        node.height = h * 0.5;
        node.style.width = w + "px";
        node.style.height = h + "px";
    };

    const setVariables = (sandbox, current, container) => {
        let w_d = setUniforms[current].widthDivisor;
        let h_d = setUniforms[current].heightDivisor;
        if(container.clientWidth < 600) {
            w_d /= 2.0;
            w_d = Math.ceil(w_d);
            h_d = 1.0;
        }
        if(container.clientWidth < 400) {
            w_d = 1.0;
        }
        sandbox.setUniform("image", setUniforms[current].image);
        sandbox.setUniform("t_ratio", setUniforms[current].textureRatio);
        sandbox.setUniform("w_divisor", w_d);
        sandbox.setUniform("h_divisor", h_d);
    };

    useEffect(() => {
        const container = containerRef.current;
        const node = canvasRef.current;
        const sandbox = new GlslCanvas(node);
        let current = 0;

        resizer(node, container);

        const resizeHandler = () => {
            if(
                node.clientWidth !== container.clientWidth ||
                node.clientHeight !== container.clientHeight
            ) {
                resizer(canvasRef.current, containerRef.current);
                setVariables(sandbox, current, containerRef.current);
            }
        };

        window.addEventListener("resize", resizeHandler, false);

        sandbox.load(frag);

        /// set click event
        const clickHandler = () => {
            current += 1;
            current %= setUniforms.length;
            setVariables(sandbox, current, container);
        };

        setVariables(sandbox, current, container);

        node.addEventListener("click", clickHandler, false);

        return () => {
            node.removeEventListener("resize", resizeHandler, false);
            node.removeEventListener("click", clickHandler, false);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper} ref={containerRef}>
                <canvas ref={canvasRef} />
            </div>
        </div>
    );
}

export default ShaderCanvas;