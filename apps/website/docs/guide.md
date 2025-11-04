# 快速开始

## 安装

```bash
npm install @kk/rhooks
```

如果是将产物发布在 npm 上，那么我们这样安装之后即可使用，但如果产物是发布在私有 npm 仓库上，那么我们需要在安装时指定 registry，例如：

```bash
npm install @kk/rhooks --registry https://registry.npmmirror.com
```

这个 registry 自行替换

## 导入依赖

```tsx
import { useRequest } from '@kk/rhooks'
```

## 开始使用

```tsx
import { useRequest } from '@kk/rhooks'

function App() {
    const { data, run } = useRequest(() => fetch('/api/data'))

    return (
        <div>
            <button onClick={() => run()}>获取数据</button>
            {data && <div>{data}</div>}
        </div>
    )
}
```
