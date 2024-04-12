import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import WistiaEmbed from "./components/wista";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const wistiaVideoId = "kww07pr27z"; // Replace with your actual video ID

  return (
    <div className="whole">
      <Header />
      <div className="context">
        <center>
          <p className="header_text"> Helping Real Estate Brokers</p>
          <p className="deasl">
            Close more deals{" "}
            <span className="while">
              While doing <span className="span"> LESS</span>
            </span>
          </p>
          <p className="sub_pain ">
            The old way; door-knocking , cold calling, buy LEADS or run ADS.
            Everyone swears this is the BEST way to grow. It works to some
            extent, however it requires a lot of effort and EVERYONE is doing
            this. The cheapest and most reliable way to reach a wider audience
            is having a STRONG ONLINE PRESENCE All our client started by
            watching the same video you about to WATCH
          </p>
          <p className="sub_pain"></p>
        </center>
        <iframe
          className="iframeEmbed"
          src="https://killerplayer.com/watch/video/c7f690ae-7131-4e42-bbd7-7a9d220c1be9"
          frameborder="0"
          allow="autoplay; gyroscope; picture-in-picture;"
          allowfullscreen
        ></iframe>

        <center>
          <div className="flex justify-center gap-8">
            <button className="get_started_button_green">
              <a href="https://www.chasestudio.co/contact">Get Started </a>
            </button>

            <button className="get_started_button_green">
              <a href="https://demolink-drab.vercel.app/">John's New Website </a>
            </button>
          </div>
        </center>
        <div className="fixed-background mt-14">
          <center className="stats">
            <p className="results"> THE ONLY WAY TO WIN</p>
            <div className="state_div">
              <p className="results_statment mb-8 mt-8">
                The only way to win , win as big as{" "}
                <a
                  className="serhant"
                  href="https://www.instagram.com/serhant/?hl=en"
                >
                  SERHANT
                </a>
                - Biggest Realtor in New York, is to be likeable. PEOPLE BUY
                FROM PEOPLE! The only reason why we both could be a good fit, is
                not only due to my service. However it is based on if we have
                MUTUAL likeness for each other. Same with real estate, the only
                way to get AHEAD , to truly get AHEAD us by having and AUTHENTIC
                personality that people are drawn to. You also do not have to be
                a SECRET! Most realtors are good at their job , however people
                cant just find them. When you type realtors in [your location],
                how easy was it to find yourself on google. THIS IS THE TYPICAL
                CLIENT JOURNEY OF MOST HOMEBUYERS AND HOMESELLERS
              </p>
              <div className="flex services justify-around mt-14 mb-10">
                <div>
                  <p className="stat_header">WEBSITE DEVELOPMENT</p>
                </div>
                <div>
                  <p className="stat_header">SEARCH ENGINE OPTIMIZATION</p>
                </div>
                <div>
                  <p className="stat_header">CONTENT MARKETING</p>
                </div>
              </div>
            </div>
          </center>
        </div>

        <div className="flex justify-between expensive mt-16">
          <div>
            <p className="time ">Time is expensive!</p>
            <p className="time_sub">Lets help you spend it the right way</p>
            <div className="content">
              <p>
                At chase we CRAFT blogpost on topics your clients are looking
                for answers to.{" "}
              </p>
              <p>
                {" "}
                This blog is repurposed into video script , for your social
                media. At the end{" "}
              </p>
              <p>
                {" "}
                of each video we use a lead magnent to capture their
                information.{" "}
              </p>
              <p>By asking them to commment a key word and my AI SALES rep,</p>
              <p>ask for ther email address. Then we send them this blog</p>
              <p> we wrote earlier , now we have them in our email list </p>
              <p>and can nurture this leads directly</p>
            </div>
            <button className="get_started_button_green free">
              <a href="https://www.chasestudio.co/contact">
                {" "}
                Get 1 FREE VIDEO EDIT
              </a>
            </button>
          </div>
          <iframe
            className="jana mt-26"
            src={`https://fast.wistia.com/embed/medias/${wistiaVideoId}`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ height: "500px" }}
            title="Wistia Video Embed" // Optional title for accessibility
          />{" "}
        </div>
        <button className="get_started_button_green edit">
          Get 1 FREE VIDEO EDIT
        </button>
        <div className="div port_div">
          <div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
              delay: 0.4,
            }}
          >
            <p className="time impression mt-20 mb-6">
              IT IS SO HARD TO REPAIR A BAD FIRST IMPRESSION
            </p>
            <p className="time_sub_so mt-16 ">
              Using a template website from your brokerage or a bad website,{" "}
            </p>
            <p className="time_sub_so">
              {" "}
              does not differentate you from Millions of realtors using the same
            </p>
            <p className="time_sub_so">
              It sends a <span className="red_flag">RED FLAG</span> to your
              prospect. If you willing to take the shortcut{" "}
            </p>
            <p className="time_sub_so mb-16">
              in MARKETING yourself. Then you will also take a shortcut in
              marketing their listings
            </p>

            <div className="flex ">
              <div className="round_dot"></div>
            </div>
            <hr className="what_we_do_line" />
          </div>

          <div className="mt-14">
            <div className="grid md:gap-20 md:grid-cols-2 gap-8 portfoio_div">
              <div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "easeIn",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.4,
                  delay: 0,
                }}
              >
                <a
                  href="https://nextmove-agency.netlify.app/
"
                >
                  <div>
                    <Image
                      className="cursor-pointer"
                      width="600"
                      height="550"
                      src="https://ik.imagekit.io/juwoncaleb/nextp_uTru8aWvc.webp?updatedAt=1693944049478"
                    />
                  </div>
                </a>
              </div>
              <div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "easeIn",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.4,
                  delay: 0.2,
                }}
              >
                <a href="https://homez-five.vercel.app/">
                  <Image
                    className="cursor-pointer"
                    width="600"
                    height="550"
                    src="https://ik.imagekit.io/juwoncaleb/home__gFPKHO9x.webp?updatedAt=1693944049491"
                  />
                </a>
              </div>
              <div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "easeIn",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.4,
                  delay: 0.3,
                }}
              >
                {" "}
                <div>
                  <a href="https://realty-template.webflow.io/">
                    <Image
                      className="cursor-pointer"
                      width="600"
                      height="550"
                      src="https://ik.imagekit.io/juwoncaleb/sop_91JOjYH6b.webp?updatedAt=1693944049511"
                    />
                  </a>
                </div>
              </div>
              <div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "easeIn",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.4,
                  delay: 0.4,
                }}
              >
                <a href="https://hot-desk-safiyah07.vercel.app/">
                  <Image
                    className="cursor-pointer"
                    width="600"
                    height="550"
                    src="https://ik.imagekit.io/juwoncaleb/hot_TmWAugePM.webp?updatedAt=1693944049498"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <center>
          <button className="get_started_button_green mt-24">
            GET STARTED
          </button>
        </center>
        <div>
          <p className="time text-center mt-20 mb-24">
            SEO WILL HELP YOU BEAT <span className="zil mb-14 ">ZILLOW!</span>
          </p>
          <div className="flex justify-around seo">
            <img className="trend" src="./trend.png" />
            <div className="sopp">
              <p className="time_sub_so">
                When a prospect searched for any property the first link that
                shows-up is ZILLOW. It is impossible to beat zillow on property
                keywords . However every month about 300,000 times , the key
                work REALTORS NEAR ME is searched. By optimizaing your GOOGLE
                BUSINESS PAGE ,you will be getting a share of this traffic for
                FREE. Also by writing blogs on topic your clients are looking
                for . Gives you higher authority with GOOGLE, and you rank
                HIGHER
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
