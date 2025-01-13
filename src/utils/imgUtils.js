export const resizeImage = (imageUrl, width, height) => {
    if (!imageUrl) return "";
    return imageUrl.replace(
      "/upload/",
      `/upload/w_${width},h_${height},c_fill/`
    );
  };