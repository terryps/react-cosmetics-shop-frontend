export const frag2 = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(void) {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    
    vec3 pink = vec3(1.0, 0.0, 1.0);
    vec3 orange = vec3(1.0, 72.0/255.0, 0.0);
    vec3 purple = vec3(130., 47., 175.) / 255.0;
    vec3 blue = vec3(0.0, 0.0, 1.0);
    
    vec3 col1 = mix(pink, orange, uv.x);
    vec3 col2 = mix(blue, purple, uv.x);
    vec3 color = mix(col1, col2, uv.y);
    
    gl_FragColor = vec4(color, 1.0);
}
`;