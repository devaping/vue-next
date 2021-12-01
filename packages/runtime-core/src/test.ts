const updateComponent = (n1: VNode, n2: VNode, optimized: boolean) => {
    const instance = (n2.component = n1.component)!

    // 根据新旧子组件 vnode 判断是否需要更新子组件
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (
        __FEATURE_SUSPENSE__ &&
        instance.asyncDep &&
        !instance.asyncResolved
      ) {
        // async & still pending - just update props and slots
        // since the component's reactive effect for render isn't set-up yet
        // 更新组件 vnode 节点信息
        updateComponentPreRender(instance, n2, optimized)
       
        return
      } else {
        // normal update
        // 新的子组件 vnode 赋值给 instance.next
        instance.next = n2
        // in case the child component is also queued, remove it to avoid
        // double updating the same child component in the same flush.
        // 子组件也可能因为数据变化被添加到更新队列里了，移除它们防止对一个子组件重复更新
        invalidateJob(instance.update)
        // instance.update is the reactive effect.
        // 执行子组件的副作用渲染函数
        instance.update()
      }
    } else {
      // no update needed. just copy over properties
      // 不需要更新，只复制属性
      n2.component = n1.component
      n2.el = n1.el
      instance.vnode = n2
    }
  }