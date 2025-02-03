'use client'
const JoinForm = ({actionState}) => {
  const [errors/* 리턴 값 */, formAction, isPending/*<- 중복제출 방지 */] = actionState
  return (
    <>
      <form action={formAction}>
        <dl>
          <dt>이메일</dt>
          <dd>
            <input type="text" name="email" />
            {errors?.email && errors.email.map(m => <div key={m}>{m}</div>)}
          </dd>
        </dl>
        <dl>
          <dt>비밀번호</dt>
          <dd>
            <input type="password" name="password" />
            {errors?.password && errors.password.map(m => <div key={m}>{m}</div>)}
          </dd>
        </dl>
        <dl>
          <dt>비밀번호 확인</dt>
          <dd>
            <input type="password" name="confirmPassword" />
            {errors?.confirmPassword && errors.confirmPassword.map(m => <div key={m}>{m}</div>)}
          </dd>
        </dl>
        <dl>
          <dt>회원명</dt>
          <dd>
            <input type="text" name="name" />
            {errors?.name && errors.name.map(m => <div key={m}>{m}</div>)}
          </dd>
        </dl>
        <button type="submit" disabled={isPending}>가입하기</button>
      </form>
    </>
  )
}

export default JoinForm
