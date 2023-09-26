const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const link = (id: string) => `/${id}`;

const unsplashPhotos = [
  { id: 'second-album-2.jpeg', width: 1974, height: 2961 },
  { id: 'second-album-9.jpeg', width: 2070, height: 1380 },
  { id: 'second-album-1.jpeg', width: 1974, height: 2960 },
  { id: 'second-album-5.jpeg', width: 1974, height: 2761 },
  { id: 'second-album-3.jpeg', width: 1974, height: 2961 },
  { id: 'second-album-4.jpeg', width: 1974, height: 2961 },
  { id: 'second-album-5.jpeg', width: 1974, height: 2961 },
  { id: 'second-album-6.jpeg', width: 1974, height: 2961 },
  { id: 'second-album-7.jpeg', width: 1974, height: 2961 },
  { id: 'second-album-8.jpeg', width: 1974, height: 2961 },
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
