import PageTitle from "../components/pageTitle/PageTitle";
import Container from "../components/container/Container";
import AboutBox from "../components/aboutBox/AboutBox";
import AboutLogo from "../components/aboutBox/AboutLogo";
import image1 from "../images/about-1.jpg";
import image2 from "../images/about-2.jpg";
import image3 from "../images/about-3.jpg";
import logo from "../images/3ce-logo.png";

const boxContents = [
    {title: "3ce history", image: image1, reverse: false, bgPos: "center", text: '2009년 1월, 스타일난다에서 론칭한 코스메틱 브랜드 3CE.\n여성의 트렌디한 패션을 앞서나간 STYLENANDA는 2007년 여성의 아름다움과 개성을 표현하기 위해 크리에이티브한 감각으로 MAKE-UP LINE 개발을 시작한 후 전문적인 색조 브랜드 ‘3CE’를 론칭했습니다.'},
    {title: "about 3ce", image: image2, reverse: true, bgPos: "right", text: "3가지 매력적인 시선으로 패셔너블한 여성을 빛나게 만들어 주는 3CE. 모던한 컬러의 다양한 스펙트럼으로 크리에이티브한 자신만의 차별화된 느낌을 3CE와 함께라면 누구나 특별한 MAKE OVER를 경험할 수 있습니다."},
    {title: "3ce personality", image: image3, reverse: false, bgPos: "top", text: "트렌드를 앞서가는 세련된 매력, 개성 있고 당당한 매력으로 빛나는 여성, 어디서나 도전적이고 주목받는 리더 여성들이 자신만의 차별화된 아름다움을 찾을 수 있게 해 주는 것이 3CE가 추구 하는 모습입니다."},
];

const aboutLogo = {title: "3ce", image: "https://stylenanda.com/design/kr/3ce_logo.png", text: "자유로운 러프 형식의 BI, 삼각형 안에 세 가지의 매력적인 시선의 의미를 담은 ‘3CE’를 자유롭게 표현하여 CREATIVE EACH 각각의 다른 개성을 창조하는 공간을 의미합니다."};

    function About() {
    return (
        <div>
            <PageTitle title="3ce" />
            {boxContents.map((boxContent, idx) => (
                <Container key={idx}>
                    <AboutBox
                        title={boxContent.title}
                        image={boxContent.image}
                        text={boxContent.text}
                        reverse={boxContent.reverse}
                        bgPos={boxContent.bgPos}
                    />
                </Container>
            ))}
            <Container>
                <AboutLogo
                    title={aboutLogo.title}
                    image={aboutLogo.image}
                    text={aboutLogo.text}
                />
            </Container>
        </div>
    );
}

export default About;