기능요구사항
문자열 키(key)와 문자열 값(value)을 저장하는 해시맵 라이브러리를 구현한다.

나만의 고유한 Hash 함수를 정한다.

이미 구현된 코드를 그대로 가져오기보다는 원리에 충실하게 만들어 본다.

해당 언어/개발 환경에 있는 Map, HashMap (또는 Dictionary) 기본 동작을 따라 만드는 게 목표다.

Hash() 함수 매칭과 한계 범위에 따라서 HashMap 구조상 Bucket Size도 결정한다.

프로그래밍 요구사항
클래스나 객체로 구현하지 않고 함수들만 구현해도 무방하다.

모든 함수를 hash 하나의 파일에 작성한다.

자바스크립트 hash.js

데이터 구조는 언어나 라이브러리에서 HashMap 역할로 제공하는 Object, Map, HashMap, Dictionary 등을 사용하지 않고 반드시 직접 배열이나 리스트로만 구현한다.

구현해야 하는 함수들

clear() 전체 맵을 초기화한다.

containsKey(String) 해당 키가 존재하는지 판단해서 Bool 결과를 리턴한다.

get(String) 해당 키와 매치되는 값을 찾아서 리턴한다.

isEmpty() 비어있는 맵인지 Bool 결과를 리턴한다.

keys() 전체 키 목록을 [String] 배열로 리턴한다.

put(String key, String value) 키-값을 추가한다.

remove(String key) 해당 키에 있는 값을 삭제한다.

size() 전체 아이템 개수를 리턴한다.
