import CardData from 'constants/data';
import React from 'react';

const AllCard = ({ direction }) => {

  console.log('ccc', 

    CardData[0]?.content.readingType[1].upper[0]
  )

  return (
    <div>
      {CardData.map((item, i) => (
        <div>
          {item.index}번 {item.name}
          <img src={item.url} alt="" />
          <div>기본 의미</div>
          <span>{item.content.mean}</span>
          <br/><br/>
          <div>방향 의미 {direction === 'upper' ? '정방향' : '역방향'}</div>
          <span>{direction === 'upper' ? item.content.upperMean : item.content.lowerMean}</span>
          <br/><br/><br/><br/>
        </div>
      ))}
    </div>
  );
};

export default AllCard;