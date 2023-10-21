# Gamgyul

## 프로젝트 설명
Gamgyul은 이전의 sea blog를 만들고 나서 페이지네이션, 검색 기능 및 다른 기능들도 넣고 싶어서 만들게 되었습니다
- mongo db를 이용하여 CRUD를 통해 로그인, 로그아웃, 글 삭제, 추가, 업데이트를 할수 있습니다.
- sea blog에서 Mui 사용했던 경험을 빌려 이번 프로젝트에는 tailwind css를 사용하게 되었습니다.
- tailwind css를 공부하면서 sea blog에서 미처 넣지 못했던 기능들 추가하면서 crud를 자유롭게 할수 있게 되었습니다.

### 🏃 구성원
- Frontend<br/>
  - 김준수(React)
  - 사용 기술 : `React`, `JavaScript`, `React Router`, `Redux`, `React-easy-crop`, `React-hook-form`, `React-hot-toast`
 
## 🔎 기능 설명

### 1. 메인페이지

![헤더](https://github.com/skdksldk/Gamgyul/assets/85090323/6543361f-e695-49ef-b106-814ad5b994c7)

![헤더2](https://github.com/skdksldk/Gamgyul/assets/85090323/8e6ecacf-de1d-4c47-b033-b5d0b2499d51)

![헤더3](https://github.com/skdksldk/Gamgyul/assets/85090323/9ba2104b-7216-46a5-9fa0-94609dd02f2a)

![헤더4](https://github.com/skdksldk/Gamgyul/assets/85090323/3795c7f5-362b-4247-9b27-23cffe4ed9f1)

- 반응형 레이아웃 구현

### 2. 로그인

![로그인](https://github.com/skdksldk/Gamgyul/assets/85090323/c5c49d00-77b0-4c0a-b519-a1c4727ebe60)

- React-hook-form를 이용해 로그인 기능을 구축했습니다.


### 3. 회원가입

![회원가입](https://github.com/skdksldk/Gamgyul/assets/85090323/6c76d51d-ae9d-4d79-b12b-116839295982)


- 로그인과 마찬가지로 회원가입도 React-hook-form를 이용하여 뷰를 구축했습니다.
- 로그인과 마찬가지로 reponse를 받지 못할 경우 회원가입에 실패했다는 안내의 alert 처리를 해두었습니다.

### 4. 프로필 

![프로필](https://github.com/skdksldk/Gamgyul/assets/85090323/66e07dbb-213f-4b8a-b874-522f1d5f2879)

![프로필2](https://github.com/skdksldk/Gamgyul/assets/85090323/55d91e1b-607f-490d-951a-f101b6dafbbc)

![프로필3](https://github.com/skdksldk/Gamgyul/assets/85090323/88d675f6-eb96-46ad-b75d-03eab5eb2914)


- React-easy-crop을 사용해 프로필 등록, 업데이트, 수정, 삭제 기능을 구현했습니다.

### 5. CRUD

![crud](https://github.com/skdksldk/Gamgyul/assets/85090323/d3b68798-6023-4454-9e43-e5229b3abf81)


### 6. 페이지네이션


https://github.com/skdksldk/Gamgyul/assets/85090323/16e192dc-d830-4410-b5c4-b0a728496313


### 7. 검색


https://github.com/skdksldk/Gamgyul/assets/85090323/156ad93c-7436-4b81-8312-b5ac95734b88


## 💻 데모

https://github.com/skdksldk/Gamgyul/assets/85090323/7c61f9c7-52a0-4a4d-8b24-2ec671345999


## 💻 완성본
[Gamgyul](https://blog-demo-5qdd.onrender.com/) <br/>
로그인 번호: admin1234@naver.com <br/>
비밀 번호: 12345678 <br/>
💡로딩 시간이 걸리므로 로그인 이후 1~2분 정도 대기한 다음에 화면이 뜸💡<br/>
💡로딩이 안되거나 기다리기 어려우면 개인적으로 다운로드해서 프로필도 만들고 블로그 내용을 볼 수 있습니다.💡<br/>
💡프로필과 관리자 페이지의 경우에는 다운로드해서 이용하실 수 있습니다💡

## 💡 Gamgyul Blog를 만든 이유

다른 Blog를 만들면서 연습한 경험을 토대로 새로 배운 기술들을 통해 자신만의 블로그를 개설해서 기록하고 응용할수 있어서 선택했습니다.
또한 개인적으로 다운받어서 개발 관련된 공부를 기록할수 있고 자신만의 블로그를 만들고 싶은 분들을 위해 만들었습니다. 


## 실행 방법

### 설치
`yarn install`

### 실행
`yarn start`

개발모드로 앱을 실행합니다.

[http://localhost:3000](http://localhost:3000)에서 확인 가능합니다.


