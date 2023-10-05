'use client';
import { Slider } from '@radix-ui/react-slider';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import {
  AiFillStepBackward,
  AiFillStepForward,
  AiOutlineLoading3Quarters,
} from 'react-icons/ai';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';
// @ts-ignore
import useSound from 'use-sound';

const tracks = [
  {
    track: '/at-my-worst.mp3',
    title: 'At my worst',
    url: '/at-my-worst.jpeg',
    author: 'Pink Sweat$',
  },
  {
    track: '/can-i-have-this-dance.mp3',
    title: 'Can I have this dance',
    url: '/can-i-have-this-dance.jpeg',
    author: 'Vanessa Hudgens, Zac Efron',
  },
  {
    track: '/dua-em-ve-nha.mp3',
    title: 'Đưa em về nhà',
    url: '/dua-em-ve-nha.jpeg',
    author: 'Grey D',
  },
  {
    track: '/i-dont-want-miss-a-thing.mp3',
    title: "I don't want miss a thing",
    url: '/i-dont-want-miss-a-thing.jpeg',
    author: 'Aerosmith (Boyce Avenue ft. Jennel Garcia cover)',
  },
  {
    track: '/la-vien-rose.mp3',
    title: 'La vien rose',
    url: '/la-vien-rose.jpeg',
    author: 'Daniela Andrade',
  },
  {
    track: '/love-me-like-you.mp3',
    title: 'Love me like you',
    url: '/love-me-like-you.jpeg',
    author: 'Little mix',
  },
  {
    track: '/lovely.mp3',
    title: '사랑스러워',
    url: '/lovely.jpeg',
    author: 'Kim Jong Kook',
  },
  {
    track: '/ngo-cham.mp3',
    title: 'Ngõ chạm',
    url: '/ngo-cham.jpeg',
    author: 'Big Daddy x Emily',
  },
  {
    track: '/no-place.mp3',
    title: 'No place',
    url: '/no-place.jpeg',
    author: 'Backstreet boys',
  },
  {
    track: '/perfect.mp3',
    title: 'Perfect',
    url: '/perfect.jpeg',
    author: 'Ed Sheeran',
  },
  {
    track: '/photograph.mp3',
    title: 'Photograph',
    url: '/photograph.jpeg',
    author: 'Ed Sheeran',
  },
];

const volumes = new Array(20).fill(0).map((_, index) => index * 5);

export const Player: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [currentSong, setCurrentSong] = useState(0);

  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

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
    sound?.play();

    return () => {
      sound?.unload();
    };
  }, [sound]);

  const handlePlay = () => {
    if (!isPlaying) {
      return play();
    } else pause();
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else setVolume(0);
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
      className='fixed bottom-0 z-50 bg-black py-2 h-[80px] px-4 w-full'
    >
      <div className='grid grid-cols-2 md:grid-cols-3 h-full'>
        <div className='flex pl-16 justify-start w-full'>
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
        <div className='hidden md:flex col-auto w-full justify-end items-center'>
          <div
            onClick={handlePlay}
            className='h-10 w-10 flex items-center p-1 cursor-pointer bg-white justify-center rounded-full'
          >
            <Icon className='text-black' size={30} />
          </div>
        </div>

        <div className='flex md:hidden h-full justify-end items-center w-full max-w-[722px] gap-x-6'>
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

        <div className='hidden md:flex w-full justify-end pr-2'>
          <div className='flex items-center gap-x-2 w-[120px]'>
            <VolumeIcon
              onClick={toggleMute}
              className='cursor-pointer'
              size={34}
            />
            <Slider
              value={volumes}
              onValueChange={(value) => console.log(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
