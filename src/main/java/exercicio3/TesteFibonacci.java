package exercicio3;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class TesteFibonacci {

	@Test
	void testaFuncaoFibonacci() {

		Fibonacci fibonacci = new Fibonacci();

		assertEquals(fibonacci.fib(0), 0);
		assertEquals(fibonacci.fib(1), 1);
		assertEquals(fibonacci.fib(2), 1);
		assertEquals(fibonacci.fib(3), 2);
		assertEquals(fibonacci.fib(4), 3);
		assertEquals(fibonacci.fib(5), 5);
		assertEquals(fibonacci.fib(6), 8);
		assertEquals(fibonacci.fib(7), 13);
		assertEquals(fibonacci.fib(8), 21);
	}
}
