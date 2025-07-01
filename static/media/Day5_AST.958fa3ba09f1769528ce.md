# 컴파일러 동작 방식 학습 보고서

## 문제를 처음 접했을 때의 이해

처음에는 컴파일러를 단순히 "코드를 실행 가능한 상태로 바꿔주는 도구" 정도로 이해하고 있었습니다.  
예를 들어 JavaScript에서 소스코드를 브라우저나 실행 환경에서 동작할 수 있도록 컴퓨터가 이해 가능한 언어로 바꿔주는 '중간 처리기'라고 생각했습니다.

보다 구체적으로는 다음과 같은 정도였습니다:

> **"컴파일러는 코드를 실행할 수 있게 만든다"** 라는 개념적 이해는 있었지만,  
> 실제로 어떤 단계를 거쳐 코드가 처리되는지,  
> 코드가 어떻게 분석되고 어떤 구조로 바뀌는지(AST, IR 등),  
> 혹은 최적화나 실행 성능을 어떻게 높이는지는 거의 알지 못했습니다.

예를 들어 `var a = new A.init();` 한 줄의 코드가 내부적으로 어떤 트리 구조로 바뀌고,  
그 구조가 어떻게 실행 및 최적화로 이어지는지를 이번 학습을 통해 처음 접했습니다.

---

## 컴파일러의 주요 처리 단계

컴파일러는 다음과 같은 단계를 거칩니다:

1. **Lexical Analysis (어휘 분석)**  
   코드 문자열을 토큰 단위로 나눕니다. 예: `var`, `a`, `=`, `new`, `A`, `.`, `init`, `(`, `)`, `;`

2. **Parsing (구문 분석)**  
   문법 규칙에 따라 AST(Abstract Syntax Tree)을 생성합니다.

3. **Semantic Analysis (의미 분석)**  
   타입 검사, 선언 여부 확인, 스코프 분석 등을 수행합니다.

4. **IR (Intermediate Representation) 생성**  
   AST를 더 낮은 수준의 코드로 변환합니다.

5. **Optimization (최적화)**  
   중복 제거, 타입 특화, 추측 기반 실행 경로 최적화를 수행합니다.

6. **Code Generation (코드 생성)**  
   타겟 플랫폼에 맞는 실행 코드를 출력합니다.

---

## 가장 인상 깊었던 개념: 추측 기반 컴파일

JavaScript는 **추측 기반 컴파일(speculative compilation)**을 수행합니다.  
이러한 컴파일 방식은 실행 중 추측한 타입/패턴을 바탕으로 최적화된 네이티브 코드를 생성합니다.

### TypeScript는 왜 추측 기반 컴파일을 제거하지 못할까?

TypeScript는 정적 타입 시스템을 가지고 있어 컴파일 타임에 타입을 검사합니다.  
하지만 최종적으로 실행되는 것은 JavaScript이며,  
JS 엔진은 여전히 타입 정보를 알 수 없으므로 추측 기반 JIT 컴파일을 수행합니다.

- **TS는 추측을 줄이는 도구**일 뿐 **추측을 제거하진 못합니다**.
- 대신, **일관된 타입 설계**를 통해 **JIT 최적화 성공 확률**을 높이는 데 기여합니다.

---

## JavaScriptCore(JSC)의 추측 기반 최적화

Safari의 JS 엔진인 JavaScriptCore는 다음과 같은 방식을 사용합니다:

- **타입 추측**: 변수 대부분이 숫자라고 가정하여 숫자 전용 연산 코드 생성
- **경로 추측**: 특정 조건문이 자주 참이라면 해당 코드 경로에 최적화를 집중
- **Deoptimization (디옵티마이제이션)**: 추측이 틀릴 경우 인터프리터로 즉시 롤백
- **OSR (On-Stack Replacement)**: 실행 중 디옵트 시 상태를 복원하는 기술

### 다이아몬드 추측과 OSR 추측

- **분할 (code splitting)**은 코드 복제를 통해 분기를 줄이는 기법입니다.
- JSC에서는 **꼬리 복제(tail duplication)** 방식으로 소규모 코드에 대해 다이아몬드 추측 최적화를 수행합니다.
- **OSR 추측**은 비용이 크지만 반복 코드를 최적화할 수 있어 주된 전략으로 활용됩니다.

---

## JIT 구조와 단계적 최적화

JavaScriptCore는 다음과 같은 JIT 단계를 가지고 있습니다:

- **Baseline JIT → DFG → FTL** 등의 단계로 점진적으로 최적화를 적용합니다.
- 각 단계에서 실행 프로파일을 수집해 추측 정보를 반영하며 재컴파일을 수행합니다.
- 이를 통해 빠른 초기 실행과 높은 최종 성능을 모두 달성할 수 있습니다.

---

## AST 구조 설계: `var a = new A.init();`

### 1. Lexical Analysis

입력: `"var a = new A.init();"`  
출력: `[VAR, IDENT(a), ASSIGN, NEW, IDENT(A), DOT, IDENT(init), LPAREN, RPAREN, SEMICOLON]`

### 2. Parsing

입력: 위 토큰 스트림  
출력: AST

AST 구조는 다음과 같이 트리 형태로 구성할 수 있습니다:

```
VariableDeclaration
├── kind: "var"
└── declarations:
    └── VariableDeclarator
        ├── id: Identifier(name="a")
        └── init: NewExpression
            └── callee: MemberExpression
                ├── object: Identifier(name="A")
                └── property: Identifier(name="init")
            └── arguments: []
```

### 3. 데이터 구조 설계

```json
{
  "type": "VariableDeclaration",
  "kind": "var",
  "declarations": [
    {
      "type": "VariableDeclarator",
      "id": {
        "type": "Identifier",
        "name": "a"
      },
      "init": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": { "type": "Identifier", "name": "A" },
          "property": { "type": "Identifier", "name": "init" },
          "computed": false
        },
        "arguments": []
      }
    }
  ]
}
```

### 4. 클래스 기반 데이터 구조

```ts
class Node {
  type: string;
}

class Identifier extends Node {
  name: string;
}

class VariableDeclarator extends Node {
  id: Identifier;
  init: Node;
}

class VariableDeclaration extends Node {
  kind: "var" | "let" | "const";
  declarations: VariableDeclarator[];
}

class MemberExpression extends Node {
  object: Identifier;
  property: Identifier;
  computed: boolean = false;
}

class NewExpression extends Node {
  callee: MemberExpression;
  arguments: Node[];
}
```

이러한 구조를 바탕으로 트리 탐색, 의미 분석, IR 변환 등 다양한 컴파일러 단계로 확장할 수 있습니다.

---

## 마무리

이 과정을 통해 단순히 "코드를 실행 가능하게 만든다"는 막연한 이해에서 벗어나  
컴파일러가 어떤 단계와 책임을 가지고 동작하는지,  
그 내부에서 어떤 최적화 전략이 활용되는지를 보다 구체적으로 이해할 수 있었습니다.
