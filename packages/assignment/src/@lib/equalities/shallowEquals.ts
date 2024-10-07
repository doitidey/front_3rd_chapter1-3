// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리

  // 3. 객체의 키 개수가 다른 경우 처리

  // 4. 모든 키에 대해 얕은 비교 수행

  // 이 부분을 적절히 수정하세요.

  if (objA === objB) {
    return true;
  }

  if (objA === null || objB === null) {
    return false;
  }

  if (typeof objA === "object" && typeof objB === "object") {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    for (const key of keysA) {
      if (objA[key] !== objB[key]) {
        return false;
      }
    }

    return true;
  }

  return false;
}
