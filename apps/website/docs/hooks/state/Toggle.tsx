import { useToggle } from "@kk-rhooks/hooks"
export default function UseTogglePage() {
    const [state, toggle] = useToggle(false, true)
    return (
        <div>
            <h1>useToggle</h1>
            <p>当前状态：{state ? "ON" : "OFF"}</p>
            <button onClick={toggle}>切换状态</button>
        </div>
    )
}
