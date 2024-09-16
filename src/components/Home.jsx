import { useEffect, useRef, useState } from "react";
import bgpic from "../pictures/.trashed-1708179083-1705579161275.jpg";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  let [data, setdata] = useState([]);
  let BoxImage = useRef();
  let BoxContent = useRef();
  let BoxTitle = useRef();
  let i = 0;
  useEffect(() => {
    axios
      .get("http://localhost:3000/content")
      .then((response) => {
        setdata(response.data);
        console.log("get the data");
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  const scrollingImage = [
    {
      title: "SRK's limited responsible AI blueprint",
      content:
        "Accenture has operationalized ethical AI in our company. Now, our responsible AI program is also helping clients around the world use AI intelligently and responsibly.",
      Image: "/Accenture1.webp",
    },
    {
      title: "The metaverse meets public good",
      content:
        "The World Economic Forum, SRK's limited and Microsoft have built a purpose-driven platform in the metaverse to drive action and cooperation and to revolutionize progress.",
      Image: "/Accenture2.webp",
    },
    {
      title: "Cybersecurity in orbit",
      content:
        "As outer space gets more crowded and contested, QuSecure is protecting communications and data transmission with the agility required for the world of post-quantum computing.",
      Image: "/Accenture3.webp",
    },
    {
      title: "Generative AI transforming customer service",
      content:
        "Sifting through thousands of emails daily is tedious work, but generative AI makes it easy. A multinational bank is using generative AI to quickly process and respond to client emails used for the settling, asset servicing and reconciliation of trades – normally a massive manual task. It directs emails to the right teams and drafts responses for employees to check. The result? Faster and more enjoyable customer service, a boost in worker efficiency and more cost-effective operations.",
      Image: "/Accenture4.jpg",
    },
    {
      title: "Mondelēz International’s Data and AI Transformation",
      content:
        "The global snacking giant is laying a tasty foundation for reinvention and growth. Accenture is helping Mondelēz International to embrace the power of data and AI, build a strong digital core and implement interoperable cloud-enabled technology.",
      Image: "/Accenture5.jpg",
    },
    {
      title: "Creating a sense of belonging",
      content:
        "A global retailer and Accenture co-created a multiyear inclusion and diversity strategy to facilitate a greater sense of belonging for their people.",
      Image: "/Accenture6.webp",
    },
    {
      title: "Egg gives electric vehicle charging a jolt",
      content:
        "Seeking sustainability, more people are buying electric vehicles. To keep them powered up, Liberty Global and Accenture developed Egg, a renewable energy brand that makes installing home EV chargers easy and affordable.",
      Image:
        "/Accenture7.webp",
    },
    {
      title: "Reimagining Saudi Arabia’s economy",
      content:
        "In just five years, the Saudi Data and Artificial Intelligence Authority, in partnership with Accenture, has built a strong foundation for a globally competitive, data- and AI-driven economy.",
      Image:
        "/Accenture8.webp",
    },
  ];
  let News = [
    {
      id: "1",
      date: "2024 March 27",
      headline:
        "SRK's limited Invests in Sanctuary AI to Bring AI-Powered, Humanoid Robotics to Work Alongside Humans",
      detailes: "",
    },
    {
      id: "2",
      date: "2024 March 27",
      headline:
        "SRK's limited Invests in Sanctuary AI to Bring AI-Powered, Humanoid Robotics to Work Alongside Humans",
      detailes: "",
    },
    {
      id: "3",
      date: "2024 March 27",
      headline:
        "Accenture Invests in Sanctuary AI to Bring AI-Powered, Humanoid Robotics to Work Alongside Humans",
      detailes: "",
    },
    {
      id: "4",
      date: "2024 March 27",
      headline:
        "Accenture Invests in Sanctuary AI to Bring AI-Powered, Humanoid Robotics to Work Alongside Humans",
      detailes: "",
    },
  ];
  const LeftScroll = () => {
    if (i == 0) {
      i = scrollingImage.length - 1;
      BoxImage.current.src = scrollingImage[i].Image;
      BoxTitle.current.textContent = scrollingImage[i].title;
      BoxContent.current.textContent = scrollingImage[i].content;
    } else {
      i = i - 1;
      BoxImage.current.src = scrollingImage[i].Image;
      BoxTitle.current.textContent = scrollingImage[i].title;
      BoxContent.current.textContent = scrollingImage[i].content;
    }
  };
  const RightScroll = () => {
    if (i == scrollingImage.length - 1) {
      i = 0;
      BoxImage.current.src = scrollingImage[i].Image;
      BoxTitle.current.textContent = scrollingImage[i].title;
      BoxContent.current.textContent = scrollingImage[i].content;
    } else {
      i = i + 1;
      BoxImage.current.src = scrollingImage[i].Image;
      BoxTitle.current.textContent = scrollingImage[i].title;
      BoxContent.current.textContent = scrollingImage[i].content;
    }
  };
  return (
    <div id={style.bg}>
      <div id={style.line1}>
        <div id={style.title}>
        <video controls autoPlay loop muted height={400} width={800} style={{position:"absolute"}} src="/BackgroundVideo.mp4"></video>
          <p>
            TOGETHER WE
            <br />REINVENTED
          </p>
        </div>
        <div id={style.titlecontent}>
          <p>
            Reinvention is about breaking industry norms. Reimagining iconic
            brands. Bringing new products, ideas and ways of working to life
            with emerging technology.
          </p>
        </div>
      </div>
      <div id={style.cards}>
        {data.map((x) => {
          return (
            <Link to={`/CreativeFivestar/${x.id}`}>
              <div
                id={style.card1}
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${x.imgUrl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  transition:"transform 0.5s ease"
                }}
              >
                <dl>
                  <dt>{x.title}</dt>
                  <br />
                  <br />
                  <dd>{x.heading}</dd>
                </dl>
                <br />
                <p>{x.info}</p>
                <button>Expand</button>
              </div>
            </Link>
          );
        })}
      </div>
      <div id={style.cotetion}>
        <p>
          360<sup>o</sup> VALUE
        </p>
        <h1>
          Everyday, We embrance change and create a value
          <br /> for all our stakeholders, in every part of the world
        </h1>
      </div>
      <div id={style.scrollingInfo}>
        <div id={style.Image}>
          <img src={scrollingImage[0].Image} alt="" ref={BoxImage} />
          <br />
          <button onClick={LeftScroll}>Previous</button>
          <button onClick={RightScroll}>Next</button>
        </div>
        <div id={style.Content}>
          <h1 ref={BoxTitle}>{scrollingImage[0].title}</h1>
          <br />
          <p ref={BoxContent}>{scrollingImage[0].content}</p>
        </div>
      </div>
      <div id={style.cotetion2}>
        <p>
          Global Recognitaion and <br />
          Awards
        </p>
      </div>
      <div id={style.animecard1}>
        <h2>An Ethical Business Leader</h2>
        <div id={style.animecard1info}>
          <p>
            17 consecutive years as one of Ethisphere's worlds most ethical
            companies.
            <br />
            we strive to do the right thing and act as a powerful force for
            good.Ethisphere recognizes companies that uphold ethical practices
            that positively impact employees,communities, and stakeholders while
            promoting sustainable business performance.
          </p>
        </div>
      </div>
      <div id={style.animecard2}>
        <h2>A Great Place To Work</h2>
        <div id={style.animecard2info}>
          <p>
            No. 10 on the World's Best Workplaces™ list.
            <br />
            This recognition is based on feedback from our people—measuring
            their level of trust, pride and camaraderie at work.
          </p>
        </div>
      </div>
      <div id={style.animecard3}>
        <h2>An Infuencial Innovator</h2>
        <div id={style.animecard3info}>
          <p>
            Julie Sweet, our chair and CEO, is one of the TIME100 Most
            Influential People of 2024.
            <br />
            Every day, Julie and all of us at Accenture help the world’s leading
            companies embrace continuous reinvention, with innovation and people
            at the center.
          </p>
        </div>
      </div>
      <marquee
        behavior="scroll"
        direction=""
        scrollamount="20"
        id={style.Marquee}
      >
        <div id={style.NewsContent}>
          {News.map((y) => {
            return (
              <div id={style.news}>
                <h3>{y.date}</h3>
                <h1>{y.headline}</h1>
              </div>
            );
          })}
        </div>
      </marquee>
    </div>
  );
};
export default Home;
