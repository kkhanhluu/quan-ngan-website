const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const link = (id: string) => `/${id}.avif`;

const unsplashPhotos = [
  { id: 'album-2', width: 2070, height: 1380 },
  { id: 'album-1', width: 1974, height: 2960 },
  { id: 'empty', width: 1974, height: 2960 },
  { id: 'album-6', width: 1974, height: 2960 },
  { id: 'album-5', width: 2070, height: 1380 },
  { id: 'album-3', width: 1974, height: 2961 },
  { id: 'album-4', width: 1974, height: 2961 },
];

const photos = unsplashPhotos.map((photo) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;

  return {
    src: link(photo.id),
    width,
    height,
  };
});

export default photos;
