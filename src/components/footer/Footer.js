import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <ul className={`${styles.flex} ${styles.menu}`}>
                <li>
                    <h2 className={styles.h2}>CUSTOMER</h2>
                    <p>0502 707 8888</p>
                    <p>평일 10:00 ~ 17:00</p>
                    <p>점심 12:00 ~ 13:00</p>
                    <p>휴무 (토, 일, 공휴일)</p>
                </li>
                <li>
                    <h2 className={styles.h2}>DELIVERY</h2>
                    <p><a href="//www.ilogen.com/web/personal/tkSearch" target="blank">배송 조회 &gt;&gt;</a></p>
                    <p>반품 주소</p>
                    <p>경기도 이천시 대월면</p>
                    <p>대월로932번길 94 A동</p>
                    <p>로젠택배 3PL 물류센터</p>
                    <p>반드시 로젠택배 이용</p>
                </li>
                <li>
                    <h2 className={styles.h2}>STORE</h2>
                    <p>플래그십</p>
                    <p>백화점</p>
                    <p>면세점</p>
                    <p>올리브영</p>
                    <p>아울렛</p>
                    <p>해외</p>
                </li>
                <li>
                    <h2 className={styles.h2}>HELP</h2>
                    <p>고객지원</p>
                    <p>쇼핑 가이드</p>
                    <p>제휴 문의</p>
                </li>
                <li>
                    <h2 className={styles.h2}>NOTICE</h2>
                    <p>회원 공지</p>
                    <p>이벤트</p>
                    <p>회사 소개</p>
                    <p>회사 공고</p>
                    <p>해외 배송 안내</p>
                </li>
            </ul>
            <div className={`${styles.flex} ${styles.sns}`}>
                <a href="https://www.facebook.com/stylenanda11">
                    <img src="https://stylenanda.com/design1/kr/footer_ico01__.png" alt="facebook" />
                </a>
                <a href="https://www.instagram.com/stylenanda_korea/">
                    <img src="https://stylenanda.com/design1/kr/footer_ico02__.png" alt="instagram" />
                </a>
                <a href="https://stylenanda-blog.co.kr/">
                    <img src="https://stylenanda.com/design1/kr/footer_ico03__.png" alt="blog" />
                </a>
                <a href="https://www.youtube.com/c/STYLENANDA_official">
                    <img src="https://stylenanda.com/design1/kr/footer_ico04__.png" alt="youtube" />
                </a>
                <a href="https://pf.kakao.com/_axbfxeZ">
                    <img src="https://stylenanda.com/design1/kr/footer_ico05__.png" alt="kakao-talk" />
                </a>
                <a href="https://story.kakao.com/ch/stylenanda">
                    <img src="https://stylenanda.com/design1/kr/footer_ico06__.png" alt="kakao-story" />
                </a>
            </div>
            <div className={styles.rights}>
                <p>대표이사. 신지은 │ 사업자등록번호. 130-86-24632 │ 통신판매업신고. 2014-서울마포-0835 │ 개인정보보호책임자. 조선영 </p>
                <p>회사명. ㈜난다 │ 전화. 0502-707-8888 │ 팩스. 02-335-5274 │ 이메일. nanda@stylenanda.co.kr │ 주소. 서울특별시 마포구 잔다리로 32 서문빌딩 2~6F</p>
                <p>
                    ⓒ 2017. NANDA All rights reserved. │
                    <a href="https://stylenanda.com/member/privacy.html">개인정보처리방침</a>
                     │
                    <a href="https://stylenanda.com/member/cctv_policies_procedures.html">영상정보처리기기운영･관리방침</a>
                     │
                    <a href="https://stylenanda.com/member/agreement01.html">이용약관</a>
                    │ Hosting by cafe24
                </p>
                <p> 고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한 PG 사의 구매안전서비스를 이용하실 수 있습니다. </p>
            </div>

        </div>
    );
}

export default Footer;