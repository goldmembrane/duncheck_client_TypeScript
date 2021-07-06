import React from 'react';

const Home = () => {
  return(
    <>
      <div className = "contentBox">
        <div className = "searchBarBox">
          <input type = "text" className = "searchBar" />
          <div className = "searchButton">검색</div>
        </div>
        <div className = "describeBox">
          <p className = "describe">
            아이디를 검색하면 자신이 정한 컷에 얼마나 맞췄는지 체크하는 사이트입니다.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home;