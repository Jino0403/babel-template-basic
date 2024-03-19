module.exports = {
    preset: ['@babel/preset-env'],
    // javascript 기능을 한번에 지원해주는 패키지
    // 배열데이터 안에 문자 데이터로 해당하는 패키지 명시
    plugins : [[
        ['@babel/plugin-transform-runtime']
        // 비동기 처리를 위한 패키지
    ]]
    // plugin은 두 배열로 들어가져 있는데 2차원 배열이라고도 얘기함(배열안의 배열형태)
}