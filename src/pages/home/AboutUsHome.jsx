import "../../styles/pages/home/aboutUsHome.css"
import { aboutUsData } from "../../data/aboutUsData"


export function AboutUsHome (){

    return (
        <section className="aboutUs-section">
            <h1>{aboutUsData.title}</h1>
            {aboutUsData.sections.map((section) => (
                <article key={section.id}>
                    <h3>{section.title}</h3>

                    <p>{section.text}</p>
                </article>
            ))}
            <article>
                <h3>{aboutUsData.values.title}</h3>
                <ul>
                    {aboutUsData.values.items.map((value) =>(
                        <li key={value}>{value}</li>
                    ))}
                </ul>

            </article>

        </section>
    )
}