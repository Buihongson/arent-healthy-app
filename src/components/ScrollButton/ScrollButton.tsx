import React, { useState } from 'react';
import classNames from 'classnames';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 200) {
      setIsVisible(true);
    } else if (scrolled <= 200) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      className={classNames(
        'w-12 h-12 border-solid rounded-full border-[#777777] hover:border-primary border-[1px] flex items-center justify-center text-[#777777] hover:opacity-75 hover:bg-primary fixed bottom-40 right-10',
        { inline: isVisible, hidden: !isVisible }
      )}
    >
      <img src="/assets/images/logo/icon_scroll.svg" />
    </button>
  );
};

export default ScrollButton;
