// import
const path = require('path') // Node.js에서 기본적으로 제공하는 전역모듈인 path 가져올 수 있음
const htmlPlugin = require('html-webpack-plugin')
const copyPlugin = require("copy-webpack-plugin")

//export
module.exports = {
    entry:'./js/main.js', 
    // 파일을 읽어들이는 진입점 설정 ex. parcel index.html(진입점 = index.html)
    // 웹팩은 기본적으로 html이 아닌 Javascript를 진입점으로 사용
    // parcel 기준 parcel main.js
    output: {
        // entry라는 옵션을 통해 읽어들인 파일의 기본적인 연결관계를 webpack이 분석해서
        // 결과를 내어주는 기본적인 구성을 작성가능
        // 번들러 동작시 어떠한 경로에 결과물을 만들어서 내어줄 것인지 명시
        // path 경로는 Node.js에서 요구하는 절대경로 필요
        path: path.resolve(__dirname, "dist"), // __dirname: node.js 에서 사용가능한 전역변수(현재 파일잉 있는 그 경로 지칭)
        // webpack.config.js가 있는 부분의 해당 경로가 __dirname의 경로 위 둘(__dirname, "public")을 합쳐 절대적인 경로를 output의 path에 제공가능
        // .resolve()는 첫 번째 인수와 두 번째 인수에 있는 기본적인 경로를 합쳐주는 역할
        filename:'main.js', 
        // 엔트리에서 읽어들이기 시작하는 파일의 이름과 동일하게 지정 가능
        // 엔트리에서 진입점으로 사용한 main.js에 연결된 모든 내용들을 번들로 만들어 합쳐서 filename의 값으로 내어줌
        clean:true
        // 새롭게 build 명령을 돌렸을 때 기존에 필요하지 않은 내용들을 깨끗하게 제거해주고 다시 결과물 만들기 가능
    },

    module: {
        rules: [
            {
                test:/\.s?css$/,
                // 정규표현식의 임의의한문자가 아닌 단순 마침표로 해석될수 있도록 \ 작성
                // $는 앞에 있는 내용으로 끝나는 특정한 문자를 찾음
                // .css라는 확장자로 끝나는 것을 찾는 정규식
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.js$/,
                // 정규표현식의 임의의한문자가 아닌 단순 마침표로 해석될수 있도록 \ 작성
                // $는 앞에 있는 내용으로 끝나는 특정한 문자를 찾음
                // .js라는 확장자로 끝나는 것을 찾는 정규식
                use: [
                    'babel-loader'
                ]
            }
            // 웹팩이 해석하려면 바벨로더 필요
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new htmlPlugin({
            template: "./index.html"
        }),
        new copyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
        // copyPlugin을 통하여 static폴더 안에 있는 내용이 copy, 복사가 되어 dist 폴더로 들어갈 수 있게 만들어주는 플러그인
        // 어디에서부터 해당하는 내용을 복사해서 dist라는 폴더로 집어 넣을 것인지를 patterns 옵션에 명시
        // 배열인 이유는 여러 개의 경로들을 명시 해 줄수있기때문
    ]
}
// 진행할때는 npm run dev가 아닌 npm run build로 진행!, 내용수정해도 동일
