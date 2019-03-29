import { combineReducers } from 'redux';

// song list reducer
const songsReducer = () => {
  return [
    { title:  'No Scrubs', duration: '4:05'},
    { title:  'Macarena', duration: '2:00'},
    { title:  'All Star', duration: '3:05'},
    { title:  'I Want It That Way', duration: '2:45'}
  ]
};

// selected song reducer
const selectedSongReducer = (selectedSong = null, action) => {
   if(action.type === 'SONG_SELECTED') {
     return action.payload;
   }
   return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
