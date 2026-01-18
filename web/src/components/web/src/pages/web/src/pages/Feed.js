import React from 'react';
import video1 from '../../public/videos/sample1.mp4';
import video2 from '../../public/videos/sample2.mp4';

export default function Feed() {
  return (
    <div>
      <h2>Feed wideo - Web</h2>
      <video src={video1} controls width="300" />
      <video src={video2} controls width="300" />
    </div>
  );
}
