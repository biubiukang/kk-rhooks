// 这个 hook 就是实现 true、false 的切换
import { useState } from "react"

// 男、女
// 上、下

export function useToggle<T, R = T>(defaultValue: T | R, reverseValue?: R): [T | R, () => void] {
    const [value, setValue] = useState<T | R>(defaultValue)

    const toggle = () => {
        // 当前你是否为男，就切换为女，否则切换为男
        setValue(value === defaultValue ? (reverseValue ?? defaultValue) : defaultValue)
    }

    return [value, toggle]
}
