import { Notification03 } from "../icons";
import ToggleButton from "./ToggleButton";
import ItemNOtifiication from "./ItemNOtifiication";
import TitlePart from "./TitlePart";

function Notifications() {
  const listNotifications = [
    {
      title: "Push Notifications",
      state: <ToggleButton initialState={true} />,
    },
    {
      title: "Email Notifications",
      state: <ToggleButton initialState={false} />,
    },
    {
      title: "Email Notifications",
      state: <ToggleButton initialState={true} />,
    },
  ];
  return (
    <div className="notifications mb-8 bg-menuBody p-6 rounded-lg border-bmenuBody border border-solid">
      <ItemConnectAccount
        iconTitlePart={
          <Notification03
            className="text-indigo-400"
            width="1.75rem"
            height="1.75rem"
          />
        }
        titlePart={"Notifications"}
      />
      <ItemNOtifiication itemNotification={listNotifications} />
    </div>
  );
}

export default Notifications;
