package exercicio4;

import java.util.EmptyStackException;
import java.util.Stack;

import org.junit.jupiter.api.Test;

public class TesteEmptyStackException {

	@Test(expected = EmptyStackException.class)
	public void testEmptyStackException() {
		Stack<Integer> stack = new Stack();
		stack.push(10);
		stack.pop();
		stack.pop();
	}

}
