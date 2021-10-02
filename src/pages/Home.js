import ShaderCanvas from "../components/canvas/ShaderCanvas";
import { frag } from "../fragments/frag";
import styles from "./Home.module.css";
import image from "../images/main-image-1.png";

function Home() {
    return (
        <main>
            <section className={styles.section}>
                <ShaderCanvas frag={frag} setUniforms={[image]} />
            </section>
        </main>
    );
}

export default Home;