# 타로

## todo

- [v] redux-toolkit으로 스프레드 방식에 따른 타로 선택 갯수 전역 state로 만들기, 추후에 타로 결과도 같이 관리하기,
  ┗ 스프레드 상태, 카드 선택한것,
- [v] 타로 카드 선택전 타로를 섞는 중입니다. 로딩바 나오게 하기
- [v] 타로 선택 후 연애, 일, 대인관계 에 대한 설명들 나오게 하기
- [ ] 계정을 이용하여 타로 선택 기록 확인하기
- [v] gpt api를 이용한 유순한(?) 해석
- [ ] 스프레드 형식 정리하기

-gpt api 관련 링크들
```node
-https://blog.deeplink.kr/?p=2835#GPT-35-Turbo
-https://www.google.co.kr/search?q=%EB%8B%AC%EB%9F%AC+%EA%B3%84%EC%82%B0%EA%B8%B0&sca_esv=cd7e98c4db4a6188&biw=1920&bih=971&sxsrf=ADLYWIKOyGKrxWdHqhzdMza76G1kPtzzXQ%3A1733381781144&ei=lU5RZ5LDCMP21e8P6PaCwAk&ved=0ahUKEwjS4cyqhpCKAxVDe_UHHWi7AJgQ4dUDCA8&uact=5&oq=%EB%8B%AC%EB%9F%AC+%EA%B3%84%EC%82%B0%EA%B8%B0&gs_lp=Egxnd3Mtd2l6LXNlcnAiEOuLrOufrCDqs4TsgrDquLAyChAAGIAEGEYYggIyBBAAGB4yBBAAGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHjIWEAAYgAQYRhiCAhiXBRiMBRjdBNgBAUiXFVDlA1jPE3ADeAGQAQGYAcUCoAGTFqoBBzAuNi40LjO4AQPIAQD4AQGYAgqgAoANqAIMwgIKEAAYsAMY1gQYR8ICBxAjGCcY6gLCAhQQABiABBjjBBi0AhjpBBjqAtgBAcICChAjGIAEGCcYigXCAggQABiABBixA8ICCxAAGIAEGLEDGIMBwgIFEAAYgATCAgoQABiABBhDGIoFwgIIEAAYgAQYogTCAgYQABgIGB6YAxTiAwUSATEgKfEFyXNUaGLTSFGIBgGQBgq6BgYIARABGAGSBwczLjMuMy4xoAfKUw&sclient=gws-wiz-serp
-https://platform.openai.com/tokenizer
-https://platform.openai.com/settings/organization/billing/overview
```

### 사용 spec

redux-toolkit, modal portal, url변경 체크

### 코멘트

"homepage": "https://mytaro.vercel.app/",

정적인 카드 데이터들을 관리하고 사용하기 위해 구조를 만들때 역방향 처리, 스프레드 타입, 타입마다 다른 의미등등.. 신경써야 할 부분이 있어 구조를 수시로 개선..
예시 데이터)
```jsx
  {
    index: 0,
    name: "The fool(바보)",
    url: `${image00}`,
    content: {
      mean: "무엇이든 될 수 있는 자유를 나타냅니다. 가벼운 옷차림에 작은 봇짐 하나 든 여행자가 있습니다. 바로 앞에는 길이 없어 개가 위험을 충고하지만 알아채지 못합니다. 그럼에도 '어떻게든 되겠지' 라며 낙관하고 있는 상태를 의미하는 카드입니다.",
      reverseMean: "역방향",
      readingType: {
        1: {
          upper: {
            0: "새로운 만남. 기분 좋은 의기투합. 스스럼없는 모습의 매력",
            1: "새로운 영감이 떠오른다. 다른업종으로 이직",
            2: "남에게 휘둘리지 않는다. 낙관적",
          },
          lower: {
            0: "불분명한 태도. 진지하지 못한 만남. 얽히고 설킨 관계",
            1: "능력 부족. 무책임으로 발생한 문제",
            2: "개인적인 행동으로 협동성이 부족하다. 기회주의자. 적당한 만남. 나태하다",
          },
        },
        2: {
          upper: {
            0: "생각이 정리되지 않고, 계획이 구체적이지 않습니다. ",
            1: "새로운 일이 시작되고, 무슨일이 일어날지 모릅니다. ",
            2: "현재 환경에서 벗어날 기회가 생깁니다. 작은 일을 계기고 운명이 바뀔수 있습니다",
          },
          lower: {
            0: "임시방편에 불과한 일관성 없는 대응. 우유부단하여 판단력이 부족하다.",
            1: "명확한 방침이 없다. 무책임. 불안정한 상황에 놓여있다.",
            2: "미래가 불투명한 상황이 당분간 지속된다. 속마음을 감출 수 밖에 없는 상황. 모든 일을 적당히 넘긴다.",
          },
        },
      },
    },
  },
```

