import React from 'react';
import 'twin.macro';

import {detectBrowser} from '../util/browser';
import {StoreLinks} from '../Background';

import Icon from '../components/Icon';

const Footer: React.FC = () => {
  return (
    <>
      <footer tw="py-4 mt-16">
        <div tw="flex items-center text-gray-800">
          <span tw="block w-1/3 mr-2 border border-gray-200" />
          <a
            href={
              detectBrowser() === 'firefox'
                ? StoreLinks.firefox
                : StoreLinks.chrome
            }
            target="_blank"
            rel="nofollow noopener noreferrer"
            tw="flex flex-col items-center justify-center"
          >
            <div tw="flex items-center mt-1">
              <Icon
                tw="w-4 h-4 mx-1 text-yellow-500 fill-current"
                name="star-yellow"
              />
              <Icon
                tw="w-4 h-4 mx-1 text-yellow-500 fill-current"
                name="star-yellow"
              />
              <Icon
                tw="w-4 h-4 mx-1 text-yellow-500 fill-current"
                name="star-yellow"
              />
              <Icon
                tw="w-4 h-4 mx-1 text-yellow-500 fill-current"
                name="star-yellow"
              />
              <Icon
                tw="w-4 h-4 mx-1 text-gray-400 fill-current"
                name="star-white"
              />
            </div>
            <p tw="mb-0 mt-1">Rate on Store</p>
          </a>
          <span tw="block w-1/3 ml-2 border border-gray-200" />
        </div>

        <div tw="flex items-center justify-around text-center divide-x divide-gray-300 my-4">
          <a
            href="https://kutt.it"
            target="blank"
            rel="nofollow noopener noreferrer"
            tw="w-1/3 p-1 cursor-pointer"
          >
            Kutt.it
          </a>
          <a
            href="https://github.com/thedevs-network/kutt-extension/issues/new"
            target="blank"
            rel="nofollow noopener noreferrer"
            tw="w-1/3 py-1 px-2 cursor-pointer"
          >
            Report an issue
          </a>
          <a
            href="https://github.com/thedevs-network/kutt-extension"
            target="blank"
            rel="nofollow noopener noreferrer"
            tw="w-1/3 p-1 cursor-pointer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
};

export default React.memo(Footer);
