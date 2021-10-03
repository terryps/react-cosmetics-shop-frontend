import Container from "../components/container/Container";
import ShaderCanvas from "../components/canvas/ShaderCanvas";
import { frag } from "../fragments/frag";
import image1 from "../images/main-image-1.jpg";
import image2 from "../images/main-image-2.jpg";
import image3 from "../images/main-image-3.jpg";

const fragImages = [
    {image: image1, textureRatio: 1400.0 / 980.0, widthDivisor: 2.0, heightDivisor: 2.0},
    {image: image2, textureRatio: 324.0 / 487.0, widthDivisor: 4.0, heightDivisor: 2.0},
    {image: image3, textureRatio: 570.0 / 713.0, widthDivisor: 2.0, heightDivisor: 1.0},
];

function Home() {
    return (
        <section>
            <Container>
                <ShaderCanvas frag={frag} setUniforms={fragImages} />
            </Container>
            <Container></Container>

        </section>
    );
}

export default Home;