// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl, videoUrl} = details

  return (
    <div>
      <Popup
        modal
        trigger={
          <div>
            <img src={thumbnailUrl} alt="thumbnail" className="movie-item" />
          </div>
        }
      >
        {close => (
          <>
            <div className="popup-container">
              <ReactPlayer controls url={videoUrl} className="player" />
              <button
                data-testid="closeButton"
                type="button"
                className="button"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
