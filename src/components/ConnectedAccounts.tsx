import { Help, Plus } from "../icons";
import ItemConnectAccount from "./ItemConnectAccount";
import TitlePart from "./TitlePart";

function ConnectedAccounts() {
  const listConnectedAccount = [
    {
      srcimg: "src/img/google.png",
      altimg: "googleimg",
      titleAccount: "Google",
      initialState: true,
    },
    {
      srcimg: "src/img/facebook.svg",
      altimg: "facebookimg",
      titleAccount: "Facebook",
      initialState: false,
    },
    {
      srcimg: "src/img/x.png",
      altimg: "ximg",
      titleAccount: "Twitter",
      initialState: true,
    },
  ];
  return (
    <div className="connectedAccounts mb-8 bg-menuBody p-6 rounded-lg border-bmenuBody border border-solid">
      <TitlePart
        iconTitlePart={
          <Help
            className="text-indigo-400"
            width="1.75rem"
            height="1.75rem"
          />
        }
        titlePart={"Connected Accounts"}
      />
      <ItemConnectAccount itemAccount={listConnectedAccount} />
      <button className="flex gap-2 items-center text-indigo-400 hover:text-indigo-300">
        <Plus
          width="1.25rem"
          height="1.25rem"
        />
        <span>Add Account</span>
      </button>
    </div>
  );
}

export default ConnectedAccounts;
