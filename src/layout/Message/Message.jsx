import { useEffect, useState } from 'react';

import { BoxOfMessage } from './styles';

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && <BoxOfMessage type={type}>{msg}</BoxOfMessage>}
      {/* */}
    </>
  );
}

export default Message;
