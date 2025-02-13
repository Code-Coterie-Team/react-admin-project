function ChartFramework(props: ChartFrameworks) {
  return (
    <div className="bg-menuBody p-5 rounded-lg border-bmenuBody border border-solid ">
      <h2 className="text-lg font-medium pb-4 text-gray-100">{props.title}</h2>
      {props.nameChart}
    </div>
  );
}

export default ChartFramework;
