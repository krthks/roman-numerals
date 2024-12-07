package roman;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Optional;

public class RomanNumeralConverter {

    enum RomanNumeral {
        M(1_000),
        CM(900),
        D(500),
        CD(400),
        C(100),
        XC(90),
        L(50),
        XL(40),
        X(10),
        IX(9),
        V(5),
        IV(4),
        I(1),
        ;

        final int value;

        RomanNumeral(int value) {
            this.value = value;
        }
    }

    static String toRomanNumeral(int num) {
        var result = new StringBuilder();
        int remaining = num;
        for (RomanNumeral numeral : RomanNumeral.values()) {
            while (remaining >= numeral.value) {
                result.append(numeral);
                remaining -= numeral.value;
            }
        }
        return result.toString();
    }

    private static final String QUIT = "q";

    private static final int MIN_VALUE = 1;

    private static final int MAX_VALUE = 3999;

    public static void main(String[] args) throws IOException {
        var reader = new BufferedReader(new InputStreamReader(System.in));

        while (true) {
            System.out.printf("%nEnter a number [1 to 3999] to convert to Roman Numeral (or q to quit) : ");
            var input = reader.readLine();

            if (QUIT.equalsIgnoreCase(input)) {
                System.out.println("Goodbye!");
                break;
            }

            Optional.of(input)
                    .flatMap(RomanNumeralConverter::parseInt)
                    .filter(RomanNumeralConverter::isInAllowedRange)
                    .map(RomanNumeralConverter::toRomanNumeral)
                    .ifPresent(romanNumeral -> System.out.printf("%s => %s%n", input, romanNumeral));
        }
    }

    private static boolean isInAllowedRange(int number) {
        if (number < MIN_VALUE || number > MAX_VALUE) {
            System.out.println("ERROR: number outside allowed range");
            return false;
        }
        return true;
    }

    private static Optional<Integer> parseInt(String input) {
        try {
            return Optional.of(Integer.parseInt(input));
        } catch (NumberFormatException e) {
            System.out.println("ERROR: not a valid number");
            return Optional.empty();
        }
    }

}
