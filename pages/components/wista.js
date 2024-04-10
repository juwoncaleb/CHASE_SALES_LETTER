import React from 'react';

const WistiaEmbed = ({ videoId }) => {
  return (
    <iframe
      className="wistia-embed" // Optional class for styling
      src={`https://fast.wistia.com/embed/medias/${videoId}`}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title="Wistia Video Embed" // Optional title for accessibility
    />
  );
};

export default WistiaEmbed;
