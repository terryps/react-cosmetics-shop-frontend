export const frag3 = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

uniform sampler2D u_image;
uniform float t_ratio;

vec2 aspect(vec2 uv, float texture_ratio, float canvas_ratio){
    if(texture_ratio > canvas_ratio) {
        float diff = canvas_ratio / texture_ratio;
        uv.x *= diff;
        uv.x += (1.0 - diff) / 2.0;
    } else {
        float diff = texture_ratio / canvas_ratio;
        uv.y *= diff;
        uv.y += (1.0 - diff) / 2.0 + .1;
    }
    
    return uv;
}

void main(void)
{
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    
    float texture_ratio = t_ratio;
    float canvas_ratio = u_resolution.x / u_resolution.y;
    
    vec2 coords = aspect(uv, texture_ratio, canvas_ratio);
    coords = mix(vec2(0.1, 0.1), vec2(0.9, 0.9), coords);
    
    float blocks = 10.0;
    float y = floor(uv.y * blocks) / blocks;
    float diag1 = floor((uv.y - sqrt(3.0) * uv.x) / 2.0 * blocks) / blocks;
    float diag2 = floor((uv.y + sqrt(3.0) * uv.x) / 2.0 * blocks) / blocks;
    
    vec2 distortion = 0.1 * vec2(
        sin(u_time*.5),
        cos(u_time*.2)
    );
    
    vec4 color = texture2D(u_image, coords + distortion);
    
    gl_FragColor = color;
}
`;