// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jest에서 매 test마다 자동으로 cleanup해줌. 만약 수동으로 하고 싶으면 이 주석 풀면 됨.
// import '@testing-library/react/dont-cleanup-after-each';

// mock server 생명주기 별 초기화 해주는 로직
import { server } from './mocks/server';

beforeAll(() => server.listen()); // 테스트 전체 시작 때 서버 on

afterEach(() => server.resetHandlers()); // 테스트 각각 끝났을 때 핸들러 초기화

afterAll(() => server.close()); // 테스트 전체 끝났을 때 서버 off
