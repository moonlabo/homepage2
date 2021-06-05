import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';

ReactDOM.render(
  <div>
    <div>
      <Menu title="로그" url="https://logg.moonlab.ga" desc={[<b>함께 협업하고 손쉽게 프로젝트를 관리하세요.</b>, "새롭게 변한 로그는 기존과 완전히 다른 사용자 경험을 제공합니다."]}></Menu>
      <Menu title="유롭" url="https://urop.moonlab.ga" desc={[<b>손쉽게 URL을 단축하세요.</b>, "단 몇 초만이 소요되는 초간단 URL 단축키입니다."]}></Menu>
    </div>
  </div>,
  document.getElementById('app')
);