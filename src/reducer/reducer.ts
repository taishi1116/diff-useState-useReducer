import { NotificationDestination, DisplayMode } from "../pages/UseReducer";

type Actions =
  | {
      type: "changeDisplayMode";
      payload: { index: number; displayMode: DisplayMode };
    }
  | { type: "newNotification" }
  | { type: "updateNotification"; payload: { index: number; value: string } }
  | { type: "fetchAllNotification"; payload: { values: string[] } }
  | { type: "deleteNotification"; payload: { index: number } };

export const reducer = (
  state: NotificationDestination[],
  action: Actions
): NotificationDestination[] => {
  switch (action.type) {
    case "changeDisplayMode": {
      const { index, displayMode } = action.payload;

      return state.map((o, mIndex) => {
        return mIndex === index
          ? { displayMode: displayMode, email: o.email }
          : o;
      });
    }

    case "newNotification": {
      return [...state, { displayMode: "edit", email: "" }];
    }

    case "updateNotification": {
      const { index, value } = action.payload;
      return state.map((o, mIndex) => {
        return mIndex === index
          ? { displayMode: o.displayMode, email: value }
          : o;
      });
    }

    case "fetchAllNotification": {
      const { values } = action.payload;
      const newState: NotificationDestination[] = values.map((o) => {
        return {
          displayMode: "view",
          email: o,
        };
      });
      return newState;
    }

    case "deleteNotification": {
      const newState: NotificationDestination[] = state.filter(
        (o, index) => action.payload.index !== index
      );
      return newState;
    }
  }
};
