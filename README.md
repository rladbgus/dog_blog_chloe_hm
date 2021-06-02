## next-redux-wrapper

Next를 사용하면 리덕스 스토어가 여러개가 될 수 있다. Next.js는 유저가 요청할때마다 redux store를 새로 생성한다.
그리고 Next.js가 제공하는 getInitialProps, getServerSideProps등에서 리덕스 스토어에 접근할 수 있어야 한다. next-redux-wrapper로 가능하게 한다.

## styled-component

- \_document에 적용
  \_document.tsx는 pages 폴더 내부에 존재하는 모든 페이지에 global한 설정 값을 줄 수 있는 파일이다.

  Next.js에서 styled-component를 사용하면 CSS 로딩이 늦게 되어 깜빡이는 현상 발생
  -> HTML은 SSR로 미리 렌더링 시키지만 styled-component의 스타일들은 사용자가 접속 시 변환되기 때문
  -> \_document.tsx 파일에 css를 미리 적용시켜야 한다.
  -> SSR 에서도 styled-component를 사용하도록 설정
