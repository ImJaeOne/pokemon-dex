# Pokemon Dex <img src="https://github.com/user-attachments/assets/3fff1123-2912-499a-afbc-f5a8ce2acdbe" alt="메타몽" width="50px"/>

나만의 Pokemon Dex를 관리할 수 있는 프로젝트입니다.

내 pokemon dex의 상태 관리는 각 브랜치에서 prop-drilling, context, RTK를 통해 진행하였습니다.

## 🛠️ 기술 스택 

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat&logo=styled-components&logoColor=white)



## ✨ 기능 

#### 모든 CRUD 기능은 로컬 스토리지(localStorage)와 연동되어, 페이지를 새로고침해도 데이터가 유지됩니다.

- 포켓몬 목록 보기: 나만의 포켓몬 Dex에 등록된 포켓몬을 목록으로 확인할 수 있습니다.
- 포켓몬 상세 보기: 각 포켓몬을 클릭하면 상세 정보(타입, 설명, 이미지 등)를 확인할 수 있습니다.
- 포켓몬 등록/삭제: 포켓몬을 등록하거나 삭제하여 나만의 덱을 만들 수 있습니다.

## 🧩 custom Hook : usePokemonDex 
이 프로젝트에서는 내 포켓몬 덱을 관리하기 위해 usePokemonActions라는 커스텀 훅을 사용합니다. 이 훅은 내 포켓몬 덱에 특정 포켓몬 추가, 삭제 / 내 포켓몬 덱의 해당 포켓몬 유무 로직을 처리합니다.

```javascript
const usePokemonActions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myPokemon = useSelector((state) => state.myPokemon);

    const handleClickPokemonCard = (e) => {
        const itemId = e.target.closest('[data-id]')?.getAttribute('data-id');
        const item = MOCK_DATA.find((pokemon) => pokemon.id === Number(itemId));

        if (!item) return;

        const actionType = e.target.getAttribute('data-type');

        if (actionType === 'add') {
            if (myPokemon.length >= 6) {
                toast.error('최대 6마리까지 등록할 수 있습니다.');
                return;
            }
            dispatch(addPokemon({ pokemon: item }));
            toast.info(`${item.korean_name} 등록 완료`);
        } else if (actionType === 'remove') {
            dispatch(removePokemon({ id: item.id }));
            toast.info(`${item.korean_name} 삭제 완료`);
        } else {
            navigate(`/pokemon-detail?id=${item.id}`);
        }
    };

    const isSelected = (item) => myPokemon.some((pokemon) => pokemon.id === item.id);

    return { myPokemon, handleClickPokemonCard, isSelected };
};
```

### usePokemonDex 훅 생성 이유
- 재사용성: 관련 로직을 상위 컴포넌트로의 이벤트 위임으로 인해 해당 로직을 Dashboard와 List에서 사용하게 되었습니다. 또한 Deatail에서도 사용합니다. 카드 컴포넌트의 동작 로직과 포켓몬 덱의 유무 로직을 각각에 맞게 재사용할 수 있도록 커스텀 훅으로 분리한 것이었습니다. 이렇게 함으로써 중복 코드를 줄이고, 카드 컴포넌트에서의 동작을 필요한 곳에서 자유롭게 사용할 수 있게 되었습니다.
- 비즈니스 로직 분리: 카드의 클릭 이벤트를 처리하는 로직을 커스텀 훅으로 분리함으로써, PokemomList 컴포넌트 자체는 UI와 관련된 부분만 다루고, 비즈니스 로직(예: 카드 클릭 시 add)은 커스텀 훅으로 관리됩니다. 


## 📝 문제 해결

- vercel 환경에서 새로고침을 하면 404 error가 뜨는 문제
  [Vercel에서 새로 고침하면 404 Not Found..?](https://dlawi0108.tistory.com/54)

- 새로고침하면 등록/삭제하기 이전 상태로 돌아가는 문제
  [왜 새로고침하면 사라지는데?](https://dlawi0108.tistory.com/55)

- 카드 컴포넌트 UI에 변경이 없음에도 리렌더링 되는 문제
  [상위 컴포넌트로의 이벤트 위임을 통한 리렌더링 최적화] (https://dlawi0108.tistory.com/59)
  

## 🚀 배포 및 실행 
[Vercel](https://pokemon-dex-nu.vercel.app/)

## 🤔 느낀 점

이번 프로젝트에서는 prop drilling 방식이 더 직관적이고 간단하게 느껴졌습니다. 컴포넌트 간에 상태를 직접적으로 전달할 수 있어, Redux나 Context API를 사용하지 않아도 상태 관리가 충분히 가능했습니다.

물론 Redux를 사용하면 상태를 관리할 때 일관성이 있고 addPokemon, removePokemon 액션에 따라 상태를 변경하는 구조가 명확하긴 하지만, 작은 규모의 프로젝트에서는 그 복잡성보다 prop drilling이 더 효율적으로 느껴졌습니다.

또한 후반 작업으로 카드 렌더링 최적화를 진행하였는데 최적화를 진행하며 카드 컴포넌트에서 이뤄져야 할 로직을 상위 컴포넌트로 올리며 가독성이 떨어지는 문제점이 생겼습니다. 최적화와 가독성 사이에서 적당히 타협하며 코드를 구현해야겠다고 생각했습니다.

