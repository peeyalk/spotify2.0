import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  LogoutIcon,
} from '@heroicons/react/outline';

import { signOut } from 'next-auth/react';

function Sidebar({ session }) {
  return (
    <div className='text-xm h-screen overflow-y-scroll border-r border-gray-900 p-5 text-gray-500 '>
      <div className='space-y-4'>
        <button
          className='flex items-center space-x-2 hover:text-white'
          onClick={() => signOut({ callbackUrl: '/login' })}
        >
          <LogoutIcon className='h-5 w-5' />
          <p>Logout</p>
        </button>
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
        <hr className='border-t-[0.1px] border-gray-900' />

        {/* playlists... */}
        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
      </div>
    </div>
  );
}
export default Sidebar;