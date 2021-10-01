import React, { useState } from "react";
import { EditNotificationDestination } from "../components/EditNotificationDestination";
import { ViewNotificationDestination } from "../components/ViewNotificationDestination";
import { DisplayMode, NotificationDestination } from "./UseReducer";

export const UseState = () => {
  const [notifications, setNotifications] = useState<NotificationDestination[]>(
    []
  );
  const isNotificationMaximum = notifications.length >= 5;

  const changeNotificationDisplayMode = (
    index: number,
    displayMode: DisplayMode
  ) => {
    const newNotifications = notifications.map((o, mIndex) => {
      return index === mIndex ? { displayMode, email: o.email } : o;
    });
    setNotifications(newNotifications);
  };

  const addNewNotification = () => {
    setNotifications([...notifications, { displayMode: "edit", email: "" }]);
  };
  const updateNotificationEmail = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newNotifications = notifications.map((o, mIndex) => {
      return index === mIndex
        ? { displayMode: o.displayMode, email: e.target.value }
        : o;
    });
    setNotifications(newNotifications);
  };

  const deleteNotification = (index: number) => {
    const notificationsExcludedIndex = notifications.filter(
      (o, fIndex) => index !== fIndex
    );
    setNotifications(notificationsExcludedIndex);
  };

  return (
    <div className="App">
      {notifications.map((o, mIndex) => (
        <div key={mIndex}>
          {o.displayMode === "edit" ? (
            <EditNotificationDestination
              index={mIndex + 1}
              value={o.email}
              onChange={(e) => updateNotificationEmail(mIndex, e)}
              onDelete={() => deleteNotification(mIndex)}
              onSave={() => changeNotificationDisplayMode(mIndex, "view")}
            />
          ) : (
            <ViewNotificationDestination
              value={o.email}
              onClick={() => changeNotificationDisplayMode(mIndex, "edit")}
            />
          )}
        </div>
      ))}

      {!isNotificationMaximum ? (
        <button onClick={addNewNotification}>追加</button>
      ) : null}
    </div>
  );
};
