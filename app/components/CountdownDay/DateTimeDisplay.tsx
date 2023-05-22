import React, { useMemo } from "react";

interface IProps {
  value: number;
  type: string;
}

export function DateTimeDisplay(props: IProps) {
  const { value, type } = props;
  const renderMain = useMemo(() => {
    return (
      <div className="">
        <h3>{value}</h3>
        <h5 className="text-sm">{type}</h5>
      </div>
    );
  }, [value, type]);

  return renderMain;
}

export default DateTimeDisplay;
