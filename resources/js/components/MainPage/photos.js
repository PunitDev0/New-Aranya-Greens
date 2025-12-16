const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function generateSrcSet(src, width, height) {
  return breakpoints.map((breakpoint) => ({
    src,
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  }));
}

const photos = [
  { src: "/images/gal1.jpeg", alt: "Aaranya Greens", width: 800, height: 600 },
  { src: "/images/gal2.jpeg", alt: "Aaranya Greens", width: 800, height: 600 },
  { src: "/images/gal3.jpeg", alt: "Aaranya Greens", width: 800, height: 600 },
  { src: "/images/gal4.jpeg", alt: "Aaranya Greens", width: 800, height: 600 },
  { src: "/images/gal5.jpeg", alt: "Aaranya Greens", width: 800, height: 600 },
  { src: "/images/gal6.jpeg", alt: "Aaranya Greens", width: 800, height: 600 },
].map(({ src, width, height, ...rest }) => ({
  src,
  width,
  height,
  srcSet: generateSrcSet(src, width, height),
  ...rest,
}));

export default photos;
