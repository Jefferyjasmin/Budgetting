import HeaderBox from "@/components/HeaderBox";
import RIghtSidebar from "@/components/RIghtSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  console.log("this is logged in", loggedIn);
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="welcome"
              user={loggedIn?.name || "Guest"}
              subtext="access and manage your account and transaction"
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />
          </header>
        </div>
        <RIghtSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 123.5 }, { currentBalance: 2002.5 }]}
        />
      </section>
    </div>
  );
};

export default Home;
