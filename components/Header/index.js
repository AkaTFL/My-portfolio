import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleContactScroll, handleResumeScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  const headerClasses = [
    "mt-10 hidden flex-row items-center justify-between sticky top-0 z-10 tablet:flex",
    "dark:text-white",
    mounted && theme === "light" ? "bg-white" : "bg-[rgb(18,18,18)]", // Adapte la couleur de fond au thème
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <Popover className="block mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <Image
                      width={24}
                      height={24}
                      alt={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    />
                  </Button>
                )}

                <Popover.Button>
                  <Image
                    width={20}
                    height={20}
                    alt="Menu"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className={headerClasses}>

        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Projects</Button>
            {showResume && (
              <Button onClick={handleResumeScroll}>
                Resume
              </Button>
            )}

            <Button onClick={handleContactScroll}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  width={24}
                  height={24}
                  alt={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  width={24}
                  height={24}
                  alt={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;