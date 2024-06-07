function createElement(type, props, ...children){
    return{
        type,
        props: {
            ...props,
            children: children.map(child=>typeof child ==='object'? child:createTextNode(child)),
            },
        };
    }
    //对纯文本的处理
    function createTextNode(text){
        return{
            type:'TEXT_ELEMENT',
            props:{
                nodeValue:text,
                children:[],
            },
          };
    }
    export default createElement;