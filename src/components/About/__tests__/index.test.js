import React from "react";
// 该render函数Jest 在 Node.js 环境中创建了一个模拟 DOM 来近似 DOM
// 该cleanup函数用于从 DOM 中删除组件以防止内存泄漏，以及测试之间可能破坏测试结果的变量或数据冲突。
import { render, cleanup } from "@testing-library/react";
// 导入 jest-dom 包
import "@testing-library/jest-dom/extend-expect";
// 导入 About 组件
import About from "..";

//这将确保在每次测试之后，我们不会有任何可能给我们错误结果的剩余内存数据。
afterEach(cleanup);

//renders About test
describe("About component", () => {
  // 第一个测试将是验证组件是否正在呈现的基线。
  it("renders", () => {
    render(<About />);
  });

  // Second Test使用asFragment返回组件快照的函数About。
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<About />);

    // test and compare whether the expected and actual outcomes match.
    expect(asFragment()).toMatchSnapshot();
  });
});
