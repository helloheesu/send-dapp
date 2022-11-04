# 구현 기능

- 요구사항에 있는, 기본적인 입력과 토큰 전송 기능
- 니모닉을 일괄 붙여넣기도 가능
- 입력값이 비었을 경우 전송 버튼 비활성화
- 전송 중에는 모달창이 뜨며, 전송 버튼 비활성화
- 전송 성공/실패시 관련 내용 모달창
- 성공/실패 모달창 닫기 버튼 클릭시 입력 내용 초기화

# Screenshots

<img width="652" alt="image" src="https://user-images.githubusercontent.com/5011544/200006110-f69ecdbf-c129-41ea-bd16-f568bb5e111b.png">
<img width="507" alt="image" src="https://user-images.githubusercontent.com/5011544/200006137-de89a971-5645-4f30-b498-9060898c4da9.png">
<img width="686" alt="image" src="https://user-images.githubusercontent.com/5011544/200006158-d5370999-a9a3-4cc9-998b-5a6407f9327e.png">

# 구동 방법

1. 저장소 클론
2. .env.local 파일 생성

```
RPC=http://gaia-node-...보내주신 주소
```

3. 터미널에서 저장소 디렉토리 가서,

```
$ npm i
$ npm run dev
```

4. http://localhost:3000/ 접속
