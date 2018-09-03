/**
 * 
 * 돈 14000원을 넣는다.
 * 로또 14개를 구매한다. 
 * 14개의 티켓(배열)을 만든다. - 티켓 만드는 함수
 * 배열 : 1) 6개의 원소를 가지고 있어야 한다.
 *       2) 각 원소의 범위는 1~45의 랜덤 수
 *       3) 힌 베열 안에서, 각 원소는 중복이 없어야 한다.(set사용) 
 * 
 * ----------------
 * 
 * 당첨 번호 만들기
 * 럭키넘버 - 이게 당첨 번호인것 같고..... 당첨 번호를 내가 정해주는 듯.... 
 * 하.... 그냥 중복 없이 숫자 써주면 될듯...
 * 
 * 
 * --------------
 * 
 * 발행한 티켓과 당첨 번호를 비교하기
 * (당첨번호와 비교시, 순서는 상관 없다.)
 * 1) 발행한 티켓들(배열)을 순회 한다.
 * 2) 당첨 번호와 티켓을 비교해서 카운팅 한다.
 * 
 * 
 * -------------
 * 수익률 계산
 * 내가 쓴돈, 번돈 나누기...?
 */

const LOTTO_PRICE = 1000

const buyLottos = (moneyPaid) => {
  const numberOfLottos = moneyPaid/LOTTO_PRICE;
  const lottos = makeLottos(numberOfLottos)
  
  loggingByLottos(lottos)
}

const makeLottos = (number) => {
  const lottos = [];
  for(let i = 0; i < number; i++) {
    lottos.push(makeLotto())
  }
  return lottos;
}

const makeLotto = () => {
  let lotto = new Set();
  const lottoLength = 6;
  while (lotto.size < lottoLength) {
    lotto.add(getRandomNumber()); 
  }
  return [ ...lotto ]
}

const getRandomNumber = () => {
  const maxNumber = 45;
  const minNumber = 1;
  return Math.floor(Math.random() * (maxNumber)) + minNumber;
}

const loggingByLottos = (lottos) => {
    console.log(`> 로또 ${lottos.length}개를 발행했습니다.`);
    lottos.forEach(lotto => console.log(lotto))
}

////////

const setLuckeyNumber = (luckeyNumber) => {
  // TODO... 이걸 메인 로직처럼 하라는 건가.....?
}

// const lottoNumber;



buyLottos(14000); // 결과가 로또 발행수와 발행한 티켓들 console 찍어주는거...?
setLuckeyNumber([1, 2, 3, 4, 5, 6]);
