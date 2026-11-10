// Soft iridescent "cloud sky" for the hero: domain-warped fbm noise in a fixed pastel palette.
// Kept deliberately cheap: 4 noise octaves. The colors are uniforms, so the hero and the contact screen share one shader.

// Cloud scale: larger = smaller, more distant clouds. Far = overview, near = inside the hero.
export const skyScaleFar = 5;
export const skyScaleNear = 2.2;

// [base gradient start, base gradient end, tint A, tint B, tint C] as 0..1 RGB
export type SkyPalette = [number, number, number][];
export const heroSky: SkyPalette = [
  [0.722, 0.863, 0.949], [0.980, 0.949, 0.929], [0.569, 0.804, 0.933], [0.988, 0.898, 0.922], [0.870, 0.850, 0.975],
];
// contact: the hero's sky and peach with violet clouds in place of the blue ones
export const contactSky: SkyPalette = [
  [0.761, 0.820, 0.961], [0.980, 0.945, 0.937], [0.698, 0.616, 0.929], [0.988, 0.886, 0.925], [0.620, 0.816, 0.949],
];

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
uniform float uShift;
uniform vec3 uBaseA;
uniform vec3 uBaseB;
uniform vec3 uTintA;
uniform vec3 uTintB;
uniform vec3 uTintC;

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
  for (int i = 0; i < 4; i++) {
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

  // the cursor pushes the cloud field and scrolling pulls it to the left
  p += uMouse * 1.5;
  p.x += uShift;

  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t));
  vec2 r = vec2(
    fbm(p + 3.0 * q + vec2(1.7, 9.2) + t * 1.3),
    fbm(p + 3.0 * q + vec2(8.3, 2.8) - t)
  );
  float f = fbm(p + 3.0 * r);

  vec3 col = mix(uBaseA, uBaseB, clamp(uv.x * 0.7 + (1.0 - uv.y) * 0.3, 0.0, 1.0));
  col = mix(col, uTintA, smoothstep(0.30, 0.75, q.x) * 0.62);
  col = mix(col, uTintB, smoothstep(0.30, 0.68, r.y) * 0.75);
  col = mix(col, uTintC, smoothstep(0.45, 0.85, r.x) * 0.32);
  col = mix(col, vec3(1.0), smoothstep(0.42, 0.85, f) * 0.78);

  gl_FragColor = vec4(col, 1.0);
}
`;
