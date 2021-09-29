import React from "react";

type Props = {
  index: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onDelete: () => void;
};

export const EditNotificationDestination: React.FC<Props> = ({
  index,
  value,
  onChange,
  onSave,
  onDelete,
}) => {
  return (
    <div>
      <span>通知先{index}</span>
      <input value={value} onChange={onChange} />
      <button onClick={onSave}>編集</button>
      <button onClick={onDelete}>編集</button>
    </div>
  );
};
