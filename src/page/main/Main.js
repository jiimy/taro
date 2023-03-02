import React, { useState } from 'react'
import Card from '../../components/card/Card'
import InfoModal from '../../components/portalModal/modal/InfoModal';
import './main.scss';

const Main = () => {
   const [onModal, setOnModal] = useState(false);

  return (
    <div className="main-page">
      <Card />
      <div className="btn-wrap">
        <button onClick={() => setOnModal(true)}>결과보기</button>
      </div>
      {onModal && <InfoModal setOnModal={() => setOnModal()} />}
    </div>
  );
}

export default Main