import {AiOutlineDelete} from 'react-icons/ai'
import {
  MusiclistItem,
  TrackInfoContainer,
  MusicTrackImage,
  NameGenreContainer,
  Name,
  Genre,
  DurationDeleteContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  const {playlistDetails, onClickDeleteIcon} = props
  const {id, imageUrl, name, genre, duration} = playlistDetails

  const onDeleteTrack = () => {
    onClickDeleteIcon(id)
  }

  return (
    <MusiclistItem>
      <TrackInfoContainer>
        <MusicTrackImage src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </TrackInfoContainer>
      <DurationDeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          data-testid="delete"
          onClick={onDeleteTrack}
        >
          <AiOutlineDelete size={25} />
        </DeleteButton>
      </DurationDeleteContainer>
    </MusiclistItem>
  )
}

export default MusicItem
