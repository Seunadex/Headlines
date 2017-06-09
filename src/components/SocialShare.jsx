import React from 'react';
import {
ShareButtons,
generateShareIcon,
} from 'react-share';
import PropTypes from 'prop-types';

const {
TwitterShareButton,
FacebookShareButton,
GooglePlusShareButton,
LinkedinShareButton,
} = ShareButtons;

/**
*const {
*TwitterShareCount,
*FacebookShareCount,
*GooglePlusShareCount,
*LinkedinShareCount,
*} = ShareCounts;
**/

const TwitterIcon = generateShareIcon('twitter');
const FacebookIcon = generateShareIcon('facebook');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

const Share = (props) => {
  const shareUrl = props.share;
  const title = props.title;
  return (
    <div className="share-container row">
      <div className="social-share twit">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="share-button"
        >
          <TwitterIcon
            size={35}
            round
          />
        </TwitterShareButton>
      </div>

      <div className="social-share face">
        <FacebookShareButton
          url={shareUrl}
          title={title}
          className="share-button"
        >
          <FacebookIcon
            size={35}
            round
          />
        </FacebookShareButton>
      </div>


      <div className="social-share google">
        <GooglePlusShareButton
          url={shareUrl}
          title={title}
          className="share-button"
        >
          <GooglePlusIcon
            size={32}
            round
          />
        </GooglePlusShareButton>
      </div>


      <div className="social-share link">
        <LinkedinShareButton
          url={shareUrl}
          title={title}
          className="share-button"
        >
          <LinkedinIcon
            size={32}
            round
          />
        </LinkedinShareButton>
      </div>
    </div>

  );
};

export default Share;

Share.propTypes = {
  share: PropTypes.string,
  title: PropTypes.string,
};

Share.defaultProps = {
  share: '',
  title: '',
};
