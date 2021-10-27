export const frag3 = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

uniform sampler2D u_image;

void main(void)
{
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    
    vec4 color = texture2D(u_image);
    
    gl_FragColor = color;
}
`;