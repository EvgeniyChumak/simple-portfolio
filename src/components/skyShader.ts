// Soft iridescent "cloud sky" for the hero: domain-warped fbm noise tinted with the hero's pastel palette.
// Shared by the live hero canvas and the PNG export for Figma.

// Cloud scale: larger = smaller, more distant clouds. Far = overview, near = inside the hero.
export const skyScaleFar = 3.4;
export const skyScaleNear = 1.35;

export const skyVertex = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

export const skyFragment = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uScale;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = m * p;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = (uv - 0.5) * vec2(uRes.x / uRes.y, 1.0) * 1.5 * uScale;
  float t = uTime * 0.095;

  // the cursor pushes the whole cloud field, so it follows the hand
  p += uMouse * 1.5;

  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t));
  vec2 r = vec2(
    fbm(p + 3.0 * q + vec2(1.7, 9.2) + t * 1.3),
    fbm(p + 3.0 * q + vec2(8.3, 2.8) - t)
  );
  float f = fbm(p + 3.0 * r);

  vec3 base = mix(vec3(0.722, 0.863, 0.949), vec3(0.980, 0.949, 0.929), clamp(uv.x * 0.7 + (1.0 - uv.y) * 0.3, 0.0, 1.0));
  vec3 sky = vec3(0.569, 0.804, 0.933);
  vec3 pink = vec3(0.988, 0.898, 0.922);
  vec3 lav = vec3(0.870, 0.850, 0.975);
  vec3 white = vec3(1.0);

  vec3 col = base;
  col = mix(col, sky, smoothstep(0.30, 0.75, q.x) * 0.62);
  col = mix(col, pink, smoothstep(0.30, 0.68, r.y) * 0.75);
  col = mix(col, lav, smoothstep(0.45, 0.85, r.x) * 0.32);
  col = mix(col, white, smoothstep(0.42, 0.85, f) * 0.78);

  gl_FragColor = vec4(col, 1.0);
}
`;
