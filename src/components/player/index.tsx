'use client';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import {
  AiFillStepBackward,
  AiFillStepForward,
  AiOutlineLoading3Quarters,
} from 'react-icons/ai';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { shuffle } from './shuffle_array';
import { tracks as originalTracks } from './tracks';
// @ts-ignore
import useSound from 'use-sound';

const tracks = shuffle(originalTracks)
export const Player: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const onPlayNext = () => {
    if (currentSong >= tracks.length - 1) {
      setCurrentSong(0);
    } else {
      setCurrentSong(currentSong + 1);
    }
  };

  const onPlayPrevious = () => {
    if (currentSong === 0) {
      setCurrentSong(tracks.length - 1);
    } else {
      setCurrentSong(currentSong + 1);
    }
  };

  const [play, { pause, sound, duration }] = useSound(
    tracks[currentSong].track,
    {
      //  volume: volume,
      onplay: () => setIsPlaying(true),
      onend: () => {
        setIsPlaying(false);
        onPlayNext();
      },
      onpause: () => setIsPlaying(false),
      format: ['mp3'],
    }
  );

  useEffect(() => {
    if (isPlaying) {
      sound?.play();
    }

    return () => {
      sound?.unload();
    };
  }, [sound]);

  const handlePlay = () => {
    if (!isPlaying) {
      return play();
    } else pause();
  };

  let Icon;
  if (!sound) {
    Icon = AiOutlineLoading3Quarters;
  } else if (isPlaying) {
    Icon = BsPauseFill;
  } else {
    Icon = BsPlayFill;
  }

  return (
    <div
      id='player'
      className='fixed bottom-0 z-50 bg-black py-2 h-[80px] px-4 md:px-0 w-full'
    >
      <div className='grid grid-cols-2 md:grid-cols-2 h-full'>
        <div className='flex pl-16 md:pl-0 justify-start w-full'>
          <div className='flex items-center gap-x-4'>
            <div className='flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md'>
              <div className='relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden'>
                <Image
                  src={tracks[currentSong].url}
                  fill
                  alt='Image'
                  className=' object-cover'
                />
              </div>
              <div className='flex flex-col gap-y-1 overflow-hidden'>
                <p className='text-white truncate'>
                  {tracks[currentSong].title}
                </p>
                <p className=' text-neutral-400 text-sm truncate'>
                  {tracks[currentSong].author}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='hidden md:hidden col-auto w-full justify-end items-center'>
          <div
            onClick={handlePlay}
            className='h-10 w-10 flex items-center p-1 cursor-pointer bg-white justify-center rounded-full'
          >
            <Icon className='text-black' size={30} />
          </div>
        </div>

        <div className='flex md:flex h-full justify-end items-center w-full max-w-[722px] gap-x-6'>
          <AiFillStepBackward
            onClick={onPlayPrevious}
            size={30}
            className='text-neutral-400 hover:text-white cursor-pointer transition'
          />
          <div
            onClick={handlePlay}
            className='flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer'
          >
            <Icon size={30} className='text-black' />
          </div>
          <AiFillStepForward
            onClick={onPlayNext}
            size={30}
            className='text-neutral-400 hover:text-white cursor-pointer transition'
          />
        </div>
      </div>
    </div>
  );
};
