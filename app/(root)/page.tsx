import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions";

import RIghtSidebar from "@/components/RIghtSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";

import React from "react";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });
  if (!accounts) return;

  const accountData = accounts?.data;
  const appwriteItemId = (id as string) || accountData?.appwriteItemId;
  const account = await getAccount({ appwriteItemId });

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
              accounts={accountData}
              totalBanks={accounts?.totalBanks}
              totalCurrentBalance={accounts?.totalCurrentBalance}
            />
          </header>
          <RecentTransactions
            accounts={accountData}
            transactions={account?.transaction}
            appwriteItemId={appwriteItemId}
            page={currentPage}
          />
        </div>
        <RIghtSidebar
          user={loggedIn}
          transactions={accounts?.transactions}
          banks={accountData?.slice(0, 2)}
        />
      </section>
    </div>
  );
};

export default Home;
