import React from "react";

type Props = {
  value: string;
  onClick: () => void;
};

export const ViewNotificationDestination: React.FC<Props> = ({
  value,
  onClick,
}) => {
  return (
    <div>
      <div>{value}</div>
      <button onClick={onClick}>編集</button>
    </div>
  );
};
