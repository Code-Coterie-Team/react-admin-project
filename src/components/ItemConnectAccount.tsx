import ButtonConnect from "./ButtonConnect";
import { IListConnectAccounts } from "../types/api";

function ItemConnectAccount({ itemAccount }: IListConnectAccounts) {
  return (
    <>
      {itemAccount.map((item) => (
        <div className="flex flex-row justify-between py-3">
          <div className="flex flex-row gap-2">
            <img
              className="size-6"
              src={item.srcimg}
              alt={item.altimg}
            />
            <span className="text-base">{item.titleAccount}</span>
          </div>
          <ButtonConnect initialState={item.initialState} />
        </div>
      ))}
    </>
  );
}

export default ItemConnectAccount;
