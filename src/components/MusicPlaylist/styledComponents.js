import styled from 'styled-components'

export const BgContainer = styled.div`
  min-heihgt: 100vh;
  background-color: #152850;
 `
export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png ');
  height: 400px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
 `
export const ArtistName = styled.h1`
  font-family: 'Roboto';
  color: white;
  font-size: 42px;
  font-weight: bold;
 `
export const ArtistInfo = styled.p`
  fnt-family: 'Roboto';
  color: white;
  font-size: 32px;
  font-weight: 400
`
export const PlaylistContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`
export const PlaylistHeading = styled.h1`
  font-family: 'Roboto';
  color: white;
  font-size: 32px;
  font-weight: bold;
`
export const SearchInput = styled.input`
  height: 30px;
  width: 18%;
  padding-left: 25px;
  color: #cbd5e1;
  border: 1px solid white;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
export const MusicList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
`
export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoSongsText = styled.p`
  font-family: 'Roboto';
  color: white;font-size: 32px;
  font-weight: bold;
  font-size: 32px;
`
