const GetLocalData = () =>{
  let fav = JSON.parse(localStorage.getItem('favMovies'));
  if (fav === null)  {
     fav = [];
  };
  return fav;
}

const SetLocalData = (data) =>{
  localStorage.setItem('favMovies', JSON.stringify(data))
}

const IsAFavObj = (favObj) => {
  return (favObj === undefined) ? false :
    ((favObj.id === Number(favObj.id)) ? true : false);
}

const FavMoviesUpdate = (clkId) => {
  if (IsAFavObj(clkId)) {
    let favMovies = GetLocalData();
    (favMovies.filter(mov => mov.id === clkId.id ).length > 0 ) ?
      ( favMovies= [...favMovies.filter(mov => mov.id!==clkId.id)] )
    :
      ( favMovies= [...favMovies, clkId] );
    SetLocalData(favMovies);
  }
}

const IsAFaveMovie = (movieId) => {
  let favMovies = GetLocalData();
  return  (favMovies.filter(mov => mov.id === movieId ).length > 0 ) ? true : false;
}

export {
  FavMoviesUpdate,
  GetLocalData,
  IsAFaveMovie
};
