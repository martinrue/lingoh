const logo = (() => {
  const preload = (src, onload) => {
    const img = new Image();
    img.onload = () => onload(img);
    img.src = src;
    return img;
  };

  const images = [
    { src: "/assets/img/logo/1.svg", data: null, timing: 0 },
    { src: "/assets/img/logo/2.svg", data: null, timing: 80 },
    { src: "/assets/img/logo/3.svg", data: null, timing: 160 },
    { src: "/assets/img/logo/4.svg", data: null, timing: 240 },
    { src: "/assets/img/logo/3.svg", data: null, timing: 960 },
    { src: "/assets/img/logo/2.svg", data: null, timing: 1040 },
    { src: "/assets/img/logo/1.svg", data: null, timing: 1120 },
  ];

  const loadImages = (onload) => {
    images.forEach((image) => {
      preload(image.src, (data) => {
        image.data = data;

        if (images.every((i) => i.data)) {
          onload();
        }
      });
    });
  };

  const animate = (selector) => {
    const $logo = app.$(selector);

    setTimeout(() => {
      images.forEach((image) => {
        setTimeout(() => {
          $logo.src = image.data.src;
        }, image.timing);
      });
    }, 1000);
  };

  return {
    loadImages,
    animate,
  };
})();
