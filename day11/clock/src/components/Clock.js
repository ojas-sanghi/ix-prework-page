import React, { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("Component did mount or update");
  });

  useEffect(() => {
    console.log("Component did mount");

    const intervalId = setInterval(() => {
      setDate(new Date());
      console.log("date set from interval");
    }, 1000);

    return () => {
      console.log("component will unmount");
      clearInterval(intervalId);
    };
  }, []);

  return <div className="mt-4 text-center">{date.toLocaleTimeString()}</div>;
}
