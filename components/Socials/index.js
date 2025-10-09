import Button from "../Button";
import yourData from "../../data/portfolio.json";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Socials = ({ className }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap ${
        mounted && theme === "dark"
          ? "hover:border-[rgba(107,107,248,0.8)]"
          : "hover:border-[rgba(248,107,223,1)]"
      }`}>
      {yourData.socials.map((social, index) => (
        <Button type="primary" key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
