package exercicio4;

import java.util.EmptyStackException;
import java.util.Stack;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class TesteEmptyStackException {

	@Test
	void testEmptyStackException() {
		final Stack<Integer> stack = new Stack();
		stack.push(10);
		Assertions.assertThrows(EmptyStackException.class, () -> {
			stack.pop();
			stack.pop();
		});
	}

}
