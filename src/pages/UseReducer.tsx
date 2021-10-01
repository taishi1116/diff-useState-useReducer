import { EditNotificationDestination } from "../components/EditNotificationDestination";
import { ViewNotificationDestination } from "../components/ViewNotificationDestination";
import { useReducer } from "react";
import { reducer } from "../reducer/reducer";

export type DisplayMode = "view" | "edit";
export type NotificationDestination = {
  displayMode: DisplayMode;
  email: string;
};

const initialState: NotificationDestination[] = [];

export const UseReducer = () => {
  const [notifications, dispatch] = useReducer(reducer, initialState);

  const isNotificationMaximum = notifications.length >= 5;
  return (
    <div className="App">
      {notifications.map((o, mIndex) => (
        <div key={mIndex}>
          {o.displayMode === "edit" ? (
            <EditNotificationDestination
              index={mIndex + 1}
              value={o.email}
              onChange={(e) =>
                dispatch({
                  type: "updateNotification",
                  payload: { index: mIndex, value: e.target.value },
                })
              }
              onDelete={() =>
                dispatch({
                  type: "deleteNotification",
                  payload: { index: mIndex },
                })
              }
              onSave={() =>
                dispatch({
                  type: "changeDisplayMode",
                  payload: { index: mIndex, displayMode: "view" },
                })
              }
            />
          ) : (
            <ViewNotificationDestination
              value={o.email}
              onClick={() =>
                dispatch({
                  type: "changeDisplayMode",
                  payload: { index: mIndex, displayMode: "edit" },
                })
              }
            />
          )}
        </div>
      ))}

      {!isNotificationMaximum ? (
        <button onClick={() => dispatch({ type: "newNotification" })}>
          追加
        </button>
      ) : null}
    </div>
  );
};
