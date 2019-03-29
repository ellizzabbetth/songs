import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';



class SongList extends Component {
  // helper method: take list of songs + map over them
  // and return a big blob of jsx
  renderList() {
    // map produces a brand new array of jsx elements
    // which is returned
    return this.props.songs.map((song) => {
      // returns some amount of jsx
      return (
          <div className="item" key={song.title} >
            <div className="right floated content">
              <button
                className = "ui button primary "
                onClick={() => this.props.selectSong(song)}
              >
              Select
              </button>
            </div>
            <div className="content"> {song.title}</div>
          </div>
      );
    });
  }

  render() {
    // this.props === { songs: state.songs }
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// take state object (all data inside store)
// and run some computation on that data
// which will cause that data to eventually
// show up as props inside our component
const mapStateToProps = (state) => {
  // state is our entire list of songs + the selected song
  console.log(state);
  // return object
  return {songs: state.songs }; // state;
};

// tells provider to get list of songs
// state contains the mapStateToProps from the Provider
export default connect(mapStateToProps, {
  selectSong: selectSong
}) (SongList);


/* To get data from Redux Store:
1. import connect at the top
2. call connect and pass in our component as the second function call
3. define mapStateToProps which takes state as the first arg and
returns an object
4. that object shows up as props inside of our component

*/
