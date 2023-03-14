import React, { useEffect, useState } from "react";

// spreadType:number 을 받아오면 카드 갯수:number return 해주는 hooks
function useCount(type) {
  const [data, setData] = useState();

  useEffect(() => {
    switch (type) {
      case 1:
        setData(1);
        break;
      case 2:
        setData(3);
        break;
      case 3:
        setData(3);
        break;
      case 4:
        setData(7);
        break;
      case 5:
        setData(10);
        break;
      case 6:
        setData(7);
        break;
      case 7:
        setData(13);
        break;
      case 8:
        setData(8);
        break;
      default:
        break;
    }
  }, [type]);

  return data;
}

export default useCount;
