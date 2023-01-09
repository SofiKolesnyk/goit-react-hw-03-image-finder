import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.css'

const Loader = () => {
  return (
    <div className={s.container}>
      <ThreeDots
        height="90"
        width="90"
        radius="10"
        color="#c918a2"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
