// components/InternetStatus.tsx

import { useEffect, useState } from "react";

interface PropsType {
  children: React.ReactNode;
}

const InternetStatus: React.FC<PropsType> = (props) => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  if (!isOnline) return <div>Offline</div>;
  else return <>{props.children}</>;
};

export default InternetStatus;
