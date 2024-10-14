import styles from './styles/index.module.scss'

function index() {
  return <div className={styles.page}>
  {/* 공통 헤더 UI 부분 */}
  {/* 공통 네비게이션 UI 부분 */}
  <div className={styles.page_contents}>
    <div className={styles.page_contents_introBox}>
      <div className={styles.wrapper}>
        <span className={styles.wrapper_title}> PhotoSplash
          <span className={styles.wrapper_desc}>
            인터넷의 시작 자료 출처 입니다. <br />
            ㅁ든 지역에 있는 크리에이터들의 지원을 받습니다.
          </span>
        </span>
        {/* 검색창 UI */}
      </div>
    </div>
    <div className={styles.page_contents_imageBox}></div>
  </div>
  {/* Common footer UI  */}
  </div>
}

export default index
