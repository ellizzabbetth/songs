import React from 'react';
import { connect } from 'react-redux';

// const SongDetail = (props) => {
//  console.log(props);
//   return <div>Song Detail</div>;
// };

const SongDetail = ({ song }) => {
  if(!song){
    return <div>Select song </div>;
  }
  return (
    <div>
    <h3>Details for: </h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};


// We want to wrap the song detail with the connect
// component so that we can get info from out
// redux store
const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

// export default SongDetail;
export default connect(mapStateToProps)(SongDetail);
