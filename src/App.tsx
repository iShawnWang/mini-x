import styled from './cssinjs'

function App() {
  const c = 'red'
  const weight = 'bold'
  const A = styled('a')`
    font-size: 14px;
    color: ${c};
    font-weight: ${weight};
  `;

  return (
     <div>
      css in js 实现 styled() 方法 : <A href="https://www.baidu.com">百度</A>
     </div>
  )
}

export default App


