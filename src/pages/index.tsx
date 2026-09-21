import HomeDetails from "@/components/HomeDetails";
import NextSeo from "@/components/NextSeo";
import language from "@/i18n/language";
import Head from "next/head";
import { useState } from "react";
import { toast } from "sonner";

type Language = keyof typeof language;

export default function Home() {
    const [i18n, setI18n] = useState<Language>("en");
    const [image, setImage] = useState("pink");

    async function copyToClipboard(text: string) {
        try {
            await navigator.clipboard.writeText(text);
            toast.success(language[i18n].success);
        } catch {
            toast.error(language[i18n].error);
        }
    }

    const svgCopyWhite = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 15H5C3.89543 15 3 14.1046 3 13V5C3 3.89543 3.89543 3 5 3H13C14.1046 3 15 3.89543 15 5V9M11 21H19C20.1046 21 21 20.1046 21 19V11C21 9.89543 20.1046 9 19 9H11C9.89543 9 9 9.89543 9 11V19C9 20.1046 9.89543 21 11 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-darkreader-inline-stroke=""></path> </g></svg>

    const svgCopyDark = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 15H5C3.89543 15 3 14.1046 3 13V5C3 3.89543 3.89543 3 5 3H13C14.1046 3 15 3.89543 15 5V9M11 21H19C20.1046 21 21 20.1046 21 19V11C21 9.89543 20.1046 9 19 9H11C9.89543 9 9 9.89543 9 11V19C9 20.1046 9.89543 21 11 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-darkreader-inline-stroke=""></path> </g></svg>

    return (
        <HomeDetails>
            <Head>
                <title>Chibot Studio | Your character, as a little bot.</title>
                <link rel="icon" type="image/png" href="/blonde-2.png" />
            </Head>

            <NextSeo
                title="Chibot Studio | Your character, as a little bot."
                description="We recommend ChatGPT for image generation. It worked well even on the free plan. Other tools, especially Grok, may not fully capture the intended style."
                canonical="https://chibotstudio.vercel.app/"
                openGraph={{
                    url: "https://chibotstudio.vercel.app/",
                    title: "Chibot Studio | Your character, as a little bot.",
                    description:
                        "We recommend ChatGPT for image generation. It worked well even on the free plan. Other tools, especially Grok, may not fully capture the intended style.",
                    siteName: "Chibot Studio | Your character, as a little bot.",
                    images: [
                        {
                            url: "/thumbnail.png",
                            width: 1280,
                            height: 720,
                            alt: "Chibot Studio | Your character, as a little bot.",
                            type: "image/png",
                        },
                    ],
                }}
                twitter={{
                    handle: "@",
                    site: "@yagasaki7k",
                    cardType: "summary_large_image",
                }}
            />
            <div className="navigation">
                <div className="leftMenu">
                    <h1>Chibot Studio</h1>
                </div>

                <div className="rightMenu">
                    <button onClick={() => setI18n("en")} className={i18n === "en" ? "en" : undefined}>
                        English
                    </button>

                    <button onClick={() => setI18n("ptbr")} className={i18n === "ptbr" ? "ptbr" : undefined}>
                        Português
                    </button>

                    <button onClick={() => setI18n("ko")} className={i18n === "ko" ? "ko" : undefined}>
                        한국어
                    </button>

                    <button onClick={() => setI18n("ja")} className={i18n === "ja" ? "ja" : undefined}>
                        日本語
                    </button>
                </div>
            </div>

            <div className="container">
                <div className="leftContent">
                    <div className="center">
                        <img src={image + ".png"} alt={image} className="first-image" />
                        <p>{language[i18n].firstResult}</p>
                    </div>

                    <div className="short">
                        <p>{language[i18n].firstResult}</p>

                        <div className="images">
                            <img src="pink.png" alt={image} onClick={() => setImage("pink")} className={image === "pink" ? "pink" : undefined} />
                            <img src="blonde.png" alt={image} onClick={() => setImage("blonde")} className={image === "blonde" ? "blonde" : undefined} />
                            <img src="black.png" alt={image} onClick={() => setImage("black")} className={image === "black" ? "black" : undefined} />
                            <img src="teal.png" alt={image} onClick={() => setImage("teal")} className={image === "teal" ? "teal" : undefined} />
                            <img src="blue.png" alt={image} onClick={() => setImage("blue")} className={image === "blue" ? "blue" : undefined} />
                        </div>
                    </div>

                    <div className="full">
                        <p>{language[i18n].secondResult}</p>

                        <div className="images">
                            <img src="dark-bob.png" alt={image} onClick={() => setImage("dark-bob")} className={image === "dark-bob" ? "pdark-bobidark-bobnk" : undefined} />
                            <img src="blonde-2.png" alt={image} onClick={() => setImage("blonde-2")} className={image === "blonde-2" ? "blonde-2" : undefined} />
                            <img src="teal-2.png" alt={image} onClick={() => setImage("teal-2")} className={image === "teal-2" ? "teal-2" : undefined} />
                            <img src="ponytail.png" alt={image} onClick={() => setImage("ponytail")} className={image === "ponytail" ? "ponytail" : undefined} />
                            <img src="black-2.png" alt={image} onClick={() => setImage("black-2")} className={image === "black-2" ? "black-2" : undefined} />
                        </div>
                    </div>
                </div>

                <div className="rightContent">
                    <h1>{language[i18n].header}</h1>

                    <p className="description">{language[i18n].description}</p>

                    <button className="shortPromptButton" onClick={() => copyToClipboard(language[i18n].shortPrompt)}>{svgCopyDark} {language[i18n].shortPromptButton}</button>
                    <button className="fullPromptButton" onClick={() => copyToClipboard(language[i18n].fullPrompt)}>{svgCopyWhite} {language[i18n].fullPromptButton}</button>

                    <p className="text">{language[i18n].firstParagraph}</p>
                    <p className="text">{language[i18n].secondParagraph}</p>
                    <p className="quote">{language[i18n].quote}</p>

                    <hr />

                    <div className="steps">
                        <b>01</b>
                        <p>{language[i18n].firstStep}</p>
                    </div>
                    <div className="steps">
                        <b>02</b>
                        <p>{language[i18n].secondStep}</p>
                    </div>

                    <hr />

                    <h4>{language[i18n].lastUpdates}</h4>
                    <p className="seeMore">{language[i18n].seeMore} <a href="#">{language[i18n].clickHere}.</a></p>

                    <div className="slideContainer">
                        <div className="slide">
                            <div className="slideContent">
                                <img src="brown.png" alt={image} onClick={() => setImage("brown")} />
                                <img src="blue-2.png" alt={image} onClick={() => setImage("blue-2")} />
                                <img src="orange.png" alt={image} onClick={() => setImage("orange")} />
                                <img src="green.png" alt={image} onClick={() => setImage("green")} />
                                <img src="gray.png" alt={image} onClick={() => setImage("gray")} />
                                <img src="heart.png" alt={image} onClick={() => setImage("heart")} />
                                <img src="military.png" alt={image} onClick={() => setImage("military")} />
                                <img src="purple-2.png" alt={image} onClick={() => setImage("purple-2")} />
                                <img src="gray-2.png" alt={image} onClick={() => setImage("gray-2")} />
                                <img src="red.png" alt={image} onClick={() => setImage("red")} />
                                <img src="brown-2.png" alt={image} onClick={() => setImage("brown-2")} />
                                <img src="gray-3.png" alt={image} onClick={() => setImage("gray-3")} />
                                <img src="white.png" alt={image} onClick={() => setImage("white")} />
                                <img src="yellow.png" alt={image} onClick={() => setImage("yellow")} />
                                <img src="white-2.png" alt={image} onClick={() => setImage("white-2")} />
                            </div>
                            <div className="slideContent">
                                <img src="brown.png" alt={image} onClick={() => setImage("brown")} />
                                <img src="blue-2.png" alt={image} onClick={() => setImage("blue-2")} />
                                <img src="orange.png" alt={image} onClick={() => setImage("orange")} />
                                <img src="green.png" alt={image} onClick={() => setImage("green")} />
                                <img src="gray.png" alt={image} onClick={() => setImage("gray")} />
                                <img src="heart.png" alt={image} onClick={() => setImage("heart")} />
                                <img src="military.png" alt={image} onClick={() => setImage("military")} />
                                <img src="purple-2.png" alt={image} onClick={() => setImage("purple-2")} />
                                <img src="gray-2.png" alt={image} onClick={() => setImage("gray-2")} />
                                <img src="red.png" alt={image} onClick={() => setImage("red")} />
                                <img src="brown-2.png" alt={image} onClick={() => setImage("brown-2")} />
                                <img src="gray-3.png" alt={image} onClick={() => setImage("gray-3")} />
                                <img src="white.png" alt={image} onClick={() => setImage("white")} />
                                <img src="yellow.png" alt={image} onClick={() => setImage("yellow")} />
                                <img src="white-2.png" alt={image} onClick={() => setImage("white-2")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeDetails>
    );
}