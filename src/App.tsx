import { EditNotificationDestination } from "./components/UseReducerPractice/EditNotificationDestination";
import { ViewNotificationDestination } from "./components/UseReducerPractice/ViewNotificationDestination";
import { useReducer } from "react";
import { reducer } from "./components/UseReducerPractice/reducer";

export type DisplayMode = "view" | "edit";
export type NotificationDestination = {
  displayMode: DisplayMode;
  email: string;
};

const initialState: NotificationDestination[] = [];

export default function App() {
  const [notifications, dispatch] = useReducer(reducer, initialState);

  const isNotificationFillMaximum = notifications.length <= 5;
  return (
    <div className="App">
      {notifications.map((o, mIndex) => (
        <>
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
                  payload: { index: mIndex, displayMode: "view" },
                })
              }
            />
          )}
        </>
      ))}

      {isNotificationFillMaximum ? (
        <button onClick={() => dispatch({ type: "newNotification" })}>
          追加
        </button>
      ) : null}
    </div>
  );
}
