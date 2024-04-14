import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <div className="bg-white overflow-hidden flex flex-col h-screen">
                <Header />
                <div className="  mx-auto  ">
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default Layout;
