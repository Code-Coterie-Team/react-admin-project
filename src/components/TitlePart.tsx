import { ITitlePart } from "../types/types";

function TitlePart(props: ITitlePart) {
  return (
    <div className="flex flex-row gap-4 mb-4">
      {props.iconTitlePart}
      <h2 className="font-semibold text-xl text-gray-100">{props.titlePart}</h2>
    </div>
  );
}

export default TitlePart;
