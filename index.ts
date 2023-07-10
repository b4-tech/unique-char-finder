type CharMap = Map<string, number>;

function findFirstUniqueChar(word: string): string | null {
	let charCount: CharMap = new Map();

	for (let char of word) {
		charCount.set(char, (charCount.get(char) || 0) + 1);
	}

	for (let [char, count] of charCount) {
		if (count === 1) {
			return char;
		}
	}

	return null;
}

function findFirstUniqueWordSymbol(text: string): string | null {
	let words = text.split(/\s+/);
	let symbolCount: CharMap = new Map();

	for (let word of words) {
		let symbol = findFirstUniqueChar(word);
		if (symbol !== null) {
			symbolCount.set(symbol, (symbolCount.get(symbol) || 0) + 1);
		}
	}

	for (let [symbol, count] of symbolCount) {
		if (count === 1) {
			return symbol;
		}
	}

	return null;
}

let text1 = `The Tao gave birth to machine language.  Machine language gave birth
to the assembler.
The assembler gave birth to the compiler.  Now there are ten thousand
languages.
Each language has its purpose, however humble.  Each language
expresses the Yin and Yang of software.  Each language has its place within
the Tao.
But do not program in COBOL if you can avoid it.
        -- Geoffrey James, "The Tao of Programming`

console.log(findFirstUniqueWordSymbol(text1));

let text2 = `C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup`

console.log(findFirstUniqueWordSymbol(text2));