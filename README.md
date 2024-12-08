# Roman Numerals converter

## Website

- The javascript version of the converter can be accessed at https://krthks.github.io/roman-numerals/
- The source code is available [here](./docs)

## Java

The source code is available [here](./src/main/java/roman/RomanNumeralConverter.java)

### Pre-requisites

- Java 17 or later
- `java` added to class path

### Running

`java src/main/java/roman/RomanNumeralConverter.java`

#### Sample output
```bash
$ java src/main/java/roman/RomanNumeralConverter.java

Enter a number [1 to 3999] to convert to Roman Numeral (or q to quit) : 1
1 => I

Enter a number [1 to 3999] to convert to Roman Numeral (or q to quit) : 3999
3999 => MMMCMXCIX

Enter a number [1 to 3999] to convert to Roman Numeral (or q to quit) : 4000
ERROR: number outside allowed range

Enter a number [1 to 3999] to convert to Roman Numeral (or q to quit) : -1
ERROR: number outside allowed range

Enter a number [1 to 3999] to convert to Roman Numeral (or q to quit) : abcd
ERROR: not a valid number

Enter a number [1 to 3999] to convert to Roman Numeral (or q to quit) : q
Goodbye!
```
