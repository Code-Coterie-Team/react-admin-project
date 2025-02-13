import Profile from "../../components/Profile";
import Notifications from "../../components/Notifications";
import Security from "../../components/Security";
import ConnectedAccounts from "../../components/ConnectedAccounts";
import DangerZone from "../../components/DangerZone";

function Settings() {
  return (
    <div className="setting py-6 px-8 max-w-4xl mx-auto">
      <Profile />
      <Notifications />
      <Security />
      <ConnectedAccounts />
      <DangerZone />
    </div>
  );
}

export default Settings;
