// Write your code here
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div>
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <div className="video-container">
            <button
              className="button"
              type="button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose size="20" />
            </button>

            <div className="video">
              <ReactPlayer controls url={videoUrl} height={300} width={500} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
