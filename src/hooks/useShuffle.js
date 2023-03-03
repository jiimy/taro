import React, { useEffect, useState } from "react";

function useShuffle1(getdata) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function shuffling() {
      const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
      setData(shuffle(getdata));
    }
    shuffling();
  }, []);
  return data;
}

export default useShuffle1;
