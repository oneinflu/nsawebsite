'use client';

import React from 'react';
import Plyr from 'plyr-react';
import type { SourceInfo } from 'plyr';
import 'plyr-react/plyr.css';

type Props = {
  src: string;
  poster?: string;
  className?: string;
  
};

export default function VideoPlayer({ src, poster, className }: Props) {
  const source: SourceInfo = {
    type: 'video',
    sources: [{ src, type: 'video/mp4' }],
    ...(poster ? { poster } : {}),
  };

  const options = {
    controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'mute',
      'volume',
      'settings',
      'pip',
      'airplay',
      'fullscreen',
    ],
    clickToPlay: true,
    autopause: false,
    storage: { enabled: false },
  };

  return (
    <div className={className}>
      <Plyr source={source} options={options} />
    </div>
  );
}