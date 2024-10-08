"use client";
import React from "react";
import CountUp from "react-countup";
const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="total-balance-amount flex-center gap-2 w-full">
      <CountUp
        end={amount}
        duration={1.5}
        decimal="."
        prefix="$"
        decimals={2}
      />
    </div>
  );
};

export default AnimatedCounter;
