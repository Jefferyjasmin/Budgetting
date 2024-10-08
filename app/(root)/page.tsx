import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Jeffery",
  };
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="welcome"
              user={loggedIn?.firstName || "Guest"}
              subtext="access and manage your account and transaction"
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />
          
          </header>
        </div>
      </section>
    </div>
  );
};

export default Home;
