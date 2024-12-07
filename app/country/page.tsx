import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Country()
{
    return(
        <div>
            <Navbar/>
            <h1>Countries :</h1>
            <ul>
                <li>
                    <Link href="/country/pakistan">Pakistan</Link>
                </li>
                <li>
                    <Link href="/country/bhutan">Bhutan</Link>
                </li>
                <li>
                    <Link href="/country/china">China</Link>
                </li>
                <li>
                    <Link href="/country/korea">Korea</Link>
                </li>
                <li>
                    <Link href="/country/usa">USA</Link>
                </li>
            </ul>
        </div>
    )
}