function render(element,container){
    //创建元素
    const dom = 
    element.type ==='TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(element.type);
    //剔除props中的child，赋予属性
    Object.keys(element.props).filter(key => key !== 'children').forEach(key => dom[key] =element.props[key])
    //递归渲染子元素
    element.props.children.forEach(child => render(child,dom))
    //追加到父节点
    container.append(dom);
    }
    //下一个工作单元为空
    let nextUnitOfWork = null;
    //调度函数
    function workLoop(deadLine){
        //是否要退出
        let shouldYield =false;
        //有工作并且不退出
        while(nextUnitOfWork&&!shouldYield){
            //执行渲染工作并返回下一次工作
            nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
            //是否还有剩余的时间工作
            shouldYield = deadLine.timeRemaining() <1;
        }
        //没有足够的时间，请求下一次在浏览器空闲时执行
        requestIdleCallback(workLoop);
    }
    //第一次调用
    requestIdleCallback(workLoop)
    //执行函数
    function performUnitOfWork(){

    }
    export default render;