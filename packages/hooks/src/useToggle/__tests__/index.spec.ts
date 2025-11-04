import { act, renderHook } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { useToggle } from "../useToggle"

// 测试模块
describe("useToggle", () => {
    // 测试的单元
    // 先口头描述一下用例
    // 我们期望渲染的是默认值
    test("should initialize with default value", () => {
        console.log(111)
        const { result } = renderHook(() => useToggle("男", "女"))
        expect(result.current[0]).toBe("男")
    })

    // 当我们点击或者调用了 toggle 方法，就需要更新当前值
    test("should toggle value", () => {
        const { result } = renderHook(() => useToggle("男", "女"))

        expect(result.current[0]).toBe("男")

        // 模拟了调用 toggle 方法
        act(() => {
            result.current[1]()
        })

        expect(result.current[0]).toBe("女")

        // 模拟了调用 toggle 方法
        act(() => {
            result.current[1]()
        })

        expect(result.current[0]).toBe("男")
    })

    test("no default value", () => {
        const { result } = renderHook(() => useToggle("男"))
        expect(result.current[0]).toBe("男")

        // 模拟了调用 toggle 方法
        act(() => {
            result.current[1]()
        })

        expect(result.current[0]).toBe("男")
    })
})
