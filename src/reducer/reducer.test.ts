import { reducer } from "./reducer";
import { NotificationDestination } from "../pages/UseReducer";

describe("reducerのテスト", () => {
  let notifications: NotificationDestination[] = [
    { displayMode: "view", email: "dummy01@example.com" },
    { displayMode: "view", email: "dummy02@example.com" },
    { displayMode: "view", email: "dummy03@example.com" },
  ];

  beforeEach(() => {
    notifications = [
      { displayMode: "view", email: "dummy01@example.com" },
      { displayMode: "view", email: "dummy02@example.com" },
      { displayMode: "view", email: "dummy03@example.com" },
    ];
  });

  describe("changeDisplayMode", () => {
    it("指定した順番の画面状態が変わる", () => {
      const changedNotifications = [
        { displayMode: "view", email: "dummy01@example.com" },
        { displayMode: "edit", email: "dummy02@example.com" },
        { displayMode: "view", email: "dummy03@example.com" },
      ];
      expect(
        reducer(notifications, {
          type: "changeDisplayMode",
          payload: { index: 1, displayMode: "edit" },
        })
      ).toEqual(changedNotifications);
    });
    it("指定した順番が存在しない場合、状態は変わらない", () => {
      const changedNotifications = [
        { displayMode: "view", email: "dummy01@example.com" },
        { displayMode: "view", email: "dummy02@example.com" },
        { displayMode: "view", email: "dummy03@example.com" },
      ];
      expect(
        reducer(notifications, {
          type: "changeDisplayMode",
          payload: { index: -1, displayMode: "edit" },
        })
      ).toEqual(changedNotifications);
    });
  });
  describe("newNotification", () => {
    it("連絡先の新規入力項目が追加される", () => {
      const addedNotifications = [
        { displayMode: "view", email: "dummy01@example.com" },
        { displayMode: "view", email: "dummy02@example.com" },
        { displayMode: "view", email: "dummy03@example.com" },
        { displayMode: "edit", email: "" },
      ];
      expect(
        reducer(notifications, {
          type: "newNotification",
        })
      ).toEqual(addedNotifications);
    });
  });
  describe("updateNotification", () => {
    it("指定した順番のメールアドレスが変更される", () => {
      const updatedNotifications = [
        { displayMode: "view", email: "dummy01@example.com" },
        { displayMode: "view", email: "dummy02@example.com" },
        { displayMode: "view", email: "dummy03_updated@example.com" },
      ];
      expect(
        reducer(notifications, {
          type: "updateNotification",
          payload: { index: 2, value: "dummy03_updated@example.com" },
        })
      ).toEqual(updatedNotifications);
    });
    it("指定した順番が存在しない場合、状態は変わらない", () => {
      const nonUpdatedNotifications = [
        { displayMode: "view", email: "dummy01@example.com" },
        { displayMode: "view", email: "dummy02@example.com" },
        { displayMode: "view", email: "dummy03@example.com" },
      ];
      expect(
        reducer(notifications, {
          type: "updateNotification",
          payload: { index: -1, value: "dummy01_updated@example.com" },
        })
      ).toEqual(nonUpdatedNotifications);
    });
  });
  describe("fetchAllNotification", () => {
    it("連絡先情報が全て変更される", () => {
      const updatedNotifications = [
        { displayMode: "view", email: "dummy01_fetched@example.com" },
        { displayMode: "view", email: "dummy02_fetched@example.com" },
        { displayMode: "view", email: "dummy03_fetched@example.com" },
      ];

      expect(
        reducer(notifications, {
          type: "fetchAllNotification",
          payload: {
            values: [
              "dummy01_fetched@example.com",
              "dummy02_fetched@example.com",
              "dummy03_fetched@example.com",
            ],
          },
        })
      ).toEqual(updatedNotifications);
    });
  });
  describe("deleteNotification", () => {
    it("指定した順番の連絡先を削除", () => {
      const deletedNotifications = [
        { displayMode: "view", email: "dummy01@example.com" },
        { displayMode: "view", email: "dummy03@example.com" },
      ];

      expect(
        reducer(notifications, {
          type: "deleteNotification",
          payload: { index: 1 },
        })
      ).toEqual(deletedNotifications);
    });
    it("指定した順番が存在しない場合、状態は変わらない", () => {
      const deletedNotifications = [
        { displayMode: "view", email: "dummy01@example.com" },
        { displayMode: "view", email: "dummy02@example.com" },
        { displayMode: "view", email: "dummy03@example.com" },
      ];

      expect(
        reducer(notifications, {
          type: "deleteNotification",
          payload: { index: -1 },
        })
      ).toEqual(deletedNotifications);
    });
  });
});
