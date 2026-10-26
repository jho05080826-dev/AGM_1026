// 세 계산기(Bootstrap, Tailwind, Materialize)가 함께 쓰는 계산 코드
function setupCalculator(form) {
  var result = form.result;
  var message = form.querySelector('.message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // 페이지가 새로고침되지 않게 막는다

    var a = Number(form.num1.value);
    var b = Number(form.num2.value);
    var op = form.op.value;
    var answer;

    result.value = '';
    message.textContent = '';

    if (form.num1.value === '' || form.num2.value === '') {
      message.textContent = '숫자 두 개를 모두 입력하세요.';
      return;
    }

    if (op === '+') answer = a + b;
    if (op === '-') answer = a - b;
    if (op === '*') answer = a * b;
    if (op === '/') {
      if (b === 0) {
        message.textContent = '0으로 나눌 수 없습니다.';
        return;
      }
      answer = a / b;
    }

    // 0.1 + 0.2 같은 소수점 오차 정리
    result.value = parseFloat(answer.toPrecision(12));
  });
}
