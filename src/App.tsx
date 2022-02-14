import { Fragment } from "react";
import { ArrowRight } from "react-feather";

export default function App() {
    return (
        <Fragment>
            <nav className="container mx-auto py-3 mb-6 xl:px-0 px-5">
                <p className="text-xl">
                    The <span className="font-serift font-medium">SODD</span>{" "}
                    Method
                </p>
            </nav>

            <header className="flex container mx-auto items-center pt-10 gap-10 xl:px-0 px-5 mb-20 flex-1">
                <section className="flex-1 flex flex-col">
                    <h1
                        className="xs:text-5xl text-4xl text-cyan-400 font-light mb-10"
                        style={{ lineHeight: 1.25 }}
                    >
                        <span className="text-6xl font-medium">SODD</span>
                        <br />
                        Driven Development
                    </h1>

                    <img
                        className="xl:hidden bg-cyan-100 bg-opacity-10 rounded p-10 mb-10 border-2 border-cyan-100 border-opacity-10 shadow"
                        src="/undraw_proud_coder_re_exuy.svg"
                        alt="a woman doing web development"
                    />

                    <p
                        className="text-cyan-100 text-xl font-medium mb-5 lg:max-w-lg"
                        style={{ lineHeight: 1.75 }}
                    >
                        A scientifically proven* method for building enterprise
                        grade web services!
                    </p>
                    <p
                        className="text-cyan-100 text-lg mb-10 lg:max-w-lg"
                        style={{ lineHeight: 1.75 }}
                    >
                        Improve your web development skills and become a true
                        10x developer today by clicking the button below.
                    </p>

                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.youtube.com/watch?v=qogh6jQD1Ro"
                        className="text-white bg-cyan-600 px-6 py-5 text-xl font-semibold hover:bg-cyan-700 rounded w-full lg:max-w-lg mb-5 flex justify-between items-center"
                    >
                        Become a SODD developer <ArrowRight />
                    </a>

                    <p className="text-sm text-cyan-200">
                        * find example experiment candidate{" "}
                        <a
                            href="https://github.com/OscarWoHA"
                            className="text-cyan-300 underline underline-offset-2 hover:text-cyan-400 focus:text-cyan-400"
                        >
                            here
                        </a>
                    </p>
                </section>
                <img
                    className="xl:flex hidden flex-1 bg-cyan-100 bg-opacity-5 rounded p-10 border-2 border-cyan-100 border-opacity-10 shadow"
                    src="/undraw_proud_coder_re_exuy.svg"
                    alt="a woman doing web development"
                />
            </header>

            <footer className="py-10 bg-slate-800">
                <div className="container mx-auto xl:px-0 px-5">
                    <p className="text-cyan-100">
                        Made with <span className="text-red-300">passion</span>{" "}
                        by{" "}
                        <a
                            href="https://github.com/OscarWoHA"
                            className="font-medium underline underline-offset-4 hover:text-cyan-300 focus:text-cyan-300"
                        >
                            some norwegian guy on the internet
                        </a>
                        , source code on{" "}
                        <a
                            className="font-medium hover:text-cyan-300 focus:text-cyan-300"
                            href="https://github.com/OscarWoHA/sodd-driven-development"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
            </footer>
        </Fragment>
    );
}
