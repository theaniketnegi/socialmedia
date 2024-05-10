import LeftSideBar from "@components/layout/LeftSideBar"
import MainContainer from "@components/layout/MainContainer"
import TopBar    from "@components/layout/TopBar"
import RightSideBar    from "@components/layout/RightSideBar"
import BottomBar from "@components/layout/BottomBar";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "social media app",
  description: "Next Js Social Media Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-row">
          <LeftSideBar />
          <MainContainer>
            <TopBar />
            {children}
          </MainContainer>
          <RightSideBar />
        </main>
        <BottomBar />        
      </body>
    </html>
  );
}
