Responsive image replacement
============================

Picture element와 흡사한 기능으로 img tag를 반응형 사이즈에 맞게 src를 변경 시켜 줍니다.


사용방법
-----

####셋팅

하단 body 태그위에 삽입 합니다.

	<script src='responsive.min.js'></script>
	</body>
</html>


#### HTML 구조

	<img src="" data-path="images/" data-mobile="smallest.jpg" data-tablet="medium.jpg" data-web="big.jpg" alt="" />





옵션
-------

필수 옵션으로 data-path가 필요합니다.

| Name            | Type      | Description
| --------------- | --------- | ---------------------------------------------------- |
| `data-path` | attribute | 변경이 필요한 img tag에 추가 |
