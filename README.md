# imor

## 框架选型

* 编译: Vite
* 基础: Vue3, Ts, Eslint, TailwindCss
* 框架: Konva


## 基础架构

* 基础底座：
    * 1. 应用的加载
    * 2. 应用的生命周期
    * 3. 管理插件

* 基础功能组件：
    * Page: 页面
    * Box: 容器组件, 维护单独的数据
    * Blcok: 原子组件组合出来的集合组件
    * Atom： 原子组件，构建页面的最基本的元素
    * Hooks: 逻辑函数，对 Box 的数据进行操作

* 插件：
    * 1. 在应用的生命周期内，进行管道操作
    * 2. 使用基础功能组件去实现某种特定的需求


## 开发原则

1. 性能优先
2. 规范统一
