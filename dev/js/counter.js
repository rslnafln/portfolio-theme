const countUp = new CountUp('targetId', 75);
if (!countUp.error) {
  countUp.start();
} else {
  console.error(countUp.error);
}