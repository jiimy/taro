import AllCard from 'components/card/AllCard';
import { useState } from 'react';
import classNames from 'classnames';

const AllCardPage = () => {
  const [tab, setTab] = useState('upper')

  return (
    <div className='main-page'> 
      올카드페이지
      <div>
        <span onClick={() => setTab('upper')} className={classNames('', {
          'is-select': tab === 'upper'
        })}>정방향</span>
        <span onClick={() => setTab('lower')} className={classNames('', {
          'is-select': tab === 'lower'
        })}>역방향</span>
      </div>
      <AllCard direction={tab}/>
    </div>
  );
};

export default AllCardPage;