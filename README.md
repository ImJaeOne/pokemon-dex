# Pokemon Dex <img src="https://github.com/user-attachments/assets/3fff1123-2912-499a-afbc-f5a8ce2acdbe" alt="메타몽" width="50px"/>

나만의 Pokemon Dex를 관리할 수 있는 프로젝트입니다.

내 pokemon dex의 상태 관리는 각 브랜치에서 prop-drilling, context, RTK를 통해 진행하였습니다.

## 🛠️ 기술 스택 

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat&logo=styled-components&logoColor=white)



## ✨ 기능 

#### 모든 CRUD 기능은 로컬 스토리지(localStorage)와 연동되어, 페이지를 새로고침해도 데이터가 유지됩니다.

```javascript
const myPokemon = useSelector((state) => state.myPokemon);

useEffect(() => {
    localStorage.setItem('pokemon', JSON.stringify(myPokemon));
}, [myPokemon]);
```

- 포켓몬 목록 보기: 나만의 포켓몬 Dex에 등록된 포켓몬을 목록으로 확인할 수 있습니다.
- 포켓몬 상세 보기: 각 포켓몬을 클릭하면 상세 정보(타입, 설명, 이미지 등)를 확인할 수 있습니다.
- 포켓몬 등록/삭제: 포켓몬을 등록하거나 삭제하여 나만의 덱을 만들 수 있습니다.


## 📝 문제 해결

- vercel 환경에서 새로고침을 하면 404 error가 뜨는 문제
  [Vercel에서 새로 고침하면 404 Not Found..?](https://dlawi0108.tistory.com/54)

- 새로고침하면 등록/삭제하기 이전 상태로 돌아가는 문제
  [왜 새로고침하면 사라지는데?](https://dlawi0108.tistory.com/55)
  

## 🚀 배포 및 실행 
[Vercel](https://pokemon-dex-nu.vercel.app/)

## 🤔 느낀 점

이번 프로젝트에서는 prop drilling 방식이 더 직관적이고 간단하게 느껴졌습니다. 컴포넌트 간에 상태를 직접적으로 전달할 수 있어, Redux나 Context API를 사용하지 않아도 상태 관리가 충분히 가능했습니다.

물론 Redux를 사용하면 상태를 관리할 때 일관성이 있고 addPokemon, removePokemon 액션에 따라 상태를 변경하는 구조가 명확하긴 하지만, 작은 규모의 프로젝트에서는 그 복잡성보다 prop drilling이 더 효율적으로 느껴졌습니다.
