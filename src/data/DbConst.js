const API= "?api_key=USE-YOUR-OWN-API-KEY"

const DbConst = {
  DETAIL_URL: "https://api.themoviedb.org/3/movie/{Id}" + API,
  SRC_URL: "https://api.themoviedb.org/3/search/movie" + API + "&query=",
  IMG_URL: "https://image.tmdb.org/t/p/w185/"
}

export default DbConst;
