import Link from "./Link";
import github from "../github.svg";
import slack from "../slack.svg";

const Main = () => {
    return (
        <main className="main-links">
            <Link id="twitter" href="https://www.twitter.com/wineshuga/" text="Twitter Link" />
            <Link id="btn__zuri" href="https://training.zuri.team/" text="Zuri Team" />
            <Link id="books" href="https://books.zuri.team/" text="Zuri Books" />
            <Link id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=wineshuga" text="Python Books" />
            <Link id="pitch" href="https://backgroundcheck.zuri.team/" text="Background Check for Coders" />
            <Link id="book__design" href="https://books.zuri.team/design-rules" text="Design Books" />
            <a href="https://github.com/wineshuga" target="_blank" rel="noopener noreferrer"
            ><img src={slack} className="icon" alt="slack link" /></a>
            <a href="https://github.com/wineshuga" target="_blank" rel="noopener noreferrer"
            ><img src={github} className="icon" alt="github link" /></a>
        </main>
    );
};

export default Main;
