import Headerbox from "@/components/Headerbox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
    const loggedIn = {
        firstName: "Shiv",
        lastName: "Buda",
        email: "Shiv@hotmail.com",
    };
    return (
        <section className="flex">
            <div className="flex-grow">
                <header className="flex">
                    <Headerbox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your account and transation effiiently"
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                RECENT TRANSACTION
            </div>
            <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 250.50}, {currentBalance: 330.30}]} />
        </section>
    );
};

export default Home;
