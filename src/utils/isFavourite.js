const isFavourite = (videoId = '') => {
  const oldFavourites = JSON.parse(
    localStorage.getItem('favourites_object') || '{}'
  );
  const videosinFavourites = Object.keys(oldFavourites);
  if (videosinFavourites.indexOf(videoId) > -1) {
    return true;
  } else {
    return false;
  }
};

export default isFavourite;
