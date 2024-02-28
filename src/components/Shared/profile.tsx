import React from 'react';

interface ProfileProps {
  width: string;
  height: string;
  imageSource: string;
}

const Profile: React.FC<ProfileProps> = ({ width, height, imageSource }) => {
  return (
    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%" data-darkreader-inline-stopcolor="" style={{ '--darkreader-inline-stopcolor': '#a93a06' }}></stop>
          <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%" data-darkreader-inline-stopcolor="" style={{ '--darkreader-inline-stopcolor': '#b97403' }}></stop>
        </linearGradient>
      </defs>
      {/* <image href={imageSource} x="0" y="0" width="100" height="100" /> */}
    </svg>
  );
};

export default Profile;
