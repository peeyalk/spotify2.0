import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline';

import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { playlistIdState } from '../atoms/playlistAtoms';
import useSpotify from '../hooks/useSpotify';

function Sidebar({ session }) {
  const SpotifyAPI = useSpotify();
  const [playLists, setPlayLists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (SpotifyAPI.getAccessToken()) {
      SpotifyAPI.getUserPlaylists().then((data) => {
        setPlayLists(data.body.items);
        setPlaylistId(data.body.items[0].id);
      });
    }
  }, [session, SpotifyAPI]);

  return (
    <div className='text-xm h-screen overflow-y-scroll border-r border-gray-900 p-5 text-gray-500 '>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HomeIcon className='h-5 w-5' />
          <p>Home</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <SearchIcon className='h-5 w-5' />
          <p>Search</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <LibraryIcon className='h-5 w-5' />
          <p>Your Library</p>
        </button>

        {/* divider */}
        <hr className='border-t-[0.1px] border-gray-900' />

        <button className='flex items-center space-x-2 hover:text-white'>
          <PlusCircleIcon className='h-5 w-5' />
          <p>Create Playlist</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HeartIcon className='h-5 w-5' />
          <p>Like Songs</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <RssIcon className='h-5 w-5' />
          <p>Your Playlist</p>
        </button>

        {/* divider */}
        <hr className='border-t-[0.1px] border-gray-900' />

        {/* playlists... */}
        {playLists.map((playlist) => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
            className='cursor-pointer hover:text-white'
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
