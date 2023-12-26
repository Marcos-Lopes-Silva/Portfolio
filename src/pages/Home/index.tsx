import Navbar from "../../components/Navbar";
import image from "../../assets/images/image.jpg";
import styles from "./Home.module.scss"
import { FaJava, FaHtml5, FaCss3 } from "react-icons/fa6";
import { SiTypescript, SiJavascript } from "react-icons/si";

const tecnologias = [
    {
        nome: "Java",
        icone: <FaJava />,
    },
    {
        nome: "Typescript",
        icone: <SiTypescript />,
    },
    {
        nome: "Javascript",
        icone: <SiJavascript />,
    },
    {
        nome: "HTML5",
        icone: <FaHtml5 />,
    },
    {
        nome: "CSS3",
        icone: <FaCss3 />,
    },

]

const Home = () => {
    return (
            <section className={styles.sectionhome}>

                <img className={styles.sectionhome__imagem} src={image} alt="Marcos" />
                <div className={styles.sectionhome__introducao}>
                    <h1>Olá, me chamo Marcos Eduardo</h1>
                    <h2></h2>
                    <h3>Sou desenvolvedor Back-End</h3>
                </div>
                <div className={styles.sectionhome__tecnologiass}>
                    <ul className={styles.tecnologias}>
                        {tecnologias.map((tecnologia) => (
                            <li className={styles.tecnologias__item}>
                                {tecnologia.icone}
                                <span>{tecnologia.nome}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
    )
}



export default Home;