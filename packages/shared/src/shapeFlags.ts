export const enum ShapeFlags {
  ELEMENT = 1,                   // 元素
  FUNCTIONAL_COMPONENT = 1 << 1, // 函数式组件
  STATEFUL_COMPONENT = 1 << 2,   // 状态组件
  TEXT_CHILDREN = 1 << 3,        // 子元素是文本
  ARRAY_CHILDREN = 1 << 4,       // 子元素是数组
  SLOTS_CHILDREN = 1 << 5,       // 子元素是插槽
  TELEPORT = 1 << 6,             // 传送门
  SUSPENSE = 1 << 7,             // SUSPENSE异步管理
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,  // 组件应该是kept-alive
  COMPONENT_KEPT_ALIVE = 1 << 9, // kept-alive组件
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT  // 组件包含状态组件和函数式组件
}
/**
 * vnode类型
 */
