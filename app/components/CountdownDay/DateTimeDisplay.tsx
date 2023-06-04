import React, { useMemo } from "react";

interface IProps {
  value: number;
  type: string;
}

export function DateTimeDisplay(props: IProps) {
  const { value, type } = props;
  const renderMain = useMemo(() => {
    return (
      <div className="p-2 rounded-md md:p-5 bg-white/20">
        <h3>{value}</h3>
        <h5 className="text-xs md:text-sm">{type}</h5>
      </div>
    );
  }, [value, type]);

  return renderMain;
}

export default DateTimeDisplay;
