import Btns from "./Btns";
import github from "../github.svg";
import slack from "../slack.svg";

const Main = () => {
    return (
        <main className="main-links">
            <Btns id="twitter" href="https://www.twitter.com/wineshuga/" text="Twitter Link" />
            <Btns id="btn__zuri" href="https://training.zuri.team/" text="Zuri Team" />
            <Btns id="books" href="https://books.zuri.team/" text="Zuri Books" />
            <Btns id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=wineshuga" text="Python Books" />
            <Btns id="pitch" href="https://backgroundcheck.zuri.team/" text="Background Check for Coders" />
            <Btns id="book__design" href="https://books.zuri.team/design-rules" text="Design Books" />
            <Btns id="contact" href="./contact" text="Contact Me" />
            <img src={slack} className="icon" alt="slack link" />
            <a href="https://github.com/wineshuga" target="_blank" rel="noopener noreferrer"
            ><img src={github} className="icon" alt="github link" /></a>
        </main>
    );
};

export default Main;
