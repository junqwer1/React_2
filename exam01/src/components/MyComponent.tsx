'use client'
import { Component } from "react";

type PropType = {
  name?: string | undefined
  num? : number
  children: React.ReactNode
}

class MyComponent extends Component<PropType> {
  render() {
    // console.log('props', this.props)
    // this.pops : 객체 동결 상태 - 부모 컴포넌트에서만 값을 변경 가능, 자식 컴포넌트는 변결 불가
    console.log(Object.getOwnPropertyDescriptors(this.props))
    console.log(Object.isExtensible(this.props)) // 객체 속성 추가 가능 여부, - 불가
    console.log(Object.isFrozen(this.props)) // 객체 동결 상태, 부모쪽 속성 값을 자식에서 변경 불가하게 동제가 되고 있음
    // const name = this.props.name ?? '기본 이름'
    const { name, children } = this.props;
    // name = name ?? '기본 이름'
    console.log('children', children)
    return (
      <>
        <h1>나의 멋진 클래스형 컴포넌트</h1>
        <h2>{name}님 반갑습니다.</h2>
        {children}
      </>

    )
  }
}

export default MyComponent