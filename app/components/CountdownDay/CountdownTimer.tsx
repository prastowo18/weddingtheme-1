import React, { useMemo } from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "@/app/hooks/useCountdown";

interface IProps {
  targetDate: any;
}

interface IPropsShowCounter {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Expired = () => {
  return (
    <div className="flex flex-row justify-center w-full pb-20 text-2xl gap-7 md:text-4xl md:gap-28 mt-7">
      <DateTimeDisplay value={0} type={"Days"} />
      <DateTimeDisplay value={0} type={"Hours"} />
      <DateTimeDisplay value={0} type={"Minutes"} />
      <DateTimeDisplay value={0} type={"Seconds"} />
    </div>
  );
};

const ShowCounter = (props: IPropsShowCounter) => {
  const { days, hours, minutes, seconds } = props;
  return (
    <div className="flex flex-row justify-center w-full pb-20 text-2xl gap-7 md:text-4xl md:gap-28 mt-7">
      <DateTimeDisplay value={days} type={"Days"} />
      <DateTimeDisplay value={hours} type={"Hours"} />
      <DateTimeDisplay value={minutes} type={"Minutes"} />
      <DateTimeDisplay value={seconds} type={"Seconds"} />
    </div>
  );
};

export function CountdownTimer(props: IProps) {
  const { targetDate } = props;
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const renderMain = useMemo(() => {
    if (days + hours + minutes + seconds <= 0) {
      return <Expired />;
    } else {
      return (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      );
    }
  }, [targetDate, days, hours, minutes, seconds]);

  return renderMain;
}

export default CountdownTimer;
